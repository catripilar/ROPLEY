import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import BTcuston from '../components/BTcuston';
export default function Perfil() {
  return (
    <View style={{flex: 2,alignItems: 'center',justifyContent:'center',paddingTop: 50}}>
      <Text style={{fontSize:22,padding:5}}>Seja Bem Vindo a <Text style={{color:'#4169E1'}}>perfil</Text>!</Text>
    </View>
  );
}