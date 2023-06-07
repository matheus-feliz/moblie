/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/home/home';
import Login from '../components/cadastroElogin/login';
import Cadastro from '../components/cadastroElogin/cadastro';
import HomeServico from '../components/servico/homeServico';
import ListaDeServico from '../components/servico/listaDeServico';
import Usuario from '../components/servico/usuario';
import PostFormServico from '../components/servico/postFormServico';
import ListaDeEndereco from '../components/servico/listaEndereco';

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="HomeServico" component={HomeServico} />
                <Stack.Screen name="ListaDeServico" component={ListaDeServico} />
                <Stack.Screen name="ListaDeEndereco" component={ListaDeEndereco} />
                <Stack.Screen name="Usuario" component={Usuario} />
                <Stack.Screen name="PostFormServico" component={PostFormServico} />
            </Stack.Navigator>
        </>
    );
};

