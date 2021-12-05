import React from 'react';
import styled,{css} from 'styled-components';
const BTcuston = ({theme,title,onPress})=> {
  return (
      <Bpos>
        <Botao theme={theme|| ''} onPress={()=>onPress?.()}>
          <Btexto theme={theme|| ''}>{title}</Btexto>
        </Botao>
      </Bpos>
  );
}
const Bpos = styled.View`padding:15px;`
const Btexto = styled.Text`
  color: #4169E1;text-transform:uppercase;
  ${({theme})=> theme == 'primario' && css`color: #fff;`}
`
const Botao = styled.TouchableOpacity`
  border: 1px solid #4169E1;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({theme})=> theme == 'primario' && css`background: #4169E1;`}
`
export default BTcuston