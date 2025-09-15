import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function ArExperienceScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <WebView
  source={{ uri: "https://mywebar.com/p/Project_3_e6gr9l6but" }}
  style={{ flex: 1 }}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  allowsInlineMediaPlayback={true}
  mediaPlaybackRequiresUserAction={false}
  originWhitelist={["*"]}
  startInLoadingState={true}
  geolocationEnabled={true}   // ✅ allow geolocation
  allowFileAccess={true}      // ✅ allow file access
  allowUniversalAccessFromFileURLs={true}
  allowFileAccessFromFileURLs={true}
  mediaCapturePermissionGrantType="grant" // ✅ allow camera/mic
/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
