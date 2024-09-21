import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Image
          source={require("./../assets/appIcon/ZyraIcon.png")}
          style={styles.logo}
        />
        <Image
          source={require("./../assets/Images/truck.png")}
          style={styles.bg}
        />
        <View style={styles.card}>
          <Text
            style={{
              fontFamily: "Poppins_SemiBold",
              color: "#fff",
              fontSize: 24,
              alignSelf: "center",
              marginTop: "10%",
            }}
          >
            Heading Here
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSans_Regular",
              textAlign: "center",
              alignSelf: "center",
              color: "#fff",
              fontSize: 14,
              width: "90%",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              height: 42,
              backgroundColor: "#fff",
              borderRadius: 35,
              alignSelf: "center",
              marginTop: "5%",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <AntDesign
              name="arrowright"
              size={24}
              color="#92499C"
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: "10%",
  },
  logo: {
    width: 100,
    height: 55.42,
    marginBottom: 20,
  },
  bg: {
    width: "100%",
    height: "70%",
  },
  card: {
    alignSelf: "center",
    width: "90%",
    borderRadius: 35,
    height: "28%",
    backgroundColor: "#92499C",
    position: "absolute",
    top: "64%",
  },
});

export default Splash;
