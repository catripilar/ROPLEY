import React from 'react';
import {Image, Text, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
const Categoria = ({foto,texto,key})=> {
  return (
      <View style={{marginLeft:20,alignItems:'center'}} key={key}>
          <Image style={{borderRadius:10}} source={{uri:foto.trim(),width:100,height:60,}}/>
          <Text style={{marginTop:5}}><AntDesign name='caretright' size={12} color='#FF6347'/>{texto}</Text>
      </View>
  )}
export default Categoria