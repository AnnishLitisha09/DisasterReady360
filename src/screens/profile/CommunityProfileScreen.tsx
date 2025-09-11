import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { moderateScale } from "../../utils/scalingUtils";
import { Camera } from "../../assets/icons/camera";

type CommunityProfileParams = { name?: string; email?: string; communityName?: string; };
type Props = { route: { params?: CommunityProfileParams } };

export const CommunityProfileScreen: React.FC<Props> = ({ route }) => {
  const { name: userName, email: userEmail, communityName } = route.params || {};
  const [name, setName] = useState(userName || "Community User");
  const [email, setEmail] = useState(userEmail || "community@email.com");
  const [community, setCommunity] = useState(communityName || "Community Name");
  const [profileImage, setProfileImage] = useState("https://i.ibb.co/3c3QzGQ/sample-profile.jpg");

  const openGallery = () => {
    launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri || profileImage);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Community Profile</Text>

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

      <Text style={styles.label}>Community</Text>
      <TextInput style={styles.input} value={community} editable={false} />
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
