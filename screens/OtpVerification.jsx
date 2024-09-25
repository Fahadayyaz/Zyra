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
        <Text style={styles.headerText}>Verification</Text>
        <Text style={styles.subText}>Please Check Your Phone Number</Text>
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
        {/* OTP input component */}
        <View style={{ alignSelf: "center", marginTop: "10%" }}>
          <OtpInput />
        </View>
        {/* Next button here */}
        <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate("CreateNewPassword")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </Pressable>
        {/* resend option here */}
        <Pressable
          style={styles.resendContainer}
          onPress={() => navigation.navigate("")}
        >
          <Text style={styles.subText}>Didn't receive the email OTP?</Text>
          <Text style={styles.resendText}>Resend</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const OtpInput = () => {
  const inputRefs = useRef([]);

  const handleTextChange = (text, index) => {
    if (text) {
      if (index < 3) {
        inputRefs.current[index + 1].focus(); // Move to next box
      }
    } else if (text === "" && index > 0) {
      inputRefs.current[index - 1].focus(); // Move to previous box if empty
    }
  };

  return (
    <View style={styles.otpContainer}>
      {[0, 1, 2, 3].map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)} // Assigning ref for each input
          style={styles.otpBox}
          keyboardType="number-pad"
          maxLength={1} // Only one character allowed per box
          onChangeText={(text) => handleTextChange(text, index)}
        />
      ))}
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  contentContainer: {
    flex: 1,
    width: "90%",
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
    marginTop: "15%",
  },
  circle: {
    width: 115,
    height: 115,
    borderRadius: 100,
    zIndex: 1,
    backgroundColor: "rgba(146, 73, 156, 0.2)",
  },
  frontCircle: {
    width: 115,
    height: 115,
    borderRadius: 100,
    position: "absolute",
    backgroundColor: "#92499C",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignSelf: "center",
    width: "80%",
  },
  otpBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#92499C",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Poppins_Medium",
    color: "#000",
  },
  nextButton: {
    backgroundColor: "#92499C",
    width: "100%",
    height: 48,
    marginTop: "25%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontFamily: "PlusJakartaSans_Bold",
  },
  bottomContainer: {
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  resendContainer: {
    height: 20,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  resendText: {
    fontFamily: "PlusJakartaSans_Bold",
    fontSize: 12,
    color: "#92499C",
    marginLeft: 5,
  },
});
