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
        <Text style={styles.headerText}>Your Submisions</Text>
        <Text style={styles.subText}>Your Old Submission Request</Text>
        <View style={styles.card}>
          <View style={styles.timeDate}>
            <Text
              style={{
                fontFamily: "PlusJakartaSans_Regular",
                fontSize: 9,
                color: "#fff",
              }}
            >
              10:42PM ,23 March 2024
            </Text>
          </View>
          {/* name goes here */}
          <View style={styles.headingTextContainer}>
            <Text style={styles.bullet}>●</Text>
            <Text style={styles.boldText}>Name:</Text>
          </View>
          <Text style={styles.planeText}>Fahad Ayyaz</Text>
          {/* email goes here */}
          <View style={styles.headingTextContainer}>
            <Text style={styles.bullet}>●</Text>
            <Text style={styles.boldText}>Email:</Text>
          </View>
          <Text style={styles.planeText}>fahadayyaz31@gmail.com</Text>
          {/* truck number goes here */}
          <View style={styles.headingTextContainer}>
            <Text style={styles.bullet}>●</Text>
            <Text style={styles.boldText}>Truck#:</Text>
          </View>
          <Text style={styles.planeText}>ca23AFEF46</Text>
          {/* description goes here */}
          <View style={styles.headingTextContainer}>
            <Text style={styles.bullet}>●</Text>
            <Text style={styles.boldText}>Part Description:</Text>
          </View>
          <Text style={styles.planeText}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum may be used.
          </Text>
          {/* notes section goes here */}
          <View style={styles.headingTextContainer}>
            <Text style={styles.bullet}>●</Text>
            <Text style={styles.boldText}>Notes:</Text>
          </View>
          <Text style={styles.planeText}>
            Lorem ipsum is a placeholder text commonly used to demonstrate.
          </Text>
        </View>
      </View>
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
    fontSize: 13.94,
    color: "#462F4D",
  },
  timeDate: {
    backgroundColor: "#92499C",
    width: "40%",
    height: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "55%",
    borderRadius: 44,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 22,
    height: "41%",
  },
  boldText: {
    fontFamily: "PlusJakartaSans_Bold",
    fontSize: 10,
    marginLeft: 4,
  },
  planeText: {
    fontFamily: "PlusJakartaSans_Regular",
    fontSize: 9,
    marginLeft: 24,
  },
  bullet: {
    color: "#BDBDBD",
    fontSize: 20,
    bottom: 1,
    marginLeft: 8,
  },
  headingTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
