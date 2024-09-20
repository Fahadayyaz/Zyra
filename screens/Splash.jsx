import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const Splash = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentContainer: {},
  logo: {
    width: 100,
    height: 55.42,
    marginBottom: 20,
  },
});

export default Splash;
