import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
export default function SizeB({bgcor,cor,numero}) {
  return (
  <View style={[styled.container,{backgroundColor:bgcor || '#fff'}]}>
      <Text style={[styled.text],{color:cor || '#ccc'}}>{numero}</Text>
  </View>
  );
}
const styled = StyleSheet.create({
    container:{
        width: 70,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ccc',
        borderWidth:3,
        borderStyle:'solid',
        borderRadius:5,
        marginHorizontal:5,
    },
    text:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
        textAlignVertical:'center'
    }
})