import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { launchImageLibrary, ImageLibraryOptions } from "react-native-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from "../../assets/icons/camera";
import { moderateScale as ms } from "../../utils/scalingUtils";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

type Props = { route: { params?: { name?: string; email?: string } } };

export const StudentProfileScreen: React.FC<Props> = ({ route }) => {
  const { name: userName, email: userEmail } = route.params || {};
  const [name, setName] = useState(userName || "Student Name");
  const [email, setEmail] = useState(userEmail || "student@email.com");
  const [institutionId] = useState("INST123");
  const [studentId] = useState("STU001");
  const [parentId] = useState("PAR001");
  const [profileImage, setProfileImage] = useState("https://i.ibb.co/3c3QzGQ/sample-profile.jpg");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [city, setCity] = useState("Chennai");

  useEffect(() => {
    if (userName) setName(userName);
    if (userEmail) setEmail(userEmail);
    loadImageFromStorage();
  }, [userName, userEmail]);

  const loadImageFromStorage = async () => {
    try {
      const uri = await AsyncStorage.getItem("studentProfileImage");
      if (uri) setProfileImage(uri);
    } catch (e) {
      console.log("Error loading image:", e);
    }
  };

  const requestGalleryPermission = async (): Promise<boolean> => {
    if (Platform.OS === "android") {
      let perm = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      if (Platform.Version >= 33) perm = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
      const granted = await PermissionsAndroid.request(perm, {
        title: "Gallery Permission",
        message: "App needs access to your gallery",
        buttonPositive: "OK",
      });
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handlePickImage = async () => {
    if (!(await requestGalleryPermission())) return Alert.alert("Permission denied", "Cannot access gallery");
    try {
      const result = await launchImageLibrary({ mediaType: "photo", quality: 0.8 });
      if (result.assets?.length) {
        const uri = result.assets[0].uri;
        if (uri) {
          setProfileImage(uri);
          await AsyncStorage.setItem("studentProfileImage", uri);
        }
      }
    } catch (e) {
      console.log("Image picker error:", e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Student Profile</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <TouchableOpacity onPress={handlePickImage} style={styles.cameraButton}>
          <Camera width={ms(15)} height={ms(15)} />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} editable={false} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Enter Password" />
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text>{dob ? dob.toDateString() : "Select Date of Birth"}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dob || new Date()}
          mode="date"
          display="default"
          onChange={(e, date) => {
            setShowDatePicker(false);
            if (date) setDob(date);
          }}
        />
      )}
      <Text style={styles.label}>City</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={city} onValueChange={(v) => setCity(v)}>
          <Picker.Item label="Chennai" value="Chennai" />
          <Picker.Item label="Bangalore" value="Bangalore" />
          <Picker.Item label="Delhi" value="Delhi" />
          <Picker.Item label="Mumbai" value="Mumbai" />
        </Picker>
      </View>
      <Text style={styles.label}>Institution ID</Text>
      <TextInput style={styles.input} value={institutionId} editable={false} />
      <Text style={styles.label}>Student ID</Text>
      <TextInput style={styles.input} value={studentId} editable={false} />
      <Text style={styles.label}>Parent ID</Text>
      <TextInput style={styles.input} value={parentId} editable={false} />
      <TouchableOpacity style={styles.saveButton} onPress={() => Alert.alert("Saved!")}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: ms(20), backgroundColor: "#fff", flexGrow: 1, alignItems: "center", marginTop: ms(10) },
  header: { fontSize: ms(20), fontWeight: "600", marginVertical: ms(15) },
  imageContainer: { position: "relative", marginBottom: ms(15), borderRadius: ms(60), borderWidth: 1, borderColor: "#f97316" },
  profileImage: { width: ms(120), height: ms(120), borderRadius: ms(60) },
  cameraButton: { position: "absolute", bottom: 0, right: 0, backgroundColor: "#f97316", borderRadius: ms(25), padding: ms(6) },
  label: { fontSize: ms(15), marginVertical: ms(8), fontWeight: "600", alignSelf: "flex-start" },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: ms(8), padding: ms(10), fontSize: ms(13), width: "90%", backgroundColor: "#f9f9f9" },
  pickerWrapper: { borderWidth: 1, borderColor: "#ddd", borderRadius: ms(8), width: "90%", backgroundColor: "#f9f9f9", marginBottom: ms(10) },
  saveButton: { backgroundColor: "#f97316", padding: ms(12), borderRadius: ms(8), marginTop: ms(20), width: "100%", alignItems: "center" },
  saveButtonText: { color: "#fff", fontSize: ms(14), fontWeight: "600" },
});
