import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator,ScrollView,Dimensions} from 'react-native';
import AppLoading from 'expo-app-loading';
import {AntDesign} from '@expo/vector-icons';
import {useFonts,Anton_400Regular} from '@expo-google-fonts/anton';
import Shoes from '../components/shoes';
import Detalhes from './detalhes';
import * as ScreenOrientation from 'expo-screen-orientation';
export default function Loja({navigation}) {
    const [loaded,setLoaded] = useState(false);
    const [tenis,setTenis] = useState([]);
    useEffect(()=>{
      async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      }
      async function buscaD(){
        try{
          const resposta = await fetch('https://catripilar.github.io/dadosAppR/dados.json');
          const data = await resposta.json();
          setLoaded(true);
          setTenis(data.schuts);
        }catch(e){Alert.alert('Erro ao consultar'+e)}
      }
      buscaD()
      changeScreenOrientation()
    },[])
    let [fontsLoaded]= useFonts({Anton_400Regular});
    if (!fontsLoaded){return <AppLoading/>}
    return (
    <ScrollView>
      <View style={{flex:1,width:'100%',backgroundColor:'#fff'}}>
          <View style={{marginBottom:8}}>
              <Image style={{width:'100%',height:240}} source={require('../assets/banner.png')}/>
              <View style={{flexDirection:'row',marginVertical:'5%',marginHorizontal:'5%'}}>
                <Text style={styles.text}>TÊNIS</Text>
                <Text style={[styles.text,{color:'#CECECF'}]}>*</Text>
                <Text style={[styles.text,{color:'#CECECF'}]}>MASCULINO</Text>
                <TouchableOpacity style={{position:'absolute',right:0,alignSelf:'center'}}>
                    <AntDesign name='filter' size={24} color='#111'/>
                </TouchableOpacity>
              </View>
          </View>
          <View style={{borderBottomColor:'#d8d8d8',borderBottomWidth:2}}>
                <Text style={styles.text}>LANÇAMENTOS</Text>
                <ScrollView style={{margin:20,width:(Dimensions.get('window').width -40)}}>
                    {tenis.map(schuts =>(
                    <Shoes key={schuts.id} foto={schuts.img_url} nome={schuts.nome} texto={schuts.texto} price={schuts.valor} nota={schuts.nota} click={()=>navigation.navigate('Detalhes')}/>
                    ))}
                </ScrollView>
          </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    text:{fontFamily:'Anton_400Regular',fontSize:26,marginHorizontal:'1%'}
})