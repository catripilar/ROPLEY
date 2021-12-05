import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import BTcuston from '../components/BTcuston';
import Banner from '../imgs/dronentrega.png'
export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Seja Bem Vindo a <Text style={styles.BT2}>perfil</Text>!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 2,alignItems: 'center',justifyContent:'center',paddingTop: 50},
  Text:{fontSize:18,padding:5},
  Titulo:{fontSize:22,padding:5},
  Image:{width:250,height:240,margin:20},
  Bttcontener:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'90%',
    padding:10
  },
  BC2:{backgroundColor:'#fff',borderColor:'#4169E1',borderWidth:1,borderStyle:'solid'},
  BT2:{color:'#4169E1'}
});