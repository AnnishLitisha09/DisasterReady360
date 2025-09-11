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
import { moderateScale } from "../../utils/scalingUtils";
import { Camera } from "../../assets/icons/camera";

type ParentProfileParams = {
  name?: string;
  email?: string;
  childName?: string;
};

type Props = {
  route: { params?: ParentProfileParams };
};

export const ParentProfileScreen: React.FC<Props> = ({ route }) => {
  const { name: userName, email: userEmail, childName } = route.params || {};

  const [name, setName] = useState(userName || "Parent Name");
  const [email, setEmail] = useState(userEmail || "parent@email.com");
  const [child, setChild] = useState(childName || "Child Name");
  const [profileImage, setProfileImage] = useState(
    "https://i.ibb.co/3c3QzGQ/sample-profile.jpg"
  );

  useEffect(() => {
    if (userName) setName(userName);
    if (userEmail) setEmail(userEmail);
  }, [userName, userEmail]);

  // ✅ Request gallery permission (Android only)
  const requestGalleryPermission = async (): Promise<boolean> => {
    if (Platform.OS === "android") {
      let permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      if (Platform.Version >= 33) {
        permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
      }

      const granted = await PermissionsAndroid.request(permission, {
        title: "Gallery Permission",
        message: "App needs access to your gallery to select a profile image",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      });

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; // iOS handles permissions automatically
  };

  // ✅ Open gallery only
  const openGallery = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      Alert.alert("Permission denied", "Cannot access gallery");
      return;
    }

    const options: ImageLibraryOptions = { mediaType: "photo", quality: 0.8 };

    try {
      const result = await launchImageLibrary(options);
      if (result.didCancel) {
        console.log("User cancelled image picker");
      } else if (result.errorCode) {
        Alert.alert("Error", result.errorMessage || "Something went wrong!");
      } else if (result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        if (uri) setProfileImage(uri);
      }
    } catch (error) {
      console.log("Image picker error: ", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Parent Profile</Text>

      <View style={styles.imageContainer}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <TouchableOpacity style={styles.cameraIcon} onPress={openGallery}>
          <Camera width={moderateScale(18)} height={moderateScale(18)} />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} editable={false} />

      <Text style={styles.label}>Child Name</Text>
      <TextInput style={styles.input} value={child} editable={false} />
      <TouchableOpacity style={styles.saveButton} onPress={() => Alert.alert("Saved!")}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(30),
    backgroundColor: "#fff",
    flexGrow: 1,
    alignItems: "center",
    marginTop: moderateScale(15),
  },
  header: {
    fontSize: moderateScale(20),
    fontWeight: "600",
    marginVertical: moderateScale(20),
  },
  imageContainer: {
    position: "relative",
    marginBottom: moderateScale(20),
    borderRadius: moderateScale(60),
    borderWidth: 1,
    borderColor: "#f97316",
  },
  profileImage: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#f97316",
    borderRadius: moderateScale(25),
    padding: moderateScale(6),
  },
  label: {
    fontSize: moderateScale(17),
    marginVertical: moderateScale(10),
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    fontSize: moderateScale(14),
    width: "90%",
    backgroundColor: "#f9f9f9",
  },
  saveButton: {
    backgroundColor: "#f97316",
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
    marginTop: moderateScale(30),
    width: "100%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
});

