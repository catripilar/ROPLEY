import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
const BTcuston = ({BotaoC,Btexto,title,onPress})=> {
  return (
      <View style={{padding:15}}>
        <TouchableOpacity style={[styles.Botao,BotaoC]} onPress={()=>onPress?.()}>
          <Text style={[{color:'#4169E1',textTransform:'uppercase'},Btexto]}>{title}</Text>
        </TouchableOpacity>
      </View>
  );
}
const styles = StyleSheet.create({
  Botao:{
    borderColor:'#4169E1',
    borderStyle:'solid',
    borderWidth:1,
    borderRadius:20,
    padding:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})
export default BTcuston