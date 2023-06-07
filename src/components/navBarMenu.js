/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';


export default () => {
  const navegacao = useNavigation();
  return (
    <>
      <View style={style.navBar} >
        <TouchableOpacity onPress={()=>{navegacao.push('HomeServico')}}>
          <Image
            styles={style.imageIcon}
            source={require('../image/menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navegacao.push('ListaDeServico')}>
          <Image
            styles={style.imageIcon}
            source={require('../image/casa.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navegacao.push('Usuario')}>
          <Image
            styles={style.imageIcon}
            source={require('../image/homemUsuario16.png')} />
        </TouchableOpacity>
      </View>
      <View style={style.eclipes} />
    </>
  );
};

const style = StyleSheet.create({
  imageIcon: {
    width: 10,
    height: 10,
  },
  navBar: {
    width: '100%',
    height: 50,
    left: 0,
    top: '181%',
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  eclipes: {
    zIndex:-1,
    borderRadius: 100,
    height: 60,
    width: 60,
    top: '170%',
    left: '10.7%',
    backgroundColor: 'lightgreen',
  },
});
