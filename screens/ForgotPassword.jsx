import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const ForgotPassword = () => {
  return (
    <View style={styles.mainContainer}>
      <ExpoStatusBar style="auto" />
      <View style={styles.contentContainer}></View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  contentContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "lightblue",
    marginTop: "10%",
  },
});
