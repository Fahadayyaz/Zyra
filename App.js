import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import CreateNewPassword from "./screens/CreateNewPassword";
import Home from "./screens/Home";
import Submissions from "./screens/Submissions";
import SentSuccessfully from "./screens/SentSuccessfully";

import ContactUs from "./screens/ContactUs";
import TermsAndConditions from "./screens/TermsAndConditions";
import OtpVerification from "./screens/OtpVerification";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Poppins_SemiBold: require("../Zyra/assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_Medium: require("../Zyra/assets/fonts/Poppins-Medium.ttf"),
    PlusJakartaSans_Regular: require("../Zyra/assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSans_Medium: require("../Zyra/assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSans_Bold: require("../Zyra/assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SentSuccessfully" component={SentSuccessfully} />
        <Stack.Screen name="Submissions" component={Submissions} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
