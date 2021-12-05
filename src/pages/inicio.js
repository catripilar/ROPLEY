import React,{useEffect} from 'react';
import styled from 'styled-components';
import BTcuston from '../components/BTcuston';
import Banner from '../imgs/dronentrega.png';
import * as ScreenOrientation from 'expo-screen-orientation';
export default function Home({navigation}) {
  useEffect(()=>{
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
    changeScreenOrientation()
  },[])
  return (
    <Conteudo>
      <Titulo>Seja Bem Vindo a <Titulo style={{color:'#4169E1'}}>ROPLEY</Titulo>!</Titulo>
      <Imagem source={Banner}/>
      <Texto>Sua entrega nunca chegou tão 𝙍𝙖́𝙥𝙞𝙙𝙤</Texto>
      <Botoes>
        <BTcuston onPress={()=>navigation.navigate('Main')} title='Pular'/>
        <BTcuston onPress={()=>navigation.navigate('Perfil')} title='Continuar' theme='primario'/>
      </Botoes>
    </Conteudo>
    
  );
}

const Conteudo = styled.View`
  flex: 2;align-items:center;justify-content:center;padding-top:30px;
`
const Texto = styled.Text`font-size:18px;padding:5px;`
const Titulo = styled.Text`font-size:22px;padding:5px;`
const Imagem = styled.Image`width:250px;height:240px;margin:20px;`
const Botoes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 10px;
`