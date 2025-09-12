// components/FieldBox.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Platform,
  type KeyboardTypeOptions,
} from "react-native";
import { moderateScale } from "../utils/scalingUtils"; // adjust path if needed

interface FieldBoxProps {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  dropdown?: boolean; // if true, renders a pressable row (like DOB / City)
  onPress?: () => void; // for dropdown press
}

export const FieldBox: React.FC<FieldBoxProps> = ({
  label,
  value = "",
  onChangeText,
  secureTextEntry = false,
  placeholder,
  keyboardType = "default",
  dropdown = false,
  onPress,
}) => {
  // If dropdown, we show a pressable styled box rather than an editable TextInput
  if (dropdown) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Pressable style={styles.dropdownBox} onPress={onPress}>
          <Text style={[styles.valueText, !value && styles.placeholderText]}>
            {value ? value : placeholder ?? `Select ${label}`}
          </Text>
          <Text style={styles.caret}>▾</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder ?? `Enter ${label}`}
        placeholderTextColor="#A7A7A7"
        keyboardType={keyboardType}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(18),
  },
  label: {
    fontSize: moderateScale(13),
    fontWeight: "600",
    color: "#222222",
    marginBottom: moderateScale(8),
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: moderateScale(1),
    borderColor: "#E6E6E6",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: Platform.OS === "ios" ? moderateScale(14) : moderateScale(10),
    fontSize: moderateScale(15),
    color: "#111111",
    // subtle shadow on iOS
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: moderateScale(6),
    shadowOffset: { width: 0, height: 2 },
    // elevation for android
    elevation: 1,
  },
  dropdownBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderWidth: moderateScale(1),
    borderColor: "#E6E6E6",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(12),
  },
  valueText: {
    fontSize: moderateScale(15),
    color: "#111111",
  },
  placeholderText: {
    color: "#A7A7A7",
  },
  caret: {
    fontSize: moderateScale(18),
    color: "#A7A7A7",
    marginLeft: moderateScale(8),
  },
});
