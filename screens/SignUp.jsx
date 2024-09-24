import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const SignUP = ({ navigation }) => {
  const [isRemembered, setIsRemembered] = useState(false);
  const toggleRemember = () => {
    setIsRemembered(!isRemembered);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.contentContainer}>
          <Pressable
            style={{
              width: 37,
              height: 35,
              borderRadius: 8,
              backgroundColor: "#E9E9E9",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </Pressable>
          <Text
            style={{
              fontFamily: "Poppins_Medium",
              fontSize: 28,
              marginTop: 10,
              color: "#00000",
            }}
          >
            Create Account
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSans_Regular",
              fontSize: 12,
              color: "#9D9D9D",
            }}
          >
            Please Setup Your Account
          </Text>
          {/* Name, Email, Phone & Password section */}
          <View
            style={{
              backgroundColor: "pink",
              marginTop: "10%",
            }}
          >
            {/* Name goes here */}
            <Text
              style={{
                fontFamily: "PlusJakartaSans_Medium",
                fontSize: 12,
                color: "#26252B",
              }}
            >
              Name
            </Text>
            <View style={styles.nameInputContainer}>
              <View style={styles.iconCircle}>
                <Image
                  source={require("./../assets/appIcon/ProfileOrNameIcon.png")}
                  style={{ width: 12, height: 12 }}
                />
              </View>
              <TextInput
                placeholder="Enter your name"
                placeholderTextColor="#7C7C7C"
                style={{
                  width: "100%",
                  height: 48,
                  backgroundColor: "#E9E9E9",
                  borderRadius: 8,
                  paddingLeft: 40,
                }}
              />
            </View>
            {/* Email Section goes here */}
            <Text
              style={{
                fontFamily: "PlusJakartaSans_Medium",
                fontSize: 12,
                color: "#26252B",
                marginTop: 15,
              }}
            >
              Email
            </Text>
            <View style={styles.emailInputContainer}>
              <View style={styles.iconCircle}>
                <Image
                  source={require("./../assets/appIcon/mailIcon.png")}
                  style={{ width: 12, height: 12 }}
                />
              </View>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#7C7C7C"
                style={{
                  width: "100%",
                  height: 48,
                  backgroundColor: "#E9E9E9",
                  borderRadius: 8,
                  paddingLeft: 40,
                }}
              />
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
              Password
            </Text>
            <View style={styles.passwordInputContainer}>
              <View style={styles.iconCircle}>
                <Image
                  source={require("./../assets/appIcon/LockIcon.png")}
                  style={{ width: 11, height: 14 }}
                />
              </View>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#7C7C7C"
                secureTextEntry={true}
                style={{
                  width: "100%",
                  height: 48,
                  backgroundColor: "#E9E9E9",
                  borderRadius: 8,
                  paddingLeft: 40,
                }}
              />
            </View>
          </View>
          {/* Sign In Button */}
          <Pressable
            style={{
              backgroundColor: "#92499C",
              width: "100%",
              height: 48,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "15%",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "#fff", fontFamily: "PlusJakartaSans_Bold" }}>
              Sign UP
            </Text>
          </Pressable>
          {/* don't have an account section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontFamily: "PlusJakartaSans_Regular",
                fontSize: 12,
                color: "#7C7C7C",
              }}
            >
              Already have an account?
            </Text>
            <Pressable>
              <Text
                style={{
                  fontFamily: "PlusJakartaSans_Bold",
                  fontSize: 12,
                  color: "#92499C",
                }}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign In
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "15%",
              marginBottom: "10%",
            }}
          >
            <View style={styles.line} />
            <Text style={styles.text}>Or</Text>
            <View style={styles.line} />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 48,
              backgroundColor: "#E9E9E9",
              borderRadius: 8,
              alignItems: "center",
              marginTop: 15,
              paddingLeft: "25%",
            }}
          >
            <View style={styles.socialCircles}>
              <Image source={require("./../assets/appIcon/facebookIcon.png")} />
            </View>
            <Text
              style={{
                fontFamily: "PlusJakartaSans_Regular",
                marginLeft: 10,
                color: "#7C7C7C",
                fontSize: 12,
              }}
            >
              Continue with facebook
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 48,
              backgroundColor: "#E9E9E9",
              borderRadius: 8,
              alignItems: "center",
              marginTop: 15,
              paddingLeft: "25%",
            }}
          >
            <View style={styles.socialCircles}>
              <Image source={require("./../assets/appIcon/GoogleIcon.png")} />
            </View>
            <Text
              style={{
                fontFamily: "PlusJakartaSans_Regular",
                marginLeft: 10,
                color: "#7C7C7C",
                fontSize: 12,
              }}
            >
              Continue with Google
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 48,
              backgroundColor: "#E9E9E9",
              borderRadius: 8,
              alignItems: "center",
              marginTop: 15,
              paddingLeft: "25%",
            }}
          >
            <View style={styles.socialCircles}>
              <Image source={require("./../assets/appIcon/AppleIcon.png")} />
            </View>
            <Text
              style={{
                fontFamily: "PlusJakartaSans_Regular",
                marginLeft: 10,
                color: "#7C7C7C",
                fontSize: 12,
              }}
            >
              Continue with Apple
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  contentContainer: {
    width: "90%",
    height: "100%",
    paddingTop: "10%",
    alignSelf: "center",
  },
  nameInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    alignItems: "center",
    marginTop: 5,
  },
  emailInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    alignItems: "center",
    marginTop: 5,
  },
  passwordInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    alignItems: "center",
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

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#C7C7C7", // You can change the color as needed
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#C7C7C7", // You can change the text color as needed
  },
  socialCircles: {
    width: 27,
    height: 27,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
  },
  circle: {
    width: 18,
    height: 18,
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderColor: "#92499C",
    borderRadius: 5,
  },
  circleClicked: {
    backgroundColor: "#E9E9E9",
  },
  tick: {
    fontSize: 14,
    color: "#92499C",
  },
});

export default SignUP;
