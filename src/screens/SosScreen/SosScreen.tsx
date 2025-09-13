// screens/SosScreen.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { SosButton } from "../../components";
import { Arrowback } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "../../utils/scalingUtils";

export default function SosScreen() {
  const navigation = useNavigation();

  const [sosPressed, setSosPressed] = useState(false); // toggle state
  const [location, setLocation] = useState<any>(null);
  const [address, setAddress] = useState<string>("Fetching location...");

  // 🔹 fetch detailed address from OSM
  const fetchAddressOSM = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`,
        {
          headers: {
            "User-Agent": "DisasterReady360/1.0 (example@email.com)",
          },
        }
      );
      const data = await response.json();
      if (data && data.address) {
        const addr = data.address;

        const houseNumber = addr.house_number || "";
        const road = addr.road || addr.pedestrian || "";
        const suburb = addr.suburb || "";
        const city =
          addr.city || addr.town || addr.village || addr.hamlet || "";
        const state = addr.state || "";
        const country = addr.country || "";

        let fullAddress = "";
        if (houseNumber || road) fullAddress += `${houseNumber} ${road}, `;
        if (suburb) fullAddress += `${suburb}, `;
        if (city) fullAddress += `${city}, `;
        if (state) fullAddress += `${state}, `;
        if (country) fullAddress += `${country}`;

        setAddress(fullAddress.trim());

        // ✅ Log address to console
        console.log("Fetched address:", fullAddress.trim());
      } else {
        setAddress("Address not found");
        console.log("Address not found");
      }
    } catch (error) {
      console.error("OSM Address fetch error:", error);
      setAddress("Unable to fetch address");
    }
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "We need access to your location to send help",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  useEffect(() => {
    let watchId: any;

    (async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        setAddress("Permission denied");
        return;
      }

      // 🔹 Initial position
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(position.coords);
          fetchAddressOSM(latitude, longitude);

          // ✅ Log coordinates
          console.log("Initial position:", latitude, longitude);
        },
        (error) => {
          console.error("Initial GPS error:", error);
          setAddress("Unable to get GPS location");
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );

      // 🔹 Watch position for updates
      watchId = Geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(position.coords);
          fetchAddressOSM(latitude, longitude);

          // ✅ Log updated coordinates
          console.log("Updated position:", latitude, longitude);
        },
        (error) => console.error("GPS watch error:", error),
        {
          enableHighAccuracy: true,
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
        }
      );
    })();

    return () => {
      if (watchId != null) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

  // 🔹 toggle SOS button color
  const handleSOSPress = () => {
    setSosPressed((prev) => !prev);
    if (location) fetchAddressOSM(location.latitude, location.longitude);
  };

  return (
    <View style={styles.container}>
      {/* Back arrow */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Arrowback width={24} height={24} />
      </TouchableOpacity>

      <Text style={styles.locationLabel}>Your current location</Text>
      <Text style={styles.locationName}>
        {location
          ? `${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`
          : "Locating..."}
      </Text>

      <Text style={styles.title}>
        {sosPressed ? "Help is on the way!" : "Are you in an emergency?"}
      </Text>
      <Text style={styles.subtitle}>
        {sosPressed
          ? "Help is on its way, please hang on and be patient!"
          : "Press the button below and help will arrive shortly"}
      </Text>

      <View
        style={[
          styles.outerCircle,
          { backgroundColor: sosPressed ? "#D9D9D9" : "#FFDAD6" },
        ]}
      >
        <SosButton
          onPress={handleSOSPress}
          size={200}
          color={sosPressed ? "#333333" : "#ef5908ff"}
          iconColor={sosPressed ? "#ef5908ff" : "#fff"}
          textColor="#fff"
        />
      </View>

      <View style={styles.addressBox}>
        <Text style={styles.addressTitle}>Your Current Address</Text>
        <Text style={styles.addressText}>{address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: moderateScale(70),
    paddingHorizontal: moderateScale(20),
  },
  backButton: {
    position: "absolute",
    top: moderateScale(70),
    left: moderateScale(30),
    zIndex: 10,
  },
  locationLabel: {
    fontSize: moderateScale(15),
    color: "#999",
    textAlign: "center",
  },
  locationName: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    marginBottom: moderateScale(30),
    textAlign: "center",
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: "700",
    textAlign: "center",
    marginBottom: moderateScale(10),
    color: "#000",
  },
  subtitle: {
    fontSize: moderateScale(14),
    textAlign: "center",
    marginBottom: moderateScale(40),
    color: "#333",
  },
  outerCircle: {
    width: moderateScale(298),
    height: moderateScale(298),
    borderRadius: moderateScale(149),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: moderateScale(40),
  },
  addressBox: {
    marginTop: moderateScale(10),
    width: "100%",
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    backgroundColor: "#F6F6F6",
    borderRadius: moderateScale(12),
    alignItems: "center",
  },
  addressTitle: {
    fontSize: moderateScale(12),
    color: "#888",
    marginBottom: moderateScale(4),
  },
  addressText: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
});

