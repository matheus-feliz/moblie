/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { useNavigation } from '@react-navigation/native';


export default class Home extends Component {
  //const navegacao = useNavigation();
  login() {
    console.warn('passou na rota para o login');
    //navegacao.push('Login');
  }
  render() {
    return (
      <>
        <View style={style.bar}>
          <Text style={style.textBar}>PetSu</Text>
        </View>
        <View style={style.Home}>
          <Text style={style.Texto}>
            Bem-vindo(a) ao Petsu! É com imensa alegria que lhe damos as boas-vindas
            ao nosso aplicativo dedicado a facilitar o agendamento de consultas e
            procedimentos veterinários para seus amados animais de estimação.
            Através do Petsu, você terá a praticidade de agendar consultas e
            procedimentos veterinários de forma rápida e descomplicada. Agradecemos
            por escolher o Petsu como seu parceiro na jornada de cuidado com seus
            animais de estimação. Estamos aqui para ajudar e fazer a diferença na
            vida dos nossos amiguinhos de quatro patas. Juntos, podemos proporcionar
            uma vida mais saudável e feliz para eles. Seja bem-vindo(a) ao Petsu,
            onde a saúde e o bem-estar dos animais estão em primeiro lugar!
          </Text>
        </View>
        <View style={style.bottomButton}>
          <Button style={style.BotoaLogin} title="Entrar" color="lightgray" onPress={()=>{this.props.navigation.push('Login');}} />
          <Button
          style={style.BotoaCadastro}
          title="Cadastar-se"
          color="lightgray"
          onPress={()=>{this.props.navigation.push('Cadastro');}}
        />
        </View>
      </>
    );
  }


}

const style = StyleSheet.create({
  bar: {
    position: 'absolute',
    width: 400,
    height: 57,
    left: 0,
    top: 0,
    backgroundColor: 'lightgreen',
    textAlign: 'center',
  },
  textBar: {
    position: 'absolute',
    left: 150,
    width: 150,
    height: 46,
    top: 7,
    fontFamily: 'Cuprum',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 46,
    color: 'white',
  },
  Home: {
    position: 'absolute',
    width: 337,
    height: 402,
    left: 25,
    top: 62,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    textAlign: 'center',
  },
  Texto: {
    position: 'absolute',
    width: 319,
    height: 401.11,
    left: 12,
    top: 62.89,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: 'black',
  },
  BotoaLogin: {
    width: 50,
    height: 34,
    background: 'lightgray',
    borderRadius: 5,
    marginRight: 50,
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
});
