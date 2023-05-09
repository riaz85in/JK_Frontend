import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector, Provider, useState } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../reducer/cartreducer";
import store from "../store/store";
import { Text, SegmentedButtons, Button } from "react-native-paper";
import { Input, NativeBaseProvider, Image, theme, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { DatePickerInput, TimePickerModal } from "react-native-paper-dates";
import { Appbar, FAB, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import emailjs from "@emailjs/browser";

const Separator = () => <View style={styles.separator} />;
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

function Cart() {
  const navigation = useNavigation();
  //For Segmented buttons
  const [value, setValue] = React.useState("pickup");

  //For Datepicker
  const [inputDate, setInputDate] = React.useState(undefined);

  //For Timepicker
  const [visible, setVisible] = React.useState(false);
  const [time, setTime] = React.useState("00:00");

  //Name text field
  const [name, setName] = React.useState("");

  //Email field
  const [email, setEmail] = React.useState("");

  //Total field
  const [total, setTotal] = React.useState("");

  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      setTime(hours + ":" + minutes);
    },
    [setVisible, setTime]
  );

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };
  const calculateTotal = () => {
    let total = 0;
    cart.map((item) => (total = total + item.quantity * item.price));
    return total;
  };

  const createEmailContent = () => {
    // let itemarray = "";
    // let countarray = "";
    // let pricearray = "";
    let contentArray =
      "<table style='border-collapse: collapse; width: 100%;' border='1'><colgroup><col style='width: 33.3333%;'><col style='width: 33.3333%;'><col style='width: 33.3333%;'></colgroup><tbody><tr><td><b>Item</b></td><td><b>Count</b></td><td><b>Price</b></td></tr>";

    // cart.map((item) => {
    //   itemarray = itemarray + item.name + "<br/>";
    //   countarray = countarray + item.quantity + "<br/>";
    //   pricearray = pricearray + item.quantity * item.price + "<br/>";
    // });

    cart.map((item) => {
      contentArray =
        contentArray +
        "<tr style='height: 18.6667px;'> <td style='height: 18.6667px;'>" +
        item.name +
        "</td>" +
        "<td style='height: 18.6667px;'>" +
        item.quantity +
        "</td>" +
        "<td style='height: 18.6667px;'>" +
        item.quantity * item.price +
        "£</td></tr>";
    });

    contentArray =
      contentArray +
      "<tr><td>&nbsp;</td><td><b>Total</b></td><td><b>" +
      calculateTotal() +
      "£</b></td></tr>";

    /*contentArray = {
      itemarray: itemarray,
      countarray: countarray,
      pricearray: pricearray,
    };*/

    return contentArray;
  };

  const sendOrderPlacedEmail = () => {
    const contentArray = createEmailContent();
    const templateParams = {
      to_name: name,
      to_email: email,
      orderdetails: contentArray,
      totalamount: calculateTotal(),
      paymentdetails:
        "Name: Nazreen Johra Sikander Syedibrahim Sha <br/> Account# : 62850168 <br/> Sort code: 30-95-89",
      image:
        "<img src='https://ibb.co/t4dxL7X' alt='Logo' width='100' height='50'>",
    };

    alert(JSON.stringify(contentArray));

    emailjs
      .send(
        "OrderConfirmation",
        "template_123456",
        templateParams,
        "2PqxFvonM7H4Ne-WN"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert(response.status + " " + response.text);
        },
        function (error) {
          console.log("FAILED...", JSON.stringify(error));
          alert("Error" + JSON.stringify(error));
        }
      );
  };

  return (
    <>
      <Appbar.Header style={s.appheader}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color="#F2EEEC"
        />
        <Appbar.Content title="Your Order" titleStyle={s.appheadertitle} />
        <Appbar.Action
          icon="home"
          onPress={() => navigation.navigate("home")}
        />
      </Appbar.Header>
      <SafeAreaView style={s.container}>
        <View style={{ paddingLeft: 10 }}>
          <View style={s.boxStyleX}>
            <Text variant="titleMedium">Order details</Text>
          </View>
          <Separator />
          {cart.map((item) => (
            <Pressable key={item.id}>
              <View style={s.row}>
                <View style={s.firstcolumn}>
                  <Text style={s.firstcolumntext}>{item.quantity}X </Text>
                </View>
                <View style={s.secondcolumn}>
                  <Text style={s.textCenter}>{item.name} </Text>
                </View>
                <View style={s.thirdcolumn}>
                  <Text style={s.thirdcolumntext}>
                    £{item.price * item.quantity}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
          <View style={s.lastrow}>
            <View style={s.firstcolumn}>
              <Text> </Text>
            </View>
            <View style={s.secondcolumn}>
              <Text style={{ color: "white" }}>Total</Text>
            </View>
            <View style={s.thirdcolumn}>
              <Text style={{ color: "white" }}>£{calculateTotal()}</Text>
            </View>
          </View>
        </View>
        <View style={s.boxStyle}>
          <Text variant="titleMedium">Contact & Delivery details</Text>
        </View>

        <View style={s.buttonStyle}>
          <View style={s.emailInput}>
            <Input
              onChangeText={(name) => setName(name)}
              value={name}
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="user" />}
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
              placeholder="Name"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>

        <View style={s.buttonStyleX}>
          <View style={s.emailInput}>
            <Input
              onChangeText={(email) => setEmail(email)}
              value={email}
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="envelope" />}
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
        <View style={s.buttonStyleX}>
          <View style={s.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="phone" />}
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
              placeholder="Contact Number"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>
        <View style={s.buttonStyleX}>
          <View style={s.emailInput}>
            <DatePickerInput
              locale="en"
              label="Order date"
              value={inputDate}
              onChange={(d) => setInputDate(d)}
              inputMode="start"
            />
          </View>
        </View>

        <View style={s.segbutton}>
          <SegmentedButtons
            density="small"
            style={{ width: 200 }}
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: "pickup",
                label: "Pickup",
              },
              {
                value: "delivery",
                label: "Delivery",
              },
            ]}
          />
        </View>
        {value === "delivery" && (
          <View style={s.buttonStyleX}>
            <View style={s.emailInput}>
              <Input
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="map-marked-alt" />}
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
                placeholder="Delivery Address"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
            </View>
          </View>
        )}
        {value === "delivery" && (
          <View style={s.buttonStyleX}>
            <View style={s.timerow}>
              <View style={s.timecolumn}>
                <Button
                  onPress={() => setVisible(true)}
                  uppercase={false}
                  mode="outlined"
                  style={s.timebutton}
                >
                  <Text style={s.timebuttontext}>Pick time</Text>
                </Button>
                <TimePickerModal
                  visible={visible}
                  onDismiss={onDismiss}
                  onConfirm={onConfirm}
                  hours={12}
                  minutes={14}
                />
              </View>
              <View>
                <Text>{"        "}</Text>
              </View>
              <View style={s.timecolumn}>
                <Input
                  InputLeftElement={
                    <Icon
                      as={<FontAwesome5 name="clock" />}
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
                  placeholder="Delivery Time"
                  value={time}
                  _light={{
                    placeholderTextColor: "blueGray.400",
                  }}
                  _dark={{
                    placeholderTextColor: "blueGray.50",
                  }}
                />
              </View>
            </View>
          </View>
        )}
        <Separator />
        {/* Button */}

        <View style={s.Middle}>
          <TouchableOpacity style={s.fpbuttons}>
            <Button
              onPress={() => sendOrderPlacedEmail()}
              style={s.fpbuttontext}
            >
              Submit Order
            </Button>
          </TouchableOpacity>

          <Separator />
          <View style={s.Middle}>
            <ZoomButton
              title="Add more items"
              onTap={() => navigation.navigate("Items")}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Cart />
      </Provider>
    </NativeBaseProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     paddingHorizontal: 15,
//     backgroundColor: "#fff",
//   },
//   tablecontainer: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   scrollcontainer: {
//     backgroundColor: "white",
//     alignItems: "center",
//   },
//   emailField: {
//     marginLeft: 15,
//   },
//   emailInput: {
//     marginRight: 5,
//     backgroundColor: "#fff",
//   },
//   buttonStyle: {
//     marginTop: 30,
//     marginLeft: 15,
//     marginRight: 15,
//   },
//   buttonStyleX: {
//     marginTop: 12,
//     marginLeft: 15,
//     marginRight: 15,
//   },
//   buttonDesign: {
//     backgroundColor: "#E88449",
//   },
//   cardFirst: {
//     width: "80%",
//     marginTop: 20,
//     backgroundColor: "#F2EEEC",
//     borderRadius: 16,
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     shadowColor: "black",
//     shadowOffset: {
//       height: 0,
//       width: 0,
//     },
//     elevation: 2,
//     marginVertical: 20,
//   },
//   card: {
//     width: "80%",
//     marginTop: 20,
//     backgroundColor: "#F2EEEC",
//     borderRadius: 16,
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     shadowColor: "black",
//     shadowOffset: {
//       height: 0,
//       width: 0,
//     },
//     elevation: 2,
//     marginVertical: 20,
//   },
//   thumb: {
//     height: 150,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     width: "100%",
//   },
//   infoContainer: {
//     padding: 16,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 8,
//   },
//   headertext: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "black",
//   },
//   Middle: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   lineStyle: {
//     flexDirection: "row",
//     marginTop: 30,
//     marginLeft: 15,
//     marginRight: 15,
//     alignItems: "center",
//   },
//   imageStyle: {
//     width: 80,
//     height: 80,
//     marginLeft: 20,
//   },
//   boxStyle: {
//     flexDirection: "row",
//     marginTop: 30,
//     marginLeft: 15,
//     marginRight: 15,
//     justifyContent: "space-around",
//   },
//   boxStyleX: {
//     flexDirection: "row",
//     marginTop: 5,
//     marginRight: 20,
//     justifyContent: "space-around",
//   },
//   fpbuttons: {
//     alignItems: "center",
//     backgroundColor: "#e56e29",
//     padding: 5,
//     width: "60%",
//   },
//   timebutton: {
//     alignItems: "center",
//     backgroundColor: "#e56e29",
//     width: 120,
//     height: 40,
//   },
//   fpbuttontext: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   timebuttontext: {
//     fontSize: 12,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   Linktext: {
//     fontSize: 15,
//     color: "black",
//     textDecorationLine: "underline",
//   },
//   normaltext: {
//     fontSize: 15,
//     color: "black",
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     backgroundColor: "#E3E4E2",
//   },
//   timerow: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   lastrow: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     backgroundColor: "#6F7D71",
//     color: "white",
//   },
//   firstcolumn: {
//     flexDirection: "column",
//     alignItems: "center",
//     width: "10%",
//   },
//   timecolumn: {
//     flexDirection: "column",
//     alignItems: "center",
//     width: "30%",
//   },
//   firstcolumntext: {
//     color: "blue",
//   },
//   thirdcolumntext: {
//     fontWeight: "bold",
//   },
//   secondcolumn: {
//     flexDirection: "column",
//     alignItems: "center",
//     width: "60%",
//   },
//   thirdcolumn: {
//     flexDirection: "column",
//     alignItems: "center",
//     width: "30%",
//   },
//   textCenter: {
//     textAlign: "center",
//   },
//   segbutton: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   appheader: {
//     backgroundColor: "#E88449",
//   },
//   appheadertitle: {
//     color: "#F2EEEC",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

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
