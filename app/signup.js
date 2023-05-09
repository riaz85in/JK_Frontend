import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { Input, NativeBaseProvider, Icon, Image } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Appbar, FAB, useTheme } from "react-native-paper";

const Separator = () => <View style={s.separator} />;
const s = require("../assets/styles/style");

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
        s.button,
      ]}
    >
      <Text style={s.buttonText}>{title}</Text>
    </Pressable>
  );
};

function Signup() {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={s.appheader}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color="#F2EEEC"
        />
        <Appbar.Content title="Signup" titleStyle={s.appheadertitle} />
      </Appbar.Header>

      <SafeAreaView style={s.container}>
        <View style={s.Middle}>
          <Image
            alt="value"
            style={s.logo1}
            source={require("../assets/JKIcon.png")}
          />
          <Text style={s.LoginText}>Signup now to enjoy AWESOME FOOD from</Text>
          <Image
            alt="value"
            style={s.logo}
            source={require("../assets/LogoText.png")}
          />
        </View>

        {/* Username Input Field */}
        <View style={s.buttonStyleX}>
          <View style={s.emailInput}>
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
        <View style={s.buttonStyleX}>
          <View style={s.emailInput}>
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
        {/* Mobile no Field */}
        <View style={s.buttonStyleX}>
          <View style={s.emailInput}>
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
              placeholder="Mobile number starting with 0"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>
        {/* Mobile no Field */}
        <View style={s.buttonStyleX}>
          <View style={s.emailInput}>
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
              placeholder="Email Id"
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

        <View style={s.Middle}>
          <ZoomButton
            title="Register"
            onTap={() => navigation.navigate("Items")}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Signup />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
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
});
