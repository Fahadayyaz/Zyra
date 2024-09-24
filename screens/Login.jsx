import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  const [isRemembered, setIsRemembered] = useState(false);
  const toggleRemember = () => {
    setIsRemembered(!isRemembered);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
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
          Login Account
        </Text>
        <Text
          style={{
            fontFamily: "PlusJakartaSans_Regular",
            fontSize: 12,
            color: "#9D9D9D",
          }}
        >
          Fill the information and for create a account?
        </Text>
        {/* Email & Password section */}
        <View
          style={{
            // backgroundColor: "pink",
            height: "23%",
            marginTop: "10%",
          }}
        >
          <Text
            style={{
              fontFamily: "PlusJakartaSans_Medium",
              fontSize: 12,
              color: "#26252B",
            }}
          >
            Email
          </Text>
          <View style={styles.emailInputContainer}>
            <View style={styles.iconCircle}>
              <Image source={require("./../assets/appIcon/ReceiverIcon.png")} />
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
              <Image source={require("./../assets/appIcon/LockIcon.png")} />
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
          {/* save password section goes here */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                width: "100%",
              }}
            >
              <Pressable
                onPress={toggleRemember}
                style={({ pressed }) => [
                  styles.circle,
                  isRemembered && styles.circleClicked,
                  pressed && { backgroundColor: "lightgray" },
                ]}
              >
                {isRemembered && <Text style={styles.tick}>✓</Text>}
              </Pressable>
              <Text
                style={{
                  color: "#91929F",
                  paddingLeft: "3%",
                }}
              >
                Save Password
              </Text>
              <Pressable
                style={{ marginLeft: "30%", alignItems: "flex-end" }}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={{
                    color: "#92499C",
                    fontFamily: "PlusJakartaSans_Regular",
                    fontSize: 12,
                  }}
                >
                  Forgot Password?
                </Text>
              </Pressable>
            </View>
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
            Sign In
          </Text>
        </Pressable>
        {/* don't have an account section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "PlusJakartaSans_Regular",
              fontSize: 12,
              color: "#7C7C7C",
            }}
          >
            Don't have an account?
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
              Sign up
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderColor: "#92499C",
    alignItems: "center",
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

export default Login;
