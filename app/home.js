import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import { ActivityIndicator, Appbar, FAB, useTheme } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const carouselImages = [
    { url: require("../assets/products/ChickenBiriyani.png") },
    { url: require("../assets/products/oap.jpg") },
    { url: require("../assets/products/cookingprocess.png") },
    { url: require("../assets/products/bucketmin.jpg") },
    { url: require("../assets/products/megaordermin.jpg") },
  ];
  return (
    <>
      <Appbar.Header style={styles.appheader}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color="#F2EEEC"
        />
        <Appbar.Content
          title="Welcome to Johra's Kitchen!"
          titleStyle={styles.appheadertitle}
        />
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Image
            alt="value"
            style={styles.logo}
            source={require("../assets/LoadLogo_TP.png")}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.wbctext}>Registered with</Text>
          </View>
          <View style={styles.column}>
            <Image
              alt="value"
              style={styles.wbc}
              source={require("../assets/WBC.png")}
            />
          </View>
        </View>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={carouselImages}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View
              style={{
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Image style={styles.carouselimage} source={item.url} />
            </View>
          )}
        />
        <Text style={styles.boxStyle}>
          Johra's Kitchen is your go-to home catering business for authentic
          Muslim-style cuisine. Since 2018, we've been serving up mouth-watering
          dishes and with a loyal customer base already established in Malaysia,
          we are excited to bring our authentic and flavorful cuisine to
          Newbury. Whether you're hosting a party, get-together or any event,
          Johra's Kitchen is the perfect choice to impress your guests with our
          delectable food. Our commitment to exceptional service and quality
          ingredients ensures that every dish we serve is not just delicious,
          but also crafted with care. So why wait? Let Johra's Kitchen add some
          spice to your next event!
        </Text>
        <Separator />
        <View style={styles.Middle}>
          <TouchableOpacity style={styles.fpbuttons}>
            <Link href="/items" style={styles.fpbuttontext}>
              Order Now!
            </Link>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0e5",
    alignItems: "center",
    justifyContent: "center",
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
    fontFamily: "sans-serif-medium",
    fontSize: 15,
  },
  logo: {
    width: 180,
    height: 150,
  },
  carouselimage: {
    width: "100%",
    height: "115%",
  },
  wbc: {
    width: 70,
    height: 70,
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
  appheader: {
    backgroundColor: "#E88449",
  },
  appheadertitle: {
    color: "#F2EEEC",
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  wbctext: {
    fontWeight: "bold",
  },
});
