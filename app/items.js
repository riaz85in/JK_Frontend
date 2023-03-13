import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View, Pressable } from 'react-native';
import { useDispatch, useSelector, Provider } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../reducer/cartreducer";
import {getProducts,getProduct} from "../services/productsservice";
import store from "../store/store";
import { ScrollView } from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;

function Items() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const products = getProducts();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  }
  const decreaseQuantity = (item) => {
    if(item.quantity == 1){
      dispatch(removeFromCart(item));
    }else{
      dispatch(decrementQuantity(item));
    }
  }
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {products.map((item) => (
        <Pressable style={styles.cardFirst} key={item.id}>
          <Image alt='value' 
            style={styles.thumb}
            source={item.image}
          />
          <SafeAreaView style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>£{item.price}</Text>
          </SafeAreaView>
            {cart.some((value) => value.id == item.id) ? (
              <Pressable onPress={() => removeItemFromCart(item)}><Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    marginVertical: 10,
                    padding: 5,
                  }}
                >
                  REMOVE FROM CART
                </Text></Pressable>
            ) : (
              <Pressable onPress={() => addItemToCart(item)}><Text
                  style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    marginVertical: 10,
                    padding: 5,
                  }}
                >
                  ADD TO CART
                </Text></Pressable>
            )} 
            <Pressable
            style={{
              flexDirection: "row",
              marginTop:20,
              alignItems: "center",
              backgroundColor: "#FF3366",
              borderRadius: 5,
              width: 120,
            }}
          >
            <Pressable onPress={() => decreaseQuantity(item)}><Text
                style={{
                  fontSize: 25,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text></Pressable>

            <Pressable><Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                {item.quantity}
              </Text></Pressable>

            <Pressable onPress={() => increaseQuantity(item)}><Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text></Pressable>
          </Pressable>
         </Pressable>
        ))}
        <StatusBar style="auto" />
        </ScrollView>
        </SafeAreaView>
      );
      
}

export default () => {
  return (
    <Provider store={store}>
        <Items/>
    </Provider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3E4E2',
        alignItems:'center'
      },
    cardFirst: {
        width: '80%',
        marginTop:100,
        backgroundColor: '#F2EEEC',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowColor: 'black',
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 2,
        marginVertical: 20,
      },
      card: {
        width: '80%',
        marginTop:20,
        backgroundColor: '#F2EEEC',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowColor: 'black',
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
        width: '100%',
      },
      infoContainer: {
        padding: 16,
      },
      name: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
      },
      fpbuttons: {
        alignItems: 'center',
        backgroundColor: '#e56e29',
        padding: 5,
        width:'40%',
        borderRadius: 8,
      }, 
      fpbuttontext: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
});