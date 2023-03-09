import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from "expo-router";

const Separator = () => <View style={styles.separator} />;

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.cardFirst}>
          <Image alt='value' 
            style={styles.thumb}
            source={require('../assets/products/MuttonBiriyani.png')}
          />
          <SafeAreaView style={styles.infoContainer}>
            <Text style={styles.name}>Mutton Biriyani</Text>
            <Text style={styles.price}>£11</Text>
            <TouchableOpacity style={styles.fpbuttons}>
                <Link href="/login" style={styles.fpbuttontext}>Add to Cart</Link>
            </TouchableOpacity>
          </SafeAreaView>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image alt='value' 
            style={styles.thumb}
            source={require('../assets/products/ChickenBiriyani.png')}
          />
          <SafeAreaView style={styles.infoContainer}>
            <Text style={styles.name}>Chicken Biriyani</Text>
            <Text style={styles.price}>£9</Text>
            <TouchableOpacity style={styles.fpbuttons}>
                <Link href="/login" style={styles.fpbuttontext}>Add to Cart</Link>
            </TouchableOpacity>
          </SafeAreaView>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </SafeAreaView>
      );
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