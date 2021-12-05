import React from 'react';
import styled from 'styled-components';
import {AntDesign} from '@expo/vector-icons';
const Categoria = ({foto,texto,key})=> {
  return (
      <Cview key={key}>
          <Cfoto source={{uri:foto.trim(),width:100,height:60,}}/>
          <Ctexto><AntDesign name='caretright' size={12} color='#FF6347'/>{texto}</Ctexto>
      </Cview>
  );
}
const Cview = styled.View`margin-left: 20px;align-items:center;`
const Ctexto = styled.Text`margin-top:5px;`
const Cfoto = styled.Image`border-radius:10px;`
export default Categoria