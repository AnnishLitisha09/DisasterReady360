// screens/Profile.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  StatusBar,
  FlatList,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { FieldBox } from "../../components/FieldBox";
import { launchImageLibrary } from "react-native-image-picker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Camera } from "../../assets/icons/camera";
import { Arrowback } from "../../assets/icons";
import { moderateScale } from "../../utils/scalingUtils";
import { getAuthData, saveAuthData } from "../../store/authStorage";
import { useNavigation } from "@react-navigation/native";

const defaultAvatar = {
  uri: "https://static.vecteezy.com/system/resources/thumbnails/029/271/062/small_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg",
};

type Role = "student" | "teacher" | "parent" | "community" | "schoolAdmin";

const roleFields: { [K in Role]: string[] } = {
  student: ["Name", "Email", "Institution Name", "Date of Birth"],
  teacher: ["Name", "Email", "Institution Name"],
  parent: ["Name", "Email"],
  community: ["Name", "Email", "City"],
  schoolAdmin: ["Name", "Email"],
};

const cityOptions = ["Sathy", "Chennai", "Coimbatore", "Salem", "Madurai", "Bangalore"];

export default function Profile(): JSX.Element {
  const navigation = useNavigation();
  const [role, setRole] = useState<Role>("teacher");
  const [formData, setFormData] = useState<Record<string, string>>({
    Name: "",
    Email: "",
    Password: "",
    "Date of Birth": "",
    City: "",
    "Institution Name": "",
  });
  const [avatarUri, setAvatarUri] = useState<any>(defaultAvatar);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);

  // Load auth data including avatar
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const authData = await getAuthData();
        if (authData) {
          setFormData((prev) => ({
            ...prev,
            Name: authData.name || prev.Name,
            Email: authData.email || prev.Email,
          }));
          if (authData.avatar) setAvatarUri({ uri: authData.avatar });
          if (authData.role) setRole(authData.role as Role);
        }
      } catch (e) {
        console.warn("Failed to load profile", e);
      }
    };
    loadProfile();
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (field === "City") setShowCitySuggestions(value.length > 0);
  };

  const onSave = async () => {
    try {
      const authData = await getAuthData();
      if (authData) {
        await saveAuthData({ ...authData, ...formData, avatar: avatarUri.uri });
      }
      Alert.alert("Saved", "Profile changes saved successfully.", [{ text: "OK" }]);
    } catch (e) {
      console.warn("Failed to save profile", e);
    }
  };

  const requestGalleryPermission = async (): Promise<boolean> => {
    if (Platform.OS === "android") {
      try {
        const perm =
          Platform.Version >= 33
            ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
        return (await PermissionsAndroid.request(perm)) === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const onPressAvatar = async () => {
    if (!(await requestGalleryPermission())) {
      Alert.alert("Permission Denied", "Please allow gallery access to change avatar.");
      return;
    }
    const result = await launchImageLibrary({ mediaType: "photo", quality: 0.7 });
    if (result.assets?.length) {
      const uri = result.assets[0].uri;
      setAvatarUri({ uri });

      // Update AsyncStorage immediately
      const authData = await getAuthData();
      if (authData) await saveAuthData({ ...authData, avatar: uri });
    }
  };

  const onSelectDate = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (_, d) => {
        if (d)
          handleChange(
            "Date of Birth",
            `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1)
              .toString()
              .padStart(2, "0")}/${d.getFullYear()}`
          );
      },
      mode: "date",
      is24Hour: true,
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F6" />
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <Arrowback />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Edit Profile</Text>
        </View>

        <View style={styles.avatarWrap}>
          <TouchableOpacity onPress={onPressAvatar} activeOpacity={0.8} style={styles.avatarTouchable}>
            <View style={styles.avatarBorder}>
              <Image source={avatarUri} style={styles.avatarImage} resizeMode="cover" />
            </View>
            <View style={styles.cameraButton}>
              <Camera />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          {roleFields[role].map((field) => {
            if (field === "Date of Birth")
              return (
                <FieldBox
                  key={field}
                  label={field}
                  value={formData[field] ?? ""}
                  dropdown
                  placeholder="Select Date"
                  onPress={onSelectDate}
                />
              );
            if (field === "City")
              return (
                <View key={field}>
                  <FieldBox
                    label={field}
                    value={formData[field] ?? ""}
                    onChangeText={(v) => handleChange(field, v)}
                    placeholder="Type city"
                  />
                  {showCitySuggestions && (
                    <FlatList
                      data={cityOptions.filter((c) =>
                        c.toLowerCase().includes((formData["City"] || "").toLowerCase())
                      )}
                      keyExtractor={(i) => i}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => {
                            handleChange("City", item);
                            setShowCitySuggestions(false);
                          }}
                          style={styles.cityItem}
                        >
                          <Text>{item}</Text>
                        </TouchableOpacity>
                      )}
                      style={styles.cityList}
                    />
                  )}
                </View>
              );
            return (
              <FieldBox
                key={field}
                label={field}
                value={formData[field] ?? ""}
                onChangeText={(v) => handleChange(field, v)}
                placeholder={field}
              />
            );
          })}
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={onSave} activeOpacity={0.9}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F5F5F6" },
  container: { paddingHorizontal: moderateScale(20), paddingBottom: moderateScale(50), paddingTop: moderateScale(18), alignItems: "center", marginTop: moderateScale(30) },
  headerRow: { flexDirection: "row", alignItems: "center", width: "100%", marginBottom: moderateScale(30) },
  screenTitle: { fontSize: moderateScale(18), fontWeight: "700", color: "#111111", marginLeft: moderateScale(12) },
  avatarWrap: { marginBottom: moderateScale(18), alignItems: "center", width: "100%" },
  avatarTouchable: { position: "relative" },
  avatarBorder: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    borderWidth: moderateScale(4),
    borderColor: "#FFFFFF",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: moderateScale(8),
    shadowOffset: { width: 0, height: moderateScale(6) },
    elevation: 3,
  },
  avatarImage: { width: "100%", height: "100%" },
  cameraButton: {
    position: "absolute",
    right: moderateScale(-6),
    bottom: moderateScale(-6),
    width: moderateScale(37),
    height: moderateScale(32),
    borderRadius: moderateScale(21),
    backgroundColor: "#FF6B3A",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: moderateScale(3),
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: moderateScale(6),
    shadowOffset: { width: 0, height: moderateScale(2) },
    elevation: 4,
  },
  form: { width: "100%", marginTop: moderateScale(6) },
  saveButton: { marginTop: moderateScale(22), width: "100%", backgroundColor: "#FF6B3A", paddingVertical: moderateScale(14), borderRadius: moderateScale(12), alignItems: "center", justifyContent: "center", shadowColor: "#000", shadowOpacity: 0.12, shadowRadius: moderateScale(8), shadowOffset: { width: 0, height: moderateScale(6) }, elevation: 4 },
  saveButtonText: { color: "#FFFFFF", fontSize: moderateScale(16), fontWeight: "700" },
  cityItem: { padding: moderateScale(10), backgroundColor: "#fff", borderBottomWidth: 1, borderColor: "#eee" },
  cityList: { maxHeight: moderateScale(120), borderWidth: 1, borderColor: "#ccc", marginTop: -moderateScale(8), marginBottom: moderateScale(10), borderRadius: moderateScale(6), backgroundColor: "#fff" },
});
