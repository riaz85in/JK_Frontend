//import "expo-router/entry";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { useNavigation } from "@react-navigation/native";
import Login from "./app/login";
import signup from "./app/signup";
import HomeScreen from "./app/home";
import items from "./app/items";

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

function Home() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 3000);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={loading}
      logoImage={require("./assets/LoadLogo_TP.png")}
      backgroundColor={"#fff29c"}
      logoHeight={200}
      logoWidth={200}
    >
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require("./assets/HomePageLogo_TP.png")}
        />

        <ZoomButton title="LOGIN" onTap={() => navigation.navigate("Login")} />

        <ZoomButton
          title="SIGNUP"
          onTap={() => navigation.navigate("Signup")}
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    </AnimatedSplash>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Items" component={items} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0e5",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: "contain",
  },
  fpbuttons: {
    alignItems: "center",
    backgroundColor: "#e56e29",
    padding: 5,
    width: 150,
  },
  fpbuttontext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    padding: 8,
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: "#e56e29",
    width: 150,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
