import React,{useState,useEffect} from 'react';
import styled,{css} from 'styled-components';
import {Platform,StyleSheet, Text, View,Image,ActivityIndicator,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import Itens from '../components/itens';
import Categoria from '../components/categoria';
import Banner from '../components/banner';
import * as ScreenOrientation from 'expo-screen-orientation';
import dados from './dados.json'
ScreenOrientation.unlockAsync()
export default function Home() {
  const [banners,setBanner] = useState([]);
  const [categorias,setCategorias] = useState([]);
  const [restaurantes,setrestaurantes] = useState([]);
  const [loaded,setLoaded] = useState(false);
  const [tipo,setTipo] = useState('Entrega');
  useEffect(()=>{
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
    async function buscaD(){
      try{
        const resposta = await fetch('https://catripilar.github.io/dadosAppR/dados.json');
        const data = await resposta.json();
        setLoaded(true);
        setBanner(data.banner_principal);
        setCategorias(data.categorias);
        setrestaurantes(data.restaurantes);
      }catch(e){Alert.alert('Erro ao consultar'+e)}
    }
    buscaD()
    changeScreenOrientation()
  },[])
  const ViewHome =()=>{
    return(
      <View style={{paddingTop:40}}>
        <View style={styles.Selectipo}>
          <TouchableOpacity style={{marginRight:20}} onPress={()=>setTipo('Entrega')}>
            <Text style={styles.TexTipos} selected={tipo == 'Entrega'}>Entrega</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight:20}} onPress={()=>setTipo('Retirar')}>
            <Text style={styles.TexTipos} selected={tipo == 'Retirar'}>Retirar</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{marginTop:20}} horizontal={true} showsHorizontalScrollIndicator={false}>
          {categorias.map(categoria =>(<Categoria key={categoria.id} foto={categoria.img_url} texto={categoria.nome}/>))}
        </ScrollView>
        <ScrollView style={styles.Bannerview} horizontal={true} showsHorizontalScrollIndicator={false}>
          {banners.map(banner =>(<Banner key={banner.id} foto={banner.banner_img_url}/>))}
        </ScrollView>
          <Text style={styles.TituloRes}>Restaurantes</Text>
          <View style={styles.ViewRes}>
            {restaurantes.map(
              restaurante =>(<><Itens
              key = {restaurante.id}
              nome = {restaurante.nome}
              nota = {restaurante.nota}
              tipo = {restaurante.categoria}
              distancia = {restaurante.distancia}
              frete = {restaurante.valor_frete}
              tempo = {restaurante.tempo_entrega}
              foto = {restaurante.url_img}
              /></>))}
          </View>
      </View>
      )
  }
  return (
    <ScrollView >
    {loaded?(<ViewHome/>):
    (<View style={{paddingTop:40}}><ActivityIndicator color='#4169E1' size='large'/></View>)
    }
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Selectipo:{
    flexDirection:'row',
    textAlign:'left',
    fontWeight:'bold',
    marginLeft:20,
    marginRight:20,
    width:(Dimensions.get('window').width)
  },
  BtContan:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20
  },
  BTipoTs:{marginRight:20},
  Bannerview:{marginTop:20,flexDirection:'row',width:(Dimensions.get('window').width -10)},
  ViewRes:{paddingBottom:30,margin:20,width:(Dimensions.get('window').width -40)},
  TituloRes:{textAlign:'left',fontSize:18,margin:20,fontWeight:'bold',width:(Dimensions.get('window').width)},
  TexTipos:{fontSize:17,color:'#4169E1',fontWeight:'bold'}
})