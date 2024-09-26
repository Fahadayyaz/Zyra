import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

const responsiveHeight = (size) => (size * width) / 375;

const SentSuccessfully = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <View
        style={{
          width: "90%",
          height: "100%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        {/* card goes here */}
        <View
          style={{
            height: responsiveHeight(250),
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 33,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Image
            source={require("./../assets/appIcon/SentSuccessfully.png")}
            style={{
              height: 100,
              width: 100,
              resizeMode: "contain",
              alignSelf: "center",
              marginTop: responsiveHeight(20),
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins_Medium",
              fontSize: 24,
            }}
          >
            Sent Successfully
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "PlusJakartaSans_Regular",
              fontSize: 12,
            }}
          >
            Your request has been sent successfully
          </Text>

          {/* Request another */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#92499C",
                marginTop: responsiveHeight(20),
                textDecorationLine: "underline",
                fontFamily: "PlusJakartaSans_Bold",
                fontSize: 12,
              }}
            >
              Request Another
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SentSuccessfully;

const styles = StyleSheet.create({});
