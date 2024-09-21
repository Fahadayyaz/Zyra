import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          width: "90%",
          height: "100%",
          marginTop: "10%",
          alignSelf: "center",
        }}
      >
        <Pressable
          style={{
            width: 37,
            height: 35,
            borderRadius: 6,
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
            marginTop: 3,
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
            backgroundColor: "pink",
            height: "40%",
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
                borderRadius: 5,
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
              style={{
                width: "100%",
                height: 48,
                backgroundColor: "#E9E9E9",
                borderRadius: 5,
                paddingLeft: 40,
              }}
            />
          </View>
          {/* save password section goes here */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#7C7C7C",

                fontFamily: "PlusJakartaSans_Regular",
                fontSize: 12,
              }}
            >
              Save Password
            </Text>
            <Pressable>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  emailInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    alignItems: "center",
    marginTop: 3,
  },
  passwordInputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    alignItems: "center",
    marginTop: 3,
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

export default Login;
