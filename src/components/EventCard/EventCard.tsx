// components/EventCard.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DeleteIcon from "../../assets/icons/deleteicon";
import { Editicon } from "../../assets/icons";
import HomeSafeIcon from "../../assets/icons/homesafeicon";
import { Clockicon } from "../../assets/icons/Clockicon";

type ButtonOption = "editDelete" | "result" | "joinnow" | "none";

interface EventCardProps {
  title: string;
  totalJoined: number;
  venue: string;
  type: string;
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
        <Editicon width={18} height={18} color="white" />
      </TouchableOpacity>

      {/* Divider line */}
      <View style={styles.iconDivider} />

      <TouchableOpacity style={styles.iconBtn} onPress={onDelete}>
        <DeleteIcon width={18} height={18} color="white" />
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
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.leftHeader}>
          <View style={styles.iconBox}>
            <HomeSafeIcon width={18} height={18} fill="white" />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightHeader}>
          { <Clockicon width={14} height={14} fill="#555" /> }
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>

      {/* Details */}
    <View style={styles.detailRow}>
  <Text style={styles.detailLabel}>
    Total number of joined     :  {totalJoined.toString().padStart(2, "0")}
  </Text>
</View>

<View style={styles.detailRow}>
  <Text style={styles.detailLabel}>Venue    :   {venue}</Text>
</View>

      {/* Type row + floating button on right */}
      <View style={styles.detailRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.detailLabel}>Type       :  </Text>
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
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
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
    marginBottom: 12,
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#E64A19",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#333" },
  rightHeader: { flexDirection: "row", alignItems: "center" },
  timeText: { marginLeft: 6, fontSize: 12, color: "#555" },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    fontWeight: "400",
  },
  detailLabel: {
    fontSize: 14,
    color: "#434242ff",
    marginRight: 2,
  },
  detailValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "400",
    marginRight: 2,
  },

  buttonRow: {
    flexDirection: "row",
    backgroundColor: "#E64A19",
    borderRadius: 20,
    overflow: "hidden",
  },
  iconBtn: {
    padding: 8,
  },
  textBtn: {
    backgroundColor: "#E64A19",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  btnText: { color: "white", fontWeight: "500" },
  iconDivider: {
  width: 2,
  backgroundColor: "white", 
  opacity: 0.6,             
},

});

export default EventCard;
