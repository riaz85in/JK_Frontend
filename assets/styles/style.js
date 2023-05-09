"use strict";
import { StyleSheet, Text, Pressable } from "react-native";

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

export default ZoomButton;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0e5",
    alignItems: "center",
  },
  scrollcontainer: {
    backgroundColor: "#E3E4E2",
    alignItems: "center",
  },
  cardFirst: {
    width: "80%",
    marginTop: 20,
    backgroundColor: "#F2EEEC",
    borderRadius: 10,
    shadowOpacity: 2,
    shadowRadius: 6,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    marginVertical: 20,
  },
  card: {
    width: "80%",
    marginTop: 20,
    backgroundColor: "#F2EEEC",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    marginVertical: 20,
  },
  thumb: {
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  fpbuttons: {
    alignItems: "center",
    backgroundColor: "#e56e29",
    padding: 5,
    width: "50%",
    borderRadius: 8,
    marginLeft: 10,
    marginBottom: 10,
  },
  fpbuttontext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
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
