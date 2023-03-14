import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View, Pressable, Animated } from 'react-native';
import { useDispatch, useSelector, Provider } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../reducer/cartreducer";
import {getProducts,getProduct} from "../services/productsservice";
import store from "../store/store";
import { ScrollView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, Stack } from "expo-router";


function HeaderTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

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
     <Stack.Screen
        options={{
           title: "Menu",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: (props) => <HeaderTitle {...props} />,
        }}
      />
        <ScrollView contentContainerStyle={styles.scrollcontainer}>

        {products.map((item) => (
        <Pressable style={styles.cardFirst} key={item.id}>
          <Image alt='value' 
            style={styles.thumb}
            source={item.image}
          />
          <SafeAreaView style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>£{item.price}</Text>
          <Pressable
            style={{
              flexDirection: "row",
              marginTop:20,
              alignItems: "center",
              backgroundColor: "#FFF",
              borderRadius: 5,
              width: 120,
            }}
          >
            <Pressable onPress={() => decreaseQuantity(item)}><Text
                style={{
                  fontSize: 25,
                  color: "black",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text></Pressable>

            <Pressable><Text
                style={{
                  fontSize: 20,
                  color: "black",
                  paddingHorizontal: 10,
                }}
              >
                {item.quantity}
              </Text></Pressable>

            <Pressable onPress={() => addItemToCart(item)}><Text
                style={{
                  fontSize: 20,
                  color: "black",
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text></Pressable>
          </Pressable>
          </SafeAreaView>
            {cart.some((value) => value.id == item.id) ? (
              <Pressable onPress={() => removeItemFromCart(item)} style={styles.fpbuttons}><Text
                 style={styles.fpbuttontext}
                >
                  REMOVE FROM CART
                </Text></Pressable>
            ) : (
              <Pressable onPress={() => addItemToCart(item)} style={styles.fpbuttons}><Text
                  style={styles.fpbuttontext}
                >
                  ADD TO CART
                </Text></Pressable>
            )} 
            
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
        backgroundColor: '#E3E4E2'
     },
    scrollcontainer: {
        backgroundColor: '#E3E4E2',
        alignItems:'center'
      },
    cardFirst: {
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
        marginLeft:10,
        marginBottom:10
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