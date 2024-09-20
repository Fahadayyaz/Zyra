import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const Splash = () => {
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
              alignSelf: "center",
              color: "#fff",
              fontSize: 24,
              top: 10,
            }}
          >
            Heading Here
          </Text>
          <Text
            style={{
              alignSelf: "center",
              color: "#fff",
              fontSize: 14,
              width: "80%",
              textAlign: "center",
              top: 15,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Text>
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
    width: "80%",
    borderRadius: 35,
    height: "25%",
    backgroundColor: "#92499C",
    position: "absolute",
    top: "66%",
  },
});

export default Splash;
