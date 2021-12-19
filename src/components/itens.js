import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
const Itens = ({foto,nome,key,nota,tipo,distancia,frete,tempo})=> {
  return (
      <View style={styles.Rview} key={key}>
          <Image style={{borderRadius:20}} source={{uri:foto.trim(),width:40,height:40,resizeMode:'cover'}}/>
          <View style={styles.Rinfo}>
              <Text style={{fontSize:16}}>{nome}</Text>
              <Text><AntDesign name='star' size={12} color='#F9A825'/> {nota} - {tipo} - {distancia}</Text>
              <Text>{tempo} * R$ {frete}</Text>
          </View>
      </View>
  );
}
const styles = StyleSheet.create({
    Rview:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ccc',
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#fff',
        minWidth:'90%',
        marginBottom:10,
        padding:15
    },
    Rinfo:{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:20}
})
export default Itens