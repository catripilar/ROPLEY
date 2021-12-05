import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
const BTcuston = ({bpo1,bot1,tes1,title,onPress})=> {
  return (
      <View style={[styles.Bpos,bpo1]}>
        <TouchableOpacity style={[styles.Botao,bot1]} onPress={()=>onPress?.()}>
          <Text style={[styles.Btexto,tes1]}>{title}</Text>
        </TouchableOpacity>
      </View>
  );
}
const styles = StyleSheet.create({
  Bpos:{padding:15},
  Botao:{
    borderRadius:20,
    padding:20,
    backgroundColor:'#4169E1',
    justifyContent:'center',
    alignItems:'center'
  },
  Btexto:{color:'#fff',textTransform:'uppercase'}
});
export default BTcuston