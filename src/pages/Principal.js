import React,{useState,useEffect} from 'react';
import styled,{css} from 'styled-components';
import {ActivityIndicator,Dimensions} from 'react-native';
import Itens from '../components/itens';
import Categoria from '../components/categoria';
import Banner from '../components/banner';
import * as ScreenOrientation from 'expo-screen-orientation';
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
        const resposta = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');
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
  const ViewHome =(props) =>{
    return(
      <Viewprin showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Selectipo>
          <BTipoTs onPress={()=>setTipo('Entrega')}>
            <TexTipos selected={tipo == 'Entrega'}>Entrega</TexTipos>
          </BTipoTs>
          <BTipoTs onPress={()=>setTipo('Retirar')}>
            <TexTipos selected={tipo == 'Retirar'}>Retirar</TexTipos>
          </BTipoTs>
        </Selectipo>
        <CategoriaView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categorias.map(categoria =>(<Categoria key={categoria.id} foto={categoria.img_url} texto={categoria.nome}/>))}
        </CategoriaView>
        <Bannerview horizontal={true} showsHorizontalScrollIndicator={false}>
          {banners.map(banner =>(<Banner key={banner.id} foto={banner.banner_img_url}/>))}
        </Bannerview>
          <TituloRes>Restaurantes</TituloRes>
          <ViewRes>
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
          </ViewRes>
      </Viewprin>
      )
  }
  return (
    <Savev>
    {loaded?(<ViewHome/>):
    (<ViewC><ActivityIndicator color='#4169E1' size='large'/></ViewC>)
    }
    </Savev>
  );
}
const ViewC = styled.View`flex:2;align-items:center;padding-top:40px;`
const Savev = styled.View`flex: 1;`
const Viewprin = styled.ScrollView`padding:40px 0;flex:1;`
const Selectipo = styled.View`
  flex-direction: row;
  text-align: left;
  margin: 0 20px 10px 20px;
  font-weight: bold;
  width: ${(Dimensions.get('window').width)}px;
`
const BtContan = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px 20px 20px;
`
const CategoriaView = styled.ScrollView`margin-top: 20px;`
const BTipoTs = styled.TouchableOpacity`margin-right:20px;`
const TexTipos = styled.Text`
  font-size: 17px;
  ${props => props.selected?css`font-weight:bold;color:#4169E1;`:css``}
`
const Bannerview = styled.ScrollView`
  margin-top: 20px;
  flex-direction: row;
  width: ${(Dimensions.get('window').width -10)}px;
`
const ViewRes = styled.View`
  padding-bottom: 30px;
  margin: 20px;
  width: ${(Dimensions.get('window').width -40)}px;
`
const TituloRes = styled.Text`
  text-align: left;
  font-size: 18px;
  margin: 20px;
  font-weight: bold;
  width: ${(Dimensions.get('window').width)}px;
`