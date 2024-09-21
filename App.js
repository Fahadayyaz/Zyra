import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Splash from "./screens/Splash";
import Login from "./screens/Login";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Poppins_SemiBold: require("../Zyra/assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Medium: require("../Zyra/assets/fonts/Poppins-Medium.ttf"),
    PlusJakartaSans_Regular: require("../Zyra/assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSans_Medium: require("../Zyra/assets/fonts/PlusJakartaSans-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
