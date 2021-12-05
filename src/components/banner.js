import React from 'react';
import {StyleSheet,View,Image,Dimensions} from 'react-native';
const Banner = ({foto,key})=> {
  return (
      <View style={styles.Bview} key={key}>
          <Image style={styles.Bfoto} 
          source={{
              uri:foto.trim(),
              width:((Dimensions.get('window').width)-50),
              height:180,
              resizeMode:'contain'
            }}
          />
      </View>
  );
}
const styles = StyleSheet.create({
    Bview:{marginLeft:20,marginRight:10,alignItems:'center'},
    Bfoto:{borderRadius:10}
  });
export default Banner