import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Splash Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")} // Home screen par navigate krta hai
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Splash;
