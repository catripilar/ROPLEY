import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
const Categoria = ({foto,texto,key})=> {
  return (
      <View style={styles.Cview} key={key}>
          <Image style={styles.Cfoto} source={{uri:foto.trim(),width:100,height:60,}}/>
          <Text style={styles.Ctexto}><AntDesign name='caretright' size={12} color='#FF6347'/>{texto}</Text>
      </View>
  );
}
const styles = StyleSheet.create({
    Cview:{marginLeft:20,alignItems:'center'},
    Ctexto:{marginTop:5},
    Cfoto:{borderRadius:10}
  });
export default Categoria