/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import Bar from '../bar';
import axios from '../../api/axios';

export default class Cadastro extends Component {
  state = {
    valido:false,
    nome: '',
    telefone: '',
    email: '',
    senha: '',

  };
  async signUp() {
    try {
      await axios.post('/user/cadastro', {
        email: this.state.email,
        senha: this.state.senha,
        nome: this.state.nome,
        tell: this.state.telefone,
      });
      this.setState({valido:true});

    } catch (e) {

    }
  }
  render() {
    if (this.state.valido === true) {
      return (
        <>
          <Bar />
          <View>
            <View style={style.ciculo}>
              <Image
                style={style.image}
                source={require('../../image/check.png')}
              />
            </View>
            <Text style={style.textCadastro}>
              Cadastro Realizado com Sucesso!
            </Text>
          </View>
          <View style={style.bottomButton}>
            <Button
              style={style.BotoaCadastro}
              title="login"
              textColor="black"
              color="lightgray"
              onPress={()=>{this.props.navigation.push('Login');}}
            />
          </View>
        </>
      );
    } else {
      return (
        <>
          <Bar />
          <View>
            <View style={style.inputForm}>
              <TextInput
                placeholder="Nome"
                style={style.inputLogin}
                placeholderTextColor="black"
                value={this.state.nome}
                onChangeText={nome => this.setState({ nome })}
              />
              <TextInput
                placeholder="telefone"
                style={style.inputLogin}
                keyboardType="numeric"
                placeholderTextColor="black"
                value={this.state.telefone}
                onChangeText={telefone => this.setState({ telefone })}
              />
              <TextInput
                placeholder="Email"
                style={style.inputLogin}
                placeholderTextColor="black"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                style={style.inputLogin}
                placeholderTextColor="black"
                value={this.state.senha}
                onChangeText={senha => this.setState({ senha })}
              />
            </View>
            <View style={style.bottomButton}>
              <Button
                style={style.BotoaCadastro}
                title="Cadastar"
                textColor="black"
                color="lightgray"
                onPress={()=>{this.signUp();}}
              />
            </View>
          </View>
        </>
      );
    }
  }
};

const style = StyleSheet.create({
  image: {
    width: 157,
    height: 157,
  },
  ciculo: {
    position: 'absolute',
    width: 157,
    height: 157,
    left: 121,
    top: 242,
    borderRadius: 100,
  },
  textCadastro: {
    position: 'absolute',
    width: 321,
    height: 24,
    left: 45,
    top: 429,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
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
  inputForm: {
    position: 'absolute',
    width: 314,
    height: 30,
    left: 45,
    top: 220,
  },
});
