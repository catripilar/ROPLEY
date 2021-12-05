import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
const Itens = ({foto,nome,key,nota,tipo,distancia,frete,tempo})=> {
  return (
      <View style={styles.Rview} key={key}>
          <Image style={styles.Rfoto} source={{uri:foto.trim(),width:40,height:40,resizeMode:'cover'}}/>
          <View style={styles.Rinfo}>
              <Text style={{fontSize:16}}>{nome}</Text>
              <Text><AntDesign name='star' size={12} color='#F9A825'/> {nota} - {tipo} - {distancia}</Text>
              <Text>{tempo} * R$ {frete}</Text>
              <Text></Text>
          </View>
      </View>
  );
}
const styles = StyleSheet.create({
    Rview:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#fff',
        minWidth:'90%',
        marginBottom:10,
        padding:20,
        borderWidth:1,
        borderColor:'#C4C4C4',
        borderStyle:'solid'
    },
    Rinfo:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:10,
    },
    Rfoto:{borderRadius:20}
  });
export default Itens