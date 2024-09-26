import {
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const responsiveFontSize = (size) => (size * width) / 375;
const responsivePadding = (size) => (size * width) / 375;
const responsiveWidth = (size) => (size * height) / 812;
const responsiveHeight = (size) => (size * width) / 375;

export default function Home() {
  const emailInputRef = useRef(null);
  const truckNoInputRef = useRef(null);
  const partDescInputRef = useRef(null);
  const notesInputRef = useRef(null);

  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [truckNumber, setTruckNumber] = useState("");
  const [partDescription, setPartDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [userId, setUserId] = useState(null);
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [storeName, setStoreName] = useState("");
  const [loading, setLoading] = useState(false);

  const CustomAlert = ({ message, onClose }) => {
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
            <Text style={{ textAlign: "center", fontSize: 24 }}>
              Sent Successfully
            </Text>
            <Text style={{ textAlign: "center" }}>
              Your request has been sent successfully
            </Text>
            <TouchableOpacity
              onPress={() => {
                onClose();
                navigation.navigate("Home");
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#92499C",
                  marginTop: responsiveHeight(27),
                  textDecorationLine: "underline",
                  fontFamily: "bold",
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

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {toast ? (
        <CustomAlert message={toastMessage} onClose={() => setToast(false)} />
      ) : (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          {/* magenta wrap goes here */}

          <View
            style={{
              width: "100%",
              height: responsiveHeight(100),
              backgroundColor: "#92499C",
              borderBottomRightRadius: 40,
              borderBottomLeftRadius: 40,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingTop: 20,
            }}
          >
            {/* hey Fahad goes here */}

            <Text
              style={{
                fontSize: responsiveFontSize(14),
                color: "#fff",
                alignSelf: "center",
                fontFamily: "PlusJakartaSans_Bold",
              }}
            >
              Hey,👋 Fahad
            </Text>

            {/* submissions button / history button goes here */}
            <Pressable
              style={{
                height: 30,
                width: 30,
                borderRadius: 99,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                right: 22,
                left: 80,
              }}
              onPress={() => navigation.navigate("Submissions")}
            >
              <Image
                source={require("./../assets/appIcon/HistoryIcon.png")}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </Pressable>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                height: "100%",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontSize: 25,
                  fontFamily: "Poppins_Medium",
                  marginTop: responsiveHeight(30),
                }}
              >
                Create Entry
              </Text>
              <Text
                style={{
                  color: "#462F4D",
                  fontFamily: "PlusJakartaSans_Regular",
                  fontSize: 13.94,
                }}
              >
                Please fill the information
              </Text>

              {/* name goes here */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(30),
                    fontSize: 12,
                    fontFamily: "PlusJakartaSans_Medium",
                  }}
                >
                  Name
                </Text>
                <View style={styles.inputContainer}>
                  <Pressable style={styles.iconContainer}>
                    <Image
                      source={require("./../assets/appIcon/ReceiverIcon.png")}
                      style={styles.inputIcon}
                    />
                  </Pressable>
                  <TextInput
                    placeholder="Enter Your Name"
                    fontFamily="PlusJakartaSans_Regular"
                    style={styles.input}
                    placeholderTextColor={"#7C7C7C"}
                    keyboardType="default"
                    returnKeyType="next"
                    cursorColor={"#92499C"}
                    value={name}
                    onChangeText={(text) => setName(text)} // Bind name state
                    onSubmitEditing={() => emailInputRef.current.focus()}
                  />
                </View>
              </View>

              {/* email goes here */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(20),
                    fontSize: 12,
                    fontFamily: "PlusJakartaSans_Medium",
                  }}
                >
                  Email
                </Text>
                <View style={styles.inputContainer}>
                  <Pressable style={styles.iconContainer}>
                    <Image
                      source={require("./../assets/appIcon/mailIcon.png")}
                      style={styles.inputIcon}
                    />
                  </Pressable>
                  <TextInput
                    ref={emailInputRef}
                    placeholder="Enter Your Email Address"
                    style={styles.input}
                    placeholderTextColor={"#7C7C7C"}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    cursorColor={"#92499C"}
                    value={email}
                    onChangeText={(text) => setEmail(text)} // Bind email state
                    onSubmitEditing={() => truckNoInputRef.current.focus()}
                  />
                </View>
              </View>

              {/* truck input goes here */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(20),
                    fontSize: 12,
                    fontFamily: "PlusJakartaSans_Medium",
                  }}
                >
                  Truck No
                </Text>
                <View style={styles.inputContainer}>
                  <Pressable style={styles.iconContainer}>
                    <Image
                      source={require("./../assets/appIcon/HashIcon.png")}
                      style={styles.inputIcon}
                    />
                  </Pressable>
                  <TextInput
                    ref={truckNoInputRef}
                    placeholder="Enter Truck No"
                    style={styles.input}
                    placeholderTextColor={"#7C7C7C"}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    cursorColor={"#92499C"}
                    value={truckNumber}
                    onChangeText={(text) => setTruckNumber(text)} // Bind truck number state
                    onSubmitEditing={() => partDescInputRef.current.focus()}
                  />
                </View>
              </View>

              {/* description section goes here */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(20),
                    fontSize: 12,
                    fontFamily: "PlusJakartaSans_Medium",
                  }}
                >
                  Part Description
                </Text>
                <View style={[styles.inputContainer, { height: 120 }]}>
                  <TextInput
                    ref={partDescInputRef}
                    placeholder="Type here"
                    style={[styles.descInput, { paddingLeft: 10, height: 100 }]}
                    placeholderTextColor={"#7C7C7C"}
                    multiline={true}
                    cursorColor={"#92499C"}
                    value={partDescription}
                    onChangeText={(text) => setPartDescription(text)}
                    onSubmitEditing={() => notesInputRef.current.focus()}
                  />
                </View>
              </View>

              {/* notes goes here */}
              <View>
                <Text
                  style={{
                    marginTop: responsiveHeight(20),
                    fontSize: 12,
                    fontFamily: "PlusJakartaSans_Medium",
                  }}
                >
                  Notes
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={notesInputRef}
                    placeholder="Type here"
                    style={[styles.input, { paddingLeft: 10 }]}
                    placeholderTextColor={"#7C7C7C"}
                    cursorColor={"#92499C"}
                    multiline={true}
                    value={notes}
                    onChangeText={(text) => setNotes(text)}
                  />
                </View>
              </View>

              {/* submit button goes here */}
              <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                  {loading ? "Loading..." : "Submit"}
                </Text>
              </Pressable>
              <Pressable
                style={{
                  width: "70%",
                  alignSelf: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: responsiveHeight(10),
                }}
              >
                <Pressable onPress={() => navigation.navigate("ContactUs")}>
                  <Text
                    style={{
                      color: "#7C7C7C",
                      fontFamily: "PlusJakartaSans_Regular",
                      fontSize: 12,
                    }}
                  >
                    Contact Us
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate("TermsAndConditions")}
                >
                  <Text
                    style={{
                      color: "#7C7C7C",
                      fontFamily: "PlusJakartaSans_Regular",
                      fontSize: 12,
                    }}
                  >
                    Terms & Conditions
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    height: responsiveHeight(48),
    marginTop: responsiveHeight(5),
  },
  iconContainer: {
    height: responsiveHeight(27),
    width: responsiveWidth(27),
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  inputIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  input: {
    fontSize: responsiveFontSize(12),
    flex: 1,
    borderRadius: 8,
    color: "#000",
  },
  descInput: {
    fontSize: responsiveFontSize(12),
    flex: 1,
    borderRadius: 8,
    color: "#000",
    verticalAlign: "top",
    marginTop: responsiveHeight(10),
    fontFamily: "PlusJakartaSans_Regular",
  },
  buttonContainer: {
    height: responsiveHeight(48),
    width: "100%",
    backgroundColor: "#92499C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: responsiveHeight(20),
    marginBottom: responsiveHeight(20),
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "regular",
    color: "#ffff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: "90%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    elevation: 2,
  },
  alertText: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#92499C",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
