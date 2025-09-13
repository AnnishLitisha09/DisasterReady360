// components/EventCard.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Deleteicon } from "../../assets/icons";
import { Editicon } from "../../assets/icons";
import HomeSafeIcon from "../../assets/icons/homesafeicon";
import { Clockicon } from "../../assets/icons/Clockicon";
import { moderateScale } from "../../utils/scalingUtils";  // 🔹 added

type ButtonOption = "editDelete" | "result" | "joinnow" | "none";

interface EventCardProps {
  title: string;
  totalJoined: number;
  venue: string;
  type: string;
  date: string;
  time: string;
  buttonOption: ButtonOption;
  onEdit?: () => void;
  onDelete?: () => void;
  onResult?: () => void;
  onJoin?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  totalJoined,
  venue,
  type,
  time,
  date,
  buttonOption,
  onEdit,
  onDelete,
  onResult,
  onJoin,
}) => {
  const renderButton = () => {
    switch (buttonOption) {
      case "editDelete":
        return (
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.iconBtn} onPress={onEdit}>
              <Editicon width={moderateScale(18)} height={moderateScale(18)} color="white" />
            </TouchableOpacity>

            <View style={styles.iconDivider} />

            <TouchableOpacity style={styles.iconBtn} onPress={onDelete}>
              <Deleteicon width={moderateScale(18)} height={moderateScale(18)} color="white" />
            </TouchableOpacity>
          </View>
        );
      case "result":
        return (
          <TouchableOpacity style={styles.textBtn} onPress={onResult}>
            <Text style={styles.btnText}>Result</Text>
          </TouchableOpacity>
        );
      case "joinnow":
        return (
          <TouchableOpacity style={styles.textBtn} onPress={onJoin}>
            <Text style={styles.btnText}>Join Now</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.leftHeader}>
          <View style={styles.iconBox}>
            <HomeSafeIcon width={moderateScale(18)} height={moderateScale(18)} fill="white" />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightHeader}>
          <Clockicon width={moderateScale(14)} height={moderateScale(14)} fill="#555" />
          <Text style={styles.timeText}>{date} / {time}</Text>
        </View>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>
          Total number of joined : {totalJoined.toString().padStart(2, "0")}
        </Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Venue : {venue}</Text>
      </View>

      <View style={styles.detailRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.detailLabel}>Type :</Text>
          <Text style={styles.detailValue}>{type}</Text>
        </View>
        {renderButton()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: moderateScale(12),
    padding: moderateScale(14),
    marginVertical: moderateScale(8),
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(12),
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
  width: moderateScale(35),       // ↑ increased from 30 → 40
  height: moderateScale(35),      // ↑ increased from 30 → 40
  borderRadius: moderateScale(10), // ↑ increased for smoother corners
  backgroundColor: "#E64A19",
  alignItems: "center",
  justifyContent: "center",
  marginRight: moderateScale(12),  // ↑ little more spacing
},

  title: { fontSize: moderateScale(16), fontWeight: "bold", color: "#333" },
  rightHeader: { flexDirection: "row", alignItems: "center" },
  timeText: { marginLeft: moderateScale(6), fontSize: moderateScale(12), color: "#555" },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(8),
    fontWeight: "400",
  },
  detailLabel: {
    fontSize: moderateScale(14),
    color: "#434242ff",
    marginRight: moderateScale(2),
  },
  detailValue: {
    fontSize: moderateScale(14),
    color: "#333",
    fontWeight: "400",
    marginRight: moderateScale(2),
  },

  buttonRow: {
    flexDirection: "row",
    backgroundColor: "#E64A19",
    borderRadius: moderateScale(20),
    overflow: "hidden",
  },
  iconBtn: {
    padding: moderateScale(8),
  },
  textBtn: {
    backgroundColor: "#E64A19",
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(20),
  },
  btnText: { color: "white", fontWeight: "500", fontSize: moderateScale(14) },
  iconDivider: {
    width: moderateScale(2),
    backgroundColor: "white",
    opacity: 0.6,
  },
});

export default EventCard;

