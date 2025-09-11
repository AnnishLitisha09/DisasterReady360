import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { Arrowback } from "../../assets/icons"
import { moderateScale } from "../../utils/scalingUtils"
import { BackgroundBlob } from "../../components"

export const Result = ({ navigation, route }) => {
  const { score = 17, total = 20, name = "Litisha" } = route?.params || {}

  return (
    <View style={styles.container}>
      {/* Top Background */}
      <BackgroundBlob />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrowback
              color="white"
              width={moderateScale(22)}
              height={moderateScale(22)}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>quiz</Text>
        </View>
      </View>

      {/* Score Circle (Double Layer) */}
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle}>
          <Text style={styles.circleText}>Your Score</Text>
          <Text style={styles.score}>
            {score}/{total}
          </Text>
        </View>
      </View>

      {/* Congratulation Message */}
      <Text style={styles.title}>Congratulation</Text>
      <Text style={styles.subtitle}>Great job, {name}! You Did It</Text>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back To Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#E4572E",
    height: moderateScale(120), // smaller height than before
    borderBottomLeftRadius: moderateScale(40), // reduced radius
    borderBottomRightRadius: moderateScale(40),
    justifyContent: "flex-end",
    paddingBottom: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginLeft: moderateScale(10),
  },
  outerCircle: {
    width: moderateScale(180),
    height: moderateScale(180),
    borderRadius: moderateScale(90),
    backgroundColor: "#E4572E", // darker shade#E4572E
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(140),
    marginBottom: moderateScale(40),
  },
  innerCircle: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(75),
    backgroundColor: "#C63F1E", // lighter orange
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    color: "white",
    fontSize: moderateScale(16),
    marginBottom: moderateScale(5),
  },
  score: {
    color: "white",
    fontSize: moderateScale(26),
    fontWeight: "bold",
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    color: "#E4572E",
    marginBottom: moderateScale(5),
  },
  subtitle: {
    fontSize: moderateScale(15),
    color: "#E4572E",
    marginBottom: moderateScale(40),
  },
  button: {
    backgroundColor: "#E4572E",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(40),
    borderRadius: moderateScale(20),
  },
  buttonText: {
    color: "white",
    fontSize: moderateScale(15),
    fontWeight: "bold",
  },
})