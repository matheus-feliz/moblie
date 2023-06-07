/* eslint-disable prettier/prettier */
import React,{Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Bar from '../bar';
import axios from '../../api/axios';

export default class Login extends Component {

  state = {
      email: '',
      senha: '',

  };
  async signIn() {
    try {
      await axios.post('/user/login', {
        email: this.state.email,
        senha: this.state.senha,
      });
      //axios.defaults.headers.common[ 'Authorization' ] = `bearer${response.data.token}`;
      this.props.navigation.push('ListaDeServico');
    } catch (e){
      console.warn(e);
    }
  }
  render() {
    return (
      <>
        <Bar />
        <View style={style.Home}>
          <Text style={style.Texto}>
            Bem vindo(a) ou Petsu um app para facilitar a sua vida e a do seu
            bichinho. Cadastre-se ou faça o seu login!
          </Text>
        </View>
        <View style={style.inputForm}>
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
          <Button style={style.BotoaLogin} title="Logar" color="lightgray" onPress={() => {this.signIn();}} />
          <Button style={style.BotoaCadastro} title="Cadastar" color="lightgray" onPress={() => this.props.navigation.push('Cadastro')} />
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  Home: {
    position: 'absolute',
    width: 304,
    height: 61,
    left: 27,
    top: 86,
    background: 'mediumslateblue',
    borderRadius: 10,
  },
  Texto: {
    position: 'absolute',
    width: 290,
    height: 51,
    left: 32,
    top: 90,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
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
    top: 320,
  },
});
