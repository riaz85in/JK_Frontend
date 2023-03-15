import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView, Pressable } from "react-native";
import { useDispatch, useSelector, Provider } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../reducer/cartreducer";
import store from "../store/store";
import { ScrollView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { DataTable } from "react-native-paper";
import { theme } from "native-base";

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
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Cart",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        <DataTable>
          <DataTable.Header theme={theme}>
            <DataTable.Title theme={theme}>Item</DataTable.Title>
            <DataTable.Title theme={theme} numeric>
              Count
            </DataTable.Title>
            <DataTable.Title theme={theme} numeric>
              Price
            </DataTable.Title>
          </DataTable.Header>
          {cart.map((item) => (
            <Pressable key={item.id}>
              <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
                <DataTable.Cell numeric>{item.price}</DataTable.Cell>
              </DataTable.Row>
            </Pressable>
          ))}
        </DataTable>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollcontainer: {
    backgroundColor: "white",
    alignItems: "center",
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
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
