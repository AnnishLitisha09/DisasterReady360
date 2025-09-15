import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Geolocation from "@react-native-community/geolocation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { moderateScale } from "../../utils/scalingUtils";
import { useNavigation } from "@react-navigation/native";
import { Arrowback } from "../../assets/icons";
import { useDistrictStore } from "../../store/districtStore";
import { useInstituteStore } from "../../store/instituteStore";
import { API_BASE_URL } from "../../config/apiConfig";

export const Signup = () => {
  const navigation = useNavigation();

  const [role, setRole] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Location state (only city)
  const [location, setLocation] = useState("");
  const [locLoading, setLocLoading] = useState(false);

  const { districts, selectedDistrict, fetchDistricts, setDistrict } =
    useDistrictStore();
  const {
    institutes,
    selectedInstitute,
    fetchInstitutes,
    setSelectedInstitute,
  } = useInstituteStore();

  // 🔹 Ask for location permission
  const requestLocationPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "We need access to your location to fetch your city",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  // 🔹 Fetch only city using OpenStreetMap
  const fetchCity = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`,
        {
          headers: {
            "User-Agent": "DisasterReady360/1.0 (support@dr360.com)",
          },
        }
      );
      const data = await response.json();
      if (data && data.address) {
        const cityName =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.hamlet ||
          data.address.state || // fallback
          "";
        setLocation(cityName || "City not found");
        if (cityName) await AsyncStorage.setItem("lastCity", cityName);
      } else {
        setLocation("City not found");
      }
    } catch (error) {
      console.error("OSM fetch error", error);
      setLocation("Unable to fetch city");
    } finally {
      setLocLoading(false);
    }
  };

  // 🔹 Load last city instantly if available
  useEffect(() => {
    AsyncStorage.getItem("lastCity").then((savedCity) => {
      if (savedCity) setLocation(savedCity);
    });
  }, []);

  // 🔹 Location updates only for student role
  useEffect(() => {
    if (role === "community") fetchDistricts();
    if (role === "student" || role === "teacher") fetchInstitutes();

    let watchId;

    const startLocationUpdates = async () => {
      setLocLoading(true);
      const granted = await requestLocationPermission();
      if (!granted) {
        setLocLoading(false);
        Alert.alert("Permission denied", "Location permission is required");
        return;
      }

      // First quick fetch (coarse location)
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCity(latitude, longitude);
        },
        (error) => {
          console.error("Location error", error);
          setLocLoading(false);
          setLocation("Unable to fetch city");
        },
        { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
      );

      // Start watching for refined updates
      watchId = Geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCity(latitude, longitude);
        },
        (error) => {
          console.error("Watch error", error);
        },
        { enableHighAccuracy: true, distanceFilter: 50, interval: 60000 }
      );
    };

    if (role === "student") startLocationUpdates();

    return () => {
      if (watchId != null) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, [role]);

  // 🔹 Handle Signup
  const handleSignup = async () => {
    if (!role || !name || !email) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    let payload = { name, email, role };

    if (role === "student") {
      payload.location = location; // ✅ sending city
      if (!selectedInstitute) {
        Alert.alert("Error", "Please select an institution");
        return;
      }
      payload.institute_id = selectedInstitute;
    }

    if (role === "teacher") {
      if (!selectedInstitute) {
        Alert.alert("Error", "Please select an institution");
        return;
      }
      payload.institute_id = selectedInstitute;
    }

    if (role === "community") {
      if (!selectedDistrict) {
        Alert.alert("Error", "Please select a district");
        return;
      }
      payload.city_id = selectedDistrict;
    }

    console.log("Payload sent to backend:", payload);

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (response.ok) {
        Alert.alert("Success", "Account created successfully!");
        navigation.navigate("Loginpage");
      } else {
        Alert.alert("Error", data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      Alert.alert("Error", "Failed to register user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Arrowback width={moderateScale(24)} height={moderateScale(24)} />
        </TouchableOpacity>

        <Text style={styles.heading}>Create your account</Text>
        <Text style={styles.description}>
          Welcome to Disaster Ready 360, enter your details below to continue.
        </Text>

        {/* Role Picker */}
        <Text style={styles.label}>Select your role</Text>
        <RNPickerSelect
          onValueChange={(value) => setRole(value)}
          items={[
            { label: "Student", value: "student" },
            { label: "Teacher", value: "teacher" },
            { label: "Parent", value: "parent" },
            { label: "Community", value: "community" },
          ]}
          placeholder={{ label: "Select your role", value: null }}
          style={pickerStyle}
        />

        {role && (
          <>
            <Text style={styles.label}>Enter your Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
            />

            <Text style={styles.label}>Enter your Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />

            {(role === "student" || role === "teacher") && (
              <>
                <Text style={styles.label}>Select Institution</Text>
                <RNPickerSelect
                  onValueChange={(value) => setSelectedInstitute(value)}
                  items={institutes}
                  value={selectedInstitute}
                  placeholder={{ label: "Select Institution", value: null }}
                  style={pickerStyle}
                />
              </>
            )}

            {/* Auto Location field for student */}
            {role === "student" && (
              <>
                <Text style={styles.label}>City</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    style={[styles.input, { flex: 1 }]}
                    value={locLoading ? "" : location}
                    editable={false}
                    placeholder="Fetching city..."
                  />
                  {locLoading && (
                    <ActivityIndicator style={{ marginLeft: 10 }} />
                  )}
                </View>
              </>
            )}

            {role === "community" && (
              <>
                <Text style={styles.label}>Select District</Text>
                <RNPickerSelect
                  onValueChange={(value) => setDistrict(value)}
                  items={districts}
                  value={selectedDistrict}
                  placeholder={{ label: "Select District", value: null }}
                  style={pickerStyle}
                />
              </>
            )}
          </>
        )}

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Create your account</Text>
          )}
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate("Loginpage")}
            >
              LOG IN
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: moderateScale(30),
  },
  container: { padding: moderateScale(20), paddingBottom: moderateScale(30) },
  backButton: { marginBottom: moderateScale(20) },
  heading: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: moderateScale(10),
  },
  description: {
    fontSize: moderateScale(14),
    color: "#333",
    textAlign: "center",
    marginBottom: moderateScale(20),
  },
  label: {
    marginTop: moderateScale(15),
    marginBottom: moderateScale(5),
    fontWeight: "600",
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#F0F4F8",
    padding: moderateScale(10),
    borderRadius: moderateScale(12),
    backgroundColor: "#F0F4F8",
  },
  button: {
    marginTop: moderateScale(30),
    backgroundColor: "#d9673f",
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  loginContainer: { marginTop: moderateScale(20), alignItems: "center" },
  loginText: { fontSize: moderateScale(14), color: "#000" },
  loginLink: { color: "#E35B33", fontWeight: "600" },
});

const pickerStyle = {
  inputIOS: {
    padding: moderateScale(12),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: moderateScale(12),
    backgroundColor: "#F0F4F8",
  },
  inputAndroid: {
    padding: moderateScale(12),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(10),
    backgroundColor: "#F0F4F8",
  },
};
