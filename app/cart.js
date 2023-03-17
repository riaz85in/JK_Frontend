import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector, Provider } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../reducer/cartreducer";
import store from "../store/store";
import { ScrollView } from "react-native-gesture-handler";
import { Link, Stack } from "expo-router";
import { DataTable, Text } from "react-native-paper";
import { Input, NativeBaseProvider, Image, theme, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

const Separator = () => <View style={styles.separator} />;

function HeaderTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

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

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Your Order",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <View style={{ paddingLeft: 10 }}>
        {cart.map((item) => (
          <Pressable key={item.id}>
            <View style={styles.row}>
              <View style={styles.firstcolumn}>
                <Text style={styles.firstcolumntext}>{item.quantity}X </Text>
              </View>
              <View style={styles.secondcolumn}>
                <Text style={styles.textCenter}>{item.name} </Text>
              </View>
              <View style={styles.thirdcolumn}>
                <Text style={styles.thirdcolumntext}>
                  £{item.price * item.quantity}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
        <View style={styles.lastrow}>
          <View style={styles.firstcolumn}>
            <Text> </Text>
          </View>
          <View style={styles.secondcolumn}>
            <Text style={{ color: "white" }}>Total</Text>
          </View>
          <View style={styles.thirdcolumn}>
            <Text style={{ color: "white" }}>£{calculateTotal()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.boxStyle}>
        <Text variant="titleMedium">Contact & Delivery details</Text>
      </View>

      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
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

      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
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

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
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
      <Separator />
      {/* Button */}

      <View style={styles.Middle}>
        <TouchableOpacity style={styles.fpbuttons}>
          <Link href="/items" style={styles.fpbuttontext}>
            Submit Order
          </Link>
        </TouchableOpacity>
        <Separator />
        <TouchableOpacity style={styles.fpbuttons}>
          <Link href="/items" style={styles.fpbuttontext}>
            Add more items
          </Link>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  tablecontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollcontainer: {
    backgroundColor: "white",
    alignItems: "center",
  },
  emailField: {
    marginLeft: 15,
  },
  emailInput: {
    marginRight: 5,
    backgroundColor: "#fff",
  },
  buttonStyle: {
    marginTop: 30,
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
  cardFirst: {
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
    width: "40%",
    borderRadius: 8,
    marginLeft: 10,
    marginBottom: 10,
  },
  fpbuttontext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  headertext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#E3E4E2",
  },
  lastrow: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#6F7D71",
    color: "white",
  },
  firstcolumn: {
    flexDirection: "column",
    alignItems: "center",
    width: "10%",
  },
  firstcolumntext: {
    color: "blue",
  },
  thirdcolumntext: {
    fontWeight: "bold",
  },
  secondcolumn: {
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
  },
  thirdcolumn: {
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
  },
  textCenter: {
    textAlign: "center",
  },
});
