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
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
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

  const { districts, selectedDistrict, fetchDistricts, setDistrict } =
    useDistrictStore();
  const { institutes, selectedInstitute, fetchInstitutes, setSelectedInstitute } =
    useInstituteStore();

  useEffect(() => {
    if (role === "community") fetchDistricts();
    if (role === "student" || role === "teacher") fetchInstitutes();
  }, [role]);

  const handleSignup = async () => {
    if (!role || !name || !email) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    let payload = { name, email, role };

    if (role === "student" || role === "teacher") {
      if (!selectedInstitute) {
        Alert.alert("Error", "Please select an institution");
        return;
      }
      payload.institute_id = selectedInstitute;
      console.log("Selected Institute ID:", selectedInstitute);
    }

    if (role === "community") {
      if (!selectedDistrict) {
        Alert.alert("Error", "Please select a district");
        return;
      }
      payload.city_id = selectedDistrict;
      console.log("Selected District ID:", selectedDistrict);
    }

    console.log("Payload sent to backend:", payload);

    try {
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

        <Text style={styles.label}>Select your role</Text>
        <RNPickerSelect
          onValueChange={(value) => setRole(value)}
          items={[
            { label: "Student", value: "student", key: "student" },
            { label: "Teacher", value: "teacher", key: "teacher" },
            { label: "Parent", value: "parent", key: "parent" },
            { label: "Community", value: "community", key: "community" },
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
                  items={institutes.map((i) => ({
                    label: i.name,
                    value: i.id,
                    key: i.id.toString(),
                  }))}
                  value={selectedInstitute}
                  placeholder={{ label: "Select Institution", value: null }}
                  style={pickerStyle}
                />
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

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Create your account</Text>
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
