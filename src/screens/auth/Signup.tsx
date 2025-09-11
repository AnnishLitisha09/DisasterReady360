import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { moderateScale } from "../../utils/scalingUtils";
import { useNavigation } from "@react-navigation/native";
import { Arrowback } from "../../assets/icons";
import { useDistrictStore } from "../../store/districtStore";
import { useInstituteStore } from "../../store/instituteStore";

export const Signup = () => {
  const navigation = useNavigation();

  const [role, setRole] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { districts, fetchDistricts, setDistrict } = useDistrictStore();
  const {
    institutes,
    fetchInstitutes,
    selectedInstitute,
    setSelectedInstitute,
  } = useInstituteStore();

  // Fetch districts when role is community
  useEffect(() => {
    if (role === "community") {
      fetchDistricts();
    }
  }, [role]);

  // Fetch institutes when role is student or teacher
  useEffect(() => {
    if (role === "student" || role === "teacher") {
      fetchInstitutes();
    }
  }, [role]);

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
                  onValueChange={(value) => {
                    setSelectedInstitute(value);
                    console.log("Selected Institute ID:", value);
                  }}
                  items={institutes}
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
                  onValueChange={(value) => {
                    setDistrict(value);
                    console.log("Selected District:", value);
                  }}
                  items={districts}
                  placeholder={{ label: "Select District", value: null }}
                  style={pickerStyle}
                />
              </>
            )}
          </>
        )}

        <TouchableOpacity style={styles.button}>
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
