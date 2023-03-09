import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, SafeAreaView, TextInput } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {

    this.state = {
        username: '',
        password: '',
      };

   const { username, password } = this.state;   
 
   return (
    <SafeAreaView style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
 
      <Separator/>
      <TouchableOpacity
        style={styles.fpbuttons}
        onPress={() => Alert.alert('Login pressed')}>
          <Text style={styles.fpbuttontext}>Login</Text>
        </TouchableOpacity>
     
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: '#FDFCFC',
      },
      fpbuttons: {
        alignItems: 'center',
        backgroundColor: '#e56e29',
        padding: 10,
        width:200
      }, 
      fpbuttontext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      container: {
        flex: 1,
        backgroundColor: '#A2A8A3',
        alignItems: 'center',
        justifyContent: 'center',
      }, 
});
