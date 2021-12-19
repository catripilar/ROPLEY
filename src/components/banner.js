import React from 'react';
import {Image,View} from 'react-native';
import {Dimensions} from 'react-native';
const Banner = ({foto,key})=> {
  return (
      <View style={{marginLeft:20,marginRight:10,alignItems:'center'}} key={key}>
          <Image style={{borderRadius:10}} source={{
              uri:foto.trim(),
              width:((Dimensions.get('window').width)-50),
              height:180,
              resizeMode:'contain'
            }}
          />
      </View>
  );
}
export default Banner