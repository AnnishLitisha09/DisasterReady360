import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Camera } from "../../assets/icons/camera";
import { moderateScale as ms } from "../../utils/scalingUtils";

type TeacherProfileParams = { name?: string; email?: string };
type Props = { route: { params?: TeacherProfileParams } };

export const TeacherProfileScreen: React.FC<Props> = ({ route }) => {
  const { name: userName, email: userEmail } = route.params || {};
  const [name, setName] = useState(userName || "Teacher Name");
  const [email, setEmail] = useState(userEmail || "teacher@email.com");
  const [teacherId] = useState("TEA001");
  const [department] = useState("Mathematics");
  const [profileImage, setProfileImage] = useState(
    "https://i.ibb.co/3c3QzGQ/sample-profile.jpg"
  );

  useEffect(() => {
    if (userName) setName(userName);
    if (userEmail) setEmail(userEmail);
  }, [userName, userEmail]);

  const handlePickImage = () => {
    launchImageLibrary({ mediaType: "photo", quality: 0.5 }, (res) => {
      if (res.assets?.length) setProfileImage(res.assets[0].uri || profileImage);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Teacher Profile</Text>

      <View style={styles.imageContainer}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <TouchableOpacity style={styles.cameraButton} onPress={handlePickImage}>
          <Camera width={ms(15)} height={ms(15)} fill="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} editable={false} />

      <Text style={styles.label}>Teacher ID</Text>
      <TextInput style={styles.input} value={teacherId} editable={false} />

      <Text style={styles.label}>Department</Text>
      <TextInput style={styles.input} value={department} editable={false} />

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ms(20),
    backgroundColor: "#fff",
    flexGrow: 1,
    alignItems: "center",
    marginTop: ms(10),
  },
  header: { fontSize: ms(20), fontWeight: "600", marginVertical: ms(15) },
  imageContainer: {
    position: "relative",
    marginBottom: ms(15),
    borderRadius: ms(60),
    borderWidth: 1,
    borderColor: "#f97316",
  },
  profileImage: { width: ms(120), height: ms(120), borderRadius: ms(60) },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#f97316",
    borderRadius: ms(25),
    padding: ms(6),
  },
  label: {
    fontSize: ms(15),
    marginVertical: ms(8),
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: ms(8),
    padding: ms(10),
    fontSize: ms(13),
    width: "90%",
    backgroundColor: "#f9f9f9",
  },
  saveButton: {
    backgroundColor: "#f97316",
    padding: ms(12),
    borderRadius: ms(8),
    marginTop: ms(20),
    width: "100%",
    alignItems: "center",
  },
  saveButtonText: { color: "#fff", fontSize: ms(14), fontWeight: "600" },
});
