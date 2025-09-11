import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CopyIocn, Shareicon, Arrowback } from "../assets/icons"; // ✅ make sure these are valid SVG/icon components
import { moderateScale } from "../utils/scalingUtils";
import { useNavigation } from "@react-navigation/native";

export const Infographics = () => {
  const navigation = useNavigation();

  // Multiple images
  const images = [
    "https://picsum.photos/400/600?random=1",
    "https://picsum.photos/400/600?random=2",
    "https://picsum.photos/400/600?random=3",
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arrowback width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Infographics</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconBtn}>
            <CopyIocn width={22} height={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Shareicon width={22} height={22} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(12),
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    color: "#000",
  },
  actions: {
    flexDirection: "row",
  },
  iconBtn: {
    marginLeft: moderateScale(12),
  },
  scrollContent: {
    padding: moderateScale(16),
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: moderateScale(300),
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(16),
  },
});
