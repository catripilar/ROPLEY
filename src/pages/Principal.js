import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View,Image,Alert,ActivityIndicator,SafeAreaView,ScrollView,Dimensions} from 'react-native';
import Itens from '../components/itens';
import Categoria from '../components/categoria';
import Banner from '../components/banner';
import {AntDesign} from '@expo/vector-icons';
export default function Home() {
  const [banners,setBanner] = useState([]);
  const [categorias,setCategorias] = useState([]);
  const [restaurantes,setrestaurantes] = useState([]);
  const [loaded,setLoaded] = useState(false);
  const [tipo,setTipo] = useState('Entrega');
  useEffect(()=>{
    async function buscaD(){
      try{
        const resposta = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');
        const data = await resposta.json();
        setLoaded(true);
        setBanner(data.banner_principal);
        setCategorias(data.categorias);
        setrestaurantes(data.restaurantes);
      }catch(e){Alert.alert('Erro ao consultar'+e)}
    }
    buscaD()
  },[])
  const ViewHome =(props) =>{
    return(
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.Selectipo}>
          <View style={{paddingLeft:20}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#4169E1'}} 
            onPress={()=>alert('Em construção')}><AntDesign name='upcircle' size={15} color='#4682B4'/>Entrega</Text>
          </View>
          <View style={{paddingLeft:20}}>
          <Text style={{fontSize:18,fontWeight:'bold',color:'#66CDAA'}} 
          onPress={()=>alert('Em construção')}><AntDesign name='downcircle' size={15} color='#5F9EA0'/>Retirar</Text>
          </View>
        </View>
        <ScrollView style={{marginTop:20}} horizontal={true} showsHorizontalScrollIndicator={false}>
          {categorias.map(categoria =>(<Categoria key={categoria.id} foto={categoria.img_url} texto={categoria.nome}/>))}
        </ScrollView>
        <ScrollView style={styles.bannerview} horizontal={true} showsHorizontalScrollIndicator={false}>
          {banners.map(banner =>(<Banner key={banner.id} foto={banner.banner_img_url}/>))}
        </ScrollView>
        <View>
          <Text style={styles.TitulosR}>Restaurantes</Text>
          <View style={styles.Viewrestaurante}>
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
      </ScrollView>
      )
  }
  return (
    <SafeAreaView>
      {
      loaded?(<ViewHome/>):
      (<View>
        <ActivityIndicator color='#4169E1' size='large'/>
      </View>)
    }
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaView:{flex:1,alignItems:'center',paddingTop:40},
  ViewActive: {flex: 1,alignItems: 'center',justifyContent:'center',paddingTop: 40},
  View:{flex:2,alignItems:'center',paddingTop:40},
  Viewprin:{flex:1,paddingTop:40,paddingBottom:20},
  Selectipo:{
    flexDirection:'row',
    textAlign:'left',
    margin:20,
    fontWeight:'bold',
    width:(Dimensions.get('window').width)
  },
  bannerview:{
    marginTop:10,
    marginBottom:10,
    flexDirection:'row',
    width:((Dimensions.get('window').width)-10)
  },
  Viewrestaurante:{
    justifyContent:'center',
    margin:20,
    width:((Dimensions.get('window').width)-50)
  },
  TitulosR:{
    textAlign:'left',
    marginTop:20,
    marginLeft:10,
    fontWeight:'bold',
    fontSize:18,
    width:(Dimensions.get('window').width)
  }
});