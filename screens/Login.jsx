import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

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
            marginTop: 5,
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
            marginTop: "15%",
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
