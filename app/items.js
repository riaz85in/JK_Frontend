import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView, Pressable } from "react-native";
import { useDispatch, useSelector, Provider } from "react-redux";
import { addToCart, decrementQty, incrementQty } from "../reducer/cartreducer";
import {
  decrementQuantity,
  getProducts,
  incrementQuantity,
} from "../reducer/productreducer";
import { getProductsFromService } from "../services/productsservice";
import store from "../store/store";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, FAB, useTheme, Badge } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
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

function Items() {
  const navigation = useNavigation();
  const products = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const productsFromService = getProductsFromService();
  useEffect(() => {
    if (products.length > 0) return;

    const fetchProducts = () => {
      productsFromService.map((product) => dispatch(getProducts(product)));
    };
    fetchProducts();
  }, []);
  const addItemToCart = (item) => {
    dispatch(addToCart(item)); // cart array being used
    dispatch(incrementQuantity(item)); // product array being used
  };
  const cart = useSelector((state) => state.cart.cart);
  let cartCount = 0;
  let productCount = 0;

  cart.map((item) => {
    cartCount = cartCount + item.quantity;
  });

  products.map((item) => {
    productCount = productCount + item.quantity;
  });

  //console.log("---------------");
  //console.log(products);
  //console.log(cart);
  //console.log("---------------");

  return (
    <>
      <Appbar.Header style={s.appheader}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color="#F2EEEC"
        />
        <Appbar.Content title="Our Menu" titleStyle={s.appheadertitle} />
        <Appbar.Action
          icon="home"
          onPress={() => navigation.navigate("home")}
        />
        <Badge
          visible={cartCount && cartCount > 0}
          size={16}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          {cartCount}
        </Badge>
        <Appbar.Action
          icon="cart"
          onPress={() => navigation.navigate("cart")}
        />
      </Appbar.Header>

      <SafeAreaView style={s.container}>
        <ScrollView contentContainerStyle={s.scrollcontainer}>
          {products.map((item) => (
            <Pressable style={s.cardFirst} key={item.id}>
              <Image alt="value" style={s.thumb} source={item.image} />
              <SafeAreaView style={s.infoContainer}>
                <Text style={s.name}>{item.name}</Text>
                <Text style={s.price}>£{item.price}</Text>
                {cart.some((value) => value.id === item.id) ? (
                  <Pressable
                    style={{
                      flexDirection: "row",
                      marginTop: 20,
                      alignItems: "center",
                      backgroundColor: "#FFF",
                      borderRadius: 5,
                      width: 120,
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQty(item));
                        dispatch(decrementQuantity(item));
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 25,
                          color: "black",
                          paddingHorizontal: 10,
                        }}
                      >
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black",
                          paddingHorizontal: 10,
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        dispatch(incrementQty(item)); // cart
                        dispatch(incrementQuantity(item)); //product
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "black",
                          paddingHorizontal: 10,
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => addItemToCart(item)}
                    style={s.fpbuttons}
                  >
                    <Text style={s.fpbuttontext}>ADD TO CART</Text>
                  </Pressable>
                )}
              </SafeAreaView>
            </Pressable>
          ))}
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Items />
    </Provider>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff0e5",
//   },
//   scrollcontainer: {
//     backgroundColor: "#E3E4E2",
//     alignItems: "center",
//   },
//   cardFirst: {
//     width: "80%",
//     marginTop: 20,
//     backgroundColor: "#F2EEEC",
//     borderRadius: 10,
//     shadowOpacity: 2,
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
//   fpbuttons: {
//     alignItems: "center",
//     backgroundColor: "#e56e29",
//     padding: 5,
//     width: "50%",
//     borderRadius: 8,
//     marginLeft: 10,
//     marginBottom: 10,
//   },
//   fpbuttontext: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     resizeMode: "contain",
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
