import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { SosIcon } from "../../assets/icons/sosicon";

type Props = {
  onPress?: () => void;
  size?: number;
  color?: string;
  iconColor?: string;
  textColor?: string;
};

export const SosButton: React.FC<Props> = ({
  onPress,
  size = 150,
  color = "#F44336",
  iconColor = "#fff",
  textColor = "#fff",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: size, height: size, borderRadius: size / 2, backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <SosIcon width={size * 0.35} height={size * 0.35} fill={iconColor} />
        <Text style={[styles.text, { color: textColor, fontSize: size * 0.18 }]}>SOS</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { alignItems: "center", justifyContent: "center" },
  content: { alignItems: "center", justifyContent: "center" },
  text: { fontWeight: "600", marginTop: 8 },
});
