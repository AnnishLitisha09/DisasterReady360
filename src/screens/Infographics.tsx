import React, { useState, useRef } from "react";
import { 
  StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity 
} from "react-native";
import { Arrowback } from "../assets/icons";
import { moderateScale } from "../utils/scalingUtils";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export const Infographics = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { infographic } = route.params;

  // Use all images; fallback to main image if none
  const images = infographic.infographicsImages.length
    ? infographic.infographicsImages
    : [infographic.image];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleMarkCompleted = () => {
    // You can handle logic for marking completed here
    alert("Marked as Completed!");
  };

  const handleUpNext = () => {
    // Logic to navigate to next infographic or module
    alert("Up Next clicked!");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Arrowback width={24} height={24} fill="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>{infographic.title}</Text>
      </View>

      {/* Image slider */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ref={scrollRef}
        contentContainerStyle={styles.sliderContainer}
      >
        {images.map((img, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: img }} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot
            ]}
          />
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Description */}
        <Text style={styles.description}>{infographic.description}</Text>

        {/* Key Points */}
        <Text style={styles.sectionTitle}>Key Points:</Text>
        {infographic.keyPoints.map((point, index) => (
          <Text key={index} style={styles.point}>
            • {point}
          </Text>
        ))}

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.completedBtn} onPress={handleMarkCompleted}>
            <Text style={styles.buttonText}>Mark as Completed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#E85A2A",
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(20),
    paddingTop: moderateScale(80),
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(40),
  },
  headerTitle: {
    color: "#fff",
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginLeft: moderateScale(10),
  },
  sliderContainer: {
    alignItems: "center",
  },
  imageWrapper: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 0.8,
    height: moderateScale(250),
    borderRadius: 12,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: moderateScale(10),
  },
  dot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#E85A2A",
    width: moderateScale(10),
    height: moderateScale(10),
  },
  content: {
    padding: moderateScale(20),
  },
  description: {
    fontSize: moderateScale(14),
    color: "#000",
    marginBottom: moderateScale(15),
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "#000",
    marginBottom: moderateScale(10),
  },
  point: {
    fontSize: moderateScale(14),
    color: "#000",
    marginBottom: moderateScale(5),
  },
  buttonsContainer: {
    marginTop: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  completedBtn: {
    flex: 1,
    backgroundColor: "#E85A2A",
    padding: moderateScale(12),
    borderRadius: 8,
    alignItems: "center",
    marginRight: moderateScale(10),
  },
  upNextBtn: {
    flex: 1,
    backgroundColor: "#E85A2A",
    padding: moderateScale(12),
    borderRadius: 8,
    alignItems: "center",
    marginLeft: moderateScale(10),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: moderateScale(14),
  },
});
