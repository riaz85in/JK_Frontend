import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxStyle}>
        Johra's Kitchen is your go-to home catering business for authentic
        Muslim-style cuisine. Since 2018, we've been serving up mouth-watering
        dishes and with a loyal customer base already established in Malaysia,
        we are excited to bring their authentic and flavorful cuisine to
        Newbury. Whether you're hosting a party, get-together or any event,
        Johra's Kitchen is the perfect choice to impress your guests with our
        delectable food. Our commitment to exceptional service and quality
        ingredients ensures that every dish we serve is not just delicious, but
        also crafted with care. So why wait? Let Johra's Kitchen add some spice
        to your next event!
      </Text>
      <Separator />
      <View style={styles.Middle}>
        <TouchableOpacity style={styles.fpbuttons}>
          <Link href="/items" style={styles.fpbuttontext}>
            Order Now!
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
    fontFamily: "sans-serif-medium",
    fontSize: 15,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  timebutton: {
    alignItems: "center",
    backgroundColor: "#e56e29",
    width: 120,
    height: 40,
  },
  timebuttontext: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
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
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
