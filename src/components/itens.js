import React from 'react';
import styled from 'styled-components';
import {AntDesign} from '@expo/vector-icons';
const Itens = ({foto,nome,key,nota,tipo,distancia,frete,tempo})=> {
  return (
      <Rview key={key}>
          <Rfoto source={{uri:foto.trim(),width:40,height:40,resizeMode:'cover'}}/>
          <Rinfo>
              <Text style={{fontSize:16}}>{nome}</Text>
              <Text><AntDesign name='star' size={12} color='#F9A825'/> {nota} - {tipo} - {distancia}</Text>
              <Text>{tempo} * R$ {frete}</Text>
          </Rinfo>
      </Rview>
  );
}
const Text = styled.Text``
const Rfoto = styled.Image`border-radius:20px;`
const Rview = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: #fff;
    min-width: 90%;
    margin-bottom: 10px;
    padding: 15px;
`
const Rinfo = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`
export default Itens