// screens/Veiwvideo.tsx
import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { moderateScale } from "../utils/scalingUtils";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Arrowback } from "../assets/icons";
import { getAuthData } from "../store/authStorage";
import { useLearningStore } from "../store/LearningStore";
import { API_BASE_URL } from "../config/apiConfig";
import Toast from "react-native-toast-message";

export const Veiwvideo = () => {
  const [playing, setPlaying] = useState(true); // auto-play
  const [studentId, setStudentId] = useState<number | null>(null);
  const [loadingButton, setLoadingButton] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false); // ✅

  const navigation = useNavigation();
  const route = useRoute();
  const { videos, currentIndex } = route.params;

  const currentVideo = videos[currentIndex];
  const nextVideo = videos[currentIndex + 1];

  const markVideoViewed = useLearningStore((state) => state.markVideoViewed);

  useEffect(() => {
    const fetchStudentId = async () => {
      const authData = await getAuthData();
      if (authData && authData.role_id) {
        setStudentId(authData.role_id);
      }
    };
    fetchStudentId();
  }, []);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      setVideoCompleted(true); // ✅ video finished
      Toast.show({
        type: "info",
        text1: "Video has finished playing!",
      });
    } else if (state === "paused") {
      setPlaying(true); // prevent pause
    }
  }, []);

  const handleMarkAsComplete = async () => {
    if (!studentId) {
      Toast.show({ type: "error", text1: "Student ID not found" });
      return;
    }

    setLoadingButton(true);

    try {
      const response = await fetch(`${API_BASE_URL}/update-video-progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_id: studentId,
          video_id: currentVideo.id,
        }),
      });

      if (!response.ok) throw new Error("Failed to update progress");

      markVideoViewed(currentVideo.id);

      Toast.show({ type: "success", text1: "Video marked as complete!" });
    } catch (error) {
      console.error("Error updating video progress:", error);
      Toast.show({ type: "error", text1: "Failed to mark video as complete" });
    } finally {
      setLoadingButton(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          {/* Back button is always enabled */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrowback
              width={moderateScale(24)}
              height={moderateScale(24)}
              color="white"
            />
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
          forceAndroidAutoplay
          initialPlayerParams={{
            controls: 0, // hide controls
            disablekb: true, // disable seeking
            modestbranding: true,
          }}
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

      {/* Mark as Complete Button */}
      <TouchableOpacity
        style={[
          styles.button,
          (!videoCompleted || loadingButton) && { opacity: 0.7 },
        ]}
        onPress={handleMarkAsComplete}
        disabled={!videoCompleted || loadingButton} // ✅ disabled until video ends
      >
        {loadingButton ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Mark as Complete</Text>
        )}
      </TouchableOpacity>

      {/* Up Next Section */}
      {nextVideo && (
        <View style={styles.upNext}>
          <Text style={styles.upNextTitle}>Up next</Text>
          <View style={styles.upNextCard}>
            <Text style={styles.upNextText}>{nextVideo.title}</Text>
            <TouchableOpacity
              style={[
                styles.viewBtn,
                !videoCompleted && { opacity: 0.5 },
              ]}
              onPress={() =>
                videoCompleted &&
                navigation.replace("Veiwvideo", {
                  videos,
                  currentIndex: currentIndex + 1,
                })
              }
              disabled={!videoCompleted} // ✅ disable until video ends
            >
              <Text style={styles.viewBtnText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Toast />
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
