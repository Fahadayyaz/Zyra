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

const CreateNewPassword = ({ navigation }) => {
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
    <View style={styles.mainContainer}>
      <ExpoStatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerText}>Create New Password</Text>
        <Text style={styles.subText}>Enter your new password</Text>

        {/* Back Circle (Animated) */}
        <View style={styles.circleContainer}>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}
          />
          {/* Front Circle (Static) */}
          <View style={[styles.circle, styles.frontCircle]}>
            <Image
              source={require("../assets/appIcon/createPasswordIcon.png")}
              style={styles.lock}
            />
          </View>
        </View>
        {/* Password section goes here */}
        <Text
          style={{
            fontFamily: "PlusJakartaSans_Medium",
            fontSize: 12,
            color: "#26252B",
            marginTop: 15,
          }}
        >
          Create New Password
        </Text>
        <View style={styles.passwordInputContainer}>
          <View style={styles.iconCircle}>
            <Image source={require("./../assets/appIcon/LockIcon.png")} />
          </View>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#7C7C7C"
            secureTextEntry={true}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              height: 48,
              backgroundColor: "#E9E9E9",
              borderRadius: 8,
              paddingLeft: 40,
            }}
          />
        </View>
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
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#fff", fontFamily: "PlusJakartaSans_Bold" }}>
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  contentContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    paddingTop: "10%",
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
    height: "25%",
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
  passwordInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    alignItems: "center",
    alignContent: "center",
    marginTop: 5,
  },
  iconCircle: {
    width: 27,
    height: 27,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
    position: "absolute",
    zIndex: 1,
    marginLeft: 5,
  },
});
