import React,{useEffect} from 'react';
import {Platform,StyleSheet, Text, View,Image} from 'react-native';
import BTcuston from '../components/BTcuston';
import * as ScreenOrientation from 'expo-screen-orientation';
export default function Home({navigation}) {
  useEffect(()=>{
    if (Platform.OS === 'ios' || Platform.OS === 'android'){
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }changeScreenOrientation()
  }},[])
  return (
    <View style={styles.Conteudo}>
      <Text style={styles.Titulo}>Seja Bem Vindo a <Text style={{color:'#4169E1'}}>ROPLEY</Text>!</Text>
      <Image style={styles.Imagem} source={require('../assets/dronentrega.png')}/>
      <Text style={styles.Texto}>Sua entrega nunca chegou tão 𝙍𝙖́𝙥𝙞𝙙𝙤</Text>
      <View style={styles.Botoes}>
        <BTcuston onPress={()=>navigation.navigate('Main')} title='Pular'/>
        <BTcuston onPress={()=>navigation.navigate('Perfil')} title='Continuar' BotaoC={styles.BTS2} Btexto={styles.BTC2}/>
      </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
  BTC2:{color:'#fff'},BTS2:{backgroundColor:'#4169E1'},
  Conteudo:{flex:2,alignItems:'center',justifyContent:'center',paddingTop:30},
  Texto:{fontSize:18,padding:5},
  Titulo:{fontSize:22,padding:5},
  Imagem:{width:250,height:240,margin:20},
  Botoes:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 10
  }
})