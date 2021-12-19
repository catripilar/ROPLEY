import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import SizeB from '../components/sizeB';
import Opcor from '../components/cores';
import Shoes from '../components/shoes';
import { AntDesign } from '@expo/vector-icons';
import BTcuston from '../components/BTcuston';
import * as ScreenOrientation from 'expo-screen-orientation';
export default function Detalhes({ navigation }) {
  const [tenis, setTenis] = useState([]);
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
    async function buscaD() {
      try {
        const resposta = await fetch('https://catripilar.github.io/dadosAppR/dados.json');
        const data = await resposta.json();
        setTenis(data.schuts);
      } catch (e) { Alert.alert('Erro ao consultar' + e) }
    }
    buscaD()
    changeScreenOrientation()
  }, [])
  return (
    <ScrollView style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
      <View style={styles.Rview}>
        <TouchableOpacity style={{position:'absolute',left:0,alignSelf:'center'}} onPress={()=>navigation.navigate('Main')}>
            <AntDesign name='arrowleft' size={30} color='#111'/>
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Anton_400Regular', paddingHorizontal: '2%', fontSize: 30 }}>Tênis Nike Joyride Run Flyknit</Text>
        <Image style={{ resizeMode: 'cover', width: 300, height: 300 }} source={require('../assets/1.png')} />
        <View>
          <Text style={{ fontFamily: 'Anton_400Regular', paddingHorizontal: '2%', fontSize: 24 }}>R$ 269,90</Text>
          <View style={{ flexDirection: 'row', marginVertical: '7%' }}>
            <Opcor cor={'#2379f4'} />
            <Opcor cor={'#fb6e53'} />
            <Opcor cor={'#ddd'} />
            <Opcor cor={'#000'} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: '7%' }}>
            <SizeB bgcor={'#17181a'} cor={'#fff'} numero={'36'} />
            <SizeB bgcor={'#234245'} cor={'#fff'} numero={'39'} />
            <SizeB bgcor={'#2379f4'} cor={'#fff'} numero={'40'} />
            <SizeB bgcor={'red'} cor={'#fff'} numero={'42'} />
        </View>
          <BTcuston title='COMPRAR' BotaoC={styles.BTS2} Btexto={styles.BTC2} />
        <View style={styles.TextCon}>
          <Text style={styles.textTitle}>Tênis Nike Joyride Run Flyknit</Text>
          <Text style={styles.TextCon}>O Nike Joyride Run Flyknit foi projetado para facilitar a corrida e dar um dia de descanso às suas pernas.</Text>
          <Text style={styles.textList}><AntDesign name='star' size={22} color='#F9A825' />4.3</Text>
          <Text style={styles.textList}>Tipo: <Text style={{color:'blue'}}>Esportivo</Text></Text>
        </View>
      </View>
      <Text style={styles.TextTT}>Você também pode gostar</Text>
      <View style={{ flexDirection: 'row' }}>
        <ScrollView style={{ marginTop: 20 }} horizontal={true}>
          {tenis.map(schuts => (<Shoes key={schuts.id} foto={schuts.img_url} nome={schuts.nome} texto={schuts.texto} price={schuts.valor} nota={schuts.nota} click={() => navigation.navigate('Detalhes')} />))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  BTC2: { color: '#fff' }, BTS2: { backgroundColor: '#000', borderColor: '#000' },
  textList: { fontSize: 16, lineHeight: 25 },
  textTitle: { fontSize: 22, marginVertical: '2%' },
  TextCon: {
    fontSize: 16,
    lineHeight: 25,
    marginHorizontal: '2%',
    marginVertical: '2%'
  },
  TextTT: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginHorizontal: '2%',
    marginVertical: '2%',
    textTransform: 'uppercase'
  },
  Rview: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 10
  }
})