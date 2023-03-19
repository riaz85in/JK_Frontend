import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Input, NativeBaseProvider, Icon, Image } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import store from "../store/store";

const Separator = () => <View style={styles.separator} />;

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Image
            alt="value"
            style={styles.logo1}
            source={require("../assets/JKIcon.png")}
          />
          <Text style={styles.LoginText}>
            You are so close to AWESOME FOOD from
          </Text>
          <Image
            alt="value"
            style={styles.logo}
            source={require("../assets/LogoText.png")}
          />
        </View>

        {/* Username or Email Input Field */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Username"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Password"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>
        <Separator />
        {/* Button */}

        <View style={styles.Middle}>
          <TouchableOpacity style={styles.fpbuttons}>
            <Link href="/home" style={styles.fpbuttontext}>
              Login
            </Link>
          </TouchableOpacity>
        </View>

        <View style={styles.text2}>
          <Text style={styles.normaltext}>Don't have an account? </Text>
          <Link href="/signup" style={styles.Linktext}>
            Signup
          </Link>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <NativeBaseProvider store={store}>
      <Login />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 300,
    resizeMode: "contain",
  },
  logo1: {
    marginTop: 100,
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  LoginText: {
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
    color: "#6F7D71",
    fontFamily: "sans-serif",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailField: {
    marginLeft: 15,
  },
  emailInput: {
    marginRight: 5,
    backgroundColor: "#fff",
  },
  buttonStyle: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#E88449",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  fpbuttons: {
    alignItems: "center",
    backgroundColor: "#e56e29",
    padding: 5,
    width: "60%",
  },
  fpbuttontext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  Linktext: {
    fontSize: 15,
    color: "black",
    textDecorationLine: "underline",
  },
  normaltext: {
    fontSize: 15,
    color: "black",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
