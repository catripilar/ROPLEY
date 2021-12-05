import React from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
const Banner = ({foto,key})=> {
  return (
      <Bview key={key}>
          <Bfoto source={{
              uri:foto.trim(),
              width:((Dimensions.get('window').width)-50),
              height:180,
              resizeMode:'contain'
            }}
          />
      </Bview>
  );
}
const Bview = styled.View`margin-left:20px;margin-right:10px;align-items:center;`
const Bfoto = styled.Image`border-radius:10px;`
export default Banner