import { StyleSheet, Text, View, Image } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Separator = () => <View style={styles.separator} />;

export default function thankyou() {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={styles.appheader}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color="#F2EEEC"
        />
        <Appbar.Content title="Thank you!" titleStyle={styles.appheadertitle} />
        <Appbar.Action
          icon="home"
          onPress={() => navigation.navigate("home")}
        />
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <Image
          alt="value"
          style={styles.logo}
          source={require("../assets/JKIcon.png")}
        />
        <Text style={styles.boxStyle}>Your Order has been Submitted! </Text>

        <Text style={styles.boxStyle}>
          Please check your mail for payment instructions.
        </Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2EEEC",
    alignItems: "center",
    justifyContent: "center",
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "sans-serif-medium",
    fontSize: 15,
  },
  logo: {
    width: 100,
    height: 100,
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
});
