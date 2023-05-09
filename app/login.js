import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  LinkButton,
} from "react-native";
import { Input, NativeBaseProvider, Icon, Image, Center } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import store from "../store/store";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Separator = () => <View style={styles.separator} />;

const ZoomButton = ({ title, onTap }) => {
  return (
    <Pressable
      onPress={onTap}
      style={({ pressed }) => [
        {
          transform: [
            {
              scale: pressed ? 1.07 : 1,
            },
          ],
          backgroundColor: "#2277ee",
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

function Login() {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={styles.appheader}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color="#F2EEEC"
        />
        <Appbar.Content title="Login" titleStyle={styles.appheadertitle} />
        <Appbar.Action
          icon="home"
          onPress={() => navigation.navigate("Homescreen")}
        />
      </Appbar.Header>

      <SafeAreaView style={styles.container}>
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
          <ZoomButton
            title="LOGIN"
            onTap={() => navigation.navigate("Homescreen")}
          />
        </View>
        <View style={styles.text2}>
          <Text style={styles.normaltext}>Don't have an account? </Text>
          <ZoomButton
            title="Signup"
            onTap={() => navigation.navigate("Signup")}
          />
        </View>
        <StatusBar style="dark" />
      </SafeAreaView>
    </>
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
    backgroundColor: "#fff0e5",
    alignItems: "center",
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
    alignContent: "center",
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
    width: 300,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
    width: 300,
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
  button: {
    padding: 8,
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: "#e56e29",
    width: 100,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  Linktext: {
    fontSize: 15,
    color: "blue",
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
  appheader: {
    backgroundColor: "#E88449",
  },
  appheadertitle: {
    color: "#F2EEEC",
    fontSize: 18,
    fontWeight: "bold",
  },
});
