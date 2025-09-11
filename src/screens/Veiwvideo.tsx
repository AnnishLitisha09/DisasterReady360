import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { moderateScale } from "../utils/scalingUtils";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Arrowback } from "../assets/icons";

export const Veiwvideo = () => {
  const [playing, setPlaying] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const { videos, currentIndex } = route.params;
  const currentVideo = videos[currentIndex];
  const nextVideo = videos[currentIndex + 1];

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      alert("Video has finished playing!");
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrowback width={moderateScale(24)} height={moderateScale(24)} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{currentVideo.title}</Text>
        </View>
      </View>

      {/* YouTube Video */}
      <View style={styles.videoWrapper}>
        <YoutubePlayer
          height={moderateScale(230)}
          play={playing}
          videoId={currentVideo.videoId}
          onChangeState={onStateChange}
        />
      </View>

      {/* Description */}
      <View style={styles.card}>
        <Text style={styles.title}>{currentVideo.title}</Text>
        <Text style={styles.time}>{currentVideo.duration}</Text>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{currentVideo.description}</Text>
        <Text style={styles.sectionTitle}>Key Points</Text>
        <Text style={styles.description}>{currentVideo.keyPoints}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mark as Complete</Text>
      </TouchableOpacity>

      {/* Up Next Section */}
      {nextVideo && (
        <View style={styles.upNext}>
          <Text style={styles.upNextTitle}>Up next</Text>
          <View style={styles.upNextCard}>
            <Text style={styles.upNextText}>{nextVideo.title}</Text>
            <TouchableOpacity
              style={styles.viewBtn}
              onPress={() =>
                navigation.replace("Veiwvideo", {
                  videos,
                  currentIndex: currentIndex + 1,
                })
              }>
              <Text style={styles.viewBtnText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#E74C3C",
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(20),
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
    paddingTop: moderateScale(60),
  },
  headerRow: { flexDirection: "row", alignItems: "center" },
  headerText: {
    color: "#fff",
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginLeft: moderateScale(10),
  },
  videoWrapper: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(15),
    borderRadius: moderateScale(10),
    overflow: "hidden",
  },
  card: {
    backgroundColor: "#fff",
    margin: moderateScale(15),
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    elevation: 2,
  },
  title: { fontSize: moderateScale(18), fontWeight: "bold" },
  time: { fontSize: moderateScale(14), color: "#666", marginVertical: moderateScale(5) },
  sectionTitle: { fontWeight: "bold", marginTop: moderateScale(10), marginBottom: moderateScale(5) },
  description: { fontSize: moderateScale(14), color: "#333" },
  button: {
    backgroundColor: "#E74C3C",
    margin: moderateScale(20),
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: moderateScale(14) },
  upNext: { margin: moderateScale(15) },
  upNextTitle: { fontSize: moderateScale(16), fontWeight: "bold", marginBottom: moderateScale(10) },
  upNextCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
  },
  upNextText: { fontSize: moderateScale(14), fontWeight: "500" },
  viewBtn: {
    backgroundColor: "#E74C3C",
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(8),
  },
  viewBtnText: { color: "#fff", fontWeight: "bold", fontSize: moderateScale(14) },
});
