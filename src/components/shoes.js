import React from 'react';
import {StyleSheet, Text, View,Image,TouchableOpacity,Dimensions} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
export default function Shoes({foto,nome,texto,key,price,nota,click}) {
    function filtro(desc){if(desc.length < 33){return desc};return `${desc.substring(0,28)}...`}
  return (
        <TouchableOpacity style={styles.Rview} key={key} onPress={click}>
            <Image style={{borderRadius:50}} source={{uri:foto.trim(),width:200,height:200,resizeMode:'cover'}}/>
                <Text style={{fontSize:22}}>{filtro(nome)} - <AntDesign name='star' size={22} color='#F9A825'/>{nota}</Text>
                <Text>{filtro(texto)}</Text>
                <Text style={{fontSize:22,color:'#0f0',opacity:0.7}}>{price}</Text>
        </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    Rview:{
        alignItems:'center',
        marginTop:20,
        textAlign:'center',
        borderColor:'#ccc',
        borderStyle:'solid',
        borderWidth:1,
        marginLeft:10,
        marginRight:10,
        borderRadius:50,
        padding:10
    }
})