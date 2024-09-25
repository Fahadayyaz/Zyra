import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Image,
  TextInput,
} from "react-native";
import React, { useRef, useEffect } from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const OtpVerification = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // Increase size
          duration: 1100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Return to original size
          duration: 1100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ExpoStatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerText}>Forgot Password</Text>
        <Text style={styles.subText}>
          Please Enter Email for forgot password
        </Text>

        {/* Back Circle (Animated) */}
        <View style={styles.circleContainer}>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}
          />
          {/* Front Circle (Static) */}
          <View style={[styles.circle, styles.frontCircle]}>
            <Image
              source={require("../assets/appIcon/Lock.png")}
              style={{ width: 27.34, height: 37.55 }}
            />
          </View>
        </View>
        {/* circles end here */}

        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              fontFamily: "Poppins_Medium",
              fontSize: 28,
              color: "#000000",
            }}
          >
            Verification code
          </Text>
          <Text style={styles.subText}>
            We have sent the code in +923456789101
          </Text>
        </View>

        {/* Next button here */}
        <Pressable
          style={{
            backgroundColor: "#92499C",
            width: "100%",
            height: 48,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "20%",
          }}
          onPress={() => navigation.navigate("OtpVerification")}
        >
          <Text style={{ color: "#fff", fontFamily: "PlusJakartaSans_Bold" }}>
            Next
          </Text>
        </Pressable>
        {/* resend option here */}
      </View>
      <Pressable style={{ position: "absolute", alignSelf: "center" }}>
        <Text style={{ backgroundColor: "red" }}>Didn't receive the OTP </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  contentContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  backButton: {
    width: 37,
    height: 35,
    borderRadius: 8,
    backgroundColor: "#E9E9E9",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Poppins_Medium",
    fontSize: 28,
    marginTop: 10,
    color: "#000000",
  },
  subText: {
    fontFamily: "PlusJakartaSans_Regular",
    fontSize: 12,
    color: "#9D9D9D",
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "18%",
    marginTop: "8%",
  },
  circle: {
    width: 115, // Size of both circles
    height: 115,
    borderRadius: 100,
    backgroundColor: "rgba(146, 73, 156, 0.2)", // Back circle color
    position: "absolute",
  },
  frontCircle: {
    width: 115, // Smaller front circle
    height: 115,
    borderRadius: 100,
    backgroundColor: "#92499C", // Front circle color
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
