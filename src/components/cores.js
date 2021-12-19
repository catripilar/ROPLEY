import React from 'react';
import {StyleSheet,View,Dimensions} from 'react-native';
export default function Opcor({cor}) {
  return (<View style={[styled.container,{backgroundColor:cor}]}/>);
}
const styled = StyleSheet.create({
    container:{
        width: (Dimensions.get('window').width *0.05),
        height: (Dimensions.get('window').width *0.05),
        borderRadius:(Dimensions.get('window').width *0.05/2),
        marginHorizontal:'1%'
    }
})