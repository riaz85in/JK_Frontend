import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";
import { Link } from "expo-router";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 3000);
  
  return (
   <AnimatedSplash
      translucent={true}
      isLoaded={loading}
      logoImage={require("../assets/LoadLogo_TP.png")}
      backgroundColor={"#F2EEEC"}
      logoHeight={200}
      logoWidth={200}
    >

    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/HomePageLogo.png')}/>
      
      <TouchableOpacity style={styles.fpbuttons}>
          <Link href="/login" style={styles.fpbuttontext}>Login</Link>
        </TouchableOpacity>
      <Separator/>
      <TouchableOpacity
        style={styles.fpbuttons}>
           <Link href="/signup" style={styles.fpbuttontext}>Signup</Link>
        </TouchableOpacity>
     
      <StatusBar style="auto" />  
    </View>
     </AnimatedSplash>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  logo:{
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  fpbuttons: {
    alignItems: 'center',
    backgroundColor: '#e56e29',
    padding: 5,
    width:'60%'
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
