import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const OtpVerification = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}></View>
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    width: "90%",
    height: "100%",
    backgroundColor: "lightblue",
    alignSelf: "center",
  },
});
