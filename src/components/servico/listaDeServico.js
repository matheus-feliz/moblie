/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Bar from '../bar';
import NavBarMenu from '../navBarMenu';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navegacao = useNavigation();
  return (
    <>
      <Bar />
      <NavBarMenu/>
      <View>
        <Text style={style.textCadastro}>
          Marcar Atendimento
        </Text>
        <TouchableOpacity style={style.ciculo} onPress={()=>{navegacao.push('ListaDeEndereco');}}>
          <Image
            style={style.image}
            source={require('../../image/mais.png')} />
        </TouchableOpacity>
      </View>
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

  image: {
    width: 130,
    height: 130,
  },
  ciculo: {
    position: 'absolute',
    width: 85,
    height: 85,
    left: '40%',
    top: 139,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCadastro: {
    position: 'absolute',
    width: 400,
    height: 35,
    left: '25%',
    top: 80,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 25,
    lineHeight: 24,
    color: '#000000',
  },
  bar: {
    position: 'absolute',
    width: 400,
    height: 57,
    left: 0,
    top: 0,
    backgroundColor: 'lightgreen',
    textAlign: 'center',
  },
  BotoaCadastro: {
    position: 'absolute',
    width: 50,
    height: 24,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: 'black',
  },
  bottomButton: {
    marginTop: 480,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputLogin: {
    width: 314,
    height: 36,
    marginBottom: 15,
    backgroundColor: 'lightgray',
  },
});
