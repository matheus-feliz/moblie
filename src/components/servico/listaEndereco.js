/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Bar from '../bar';
import NavBarMenu from '../navBarMenu';

export default class ListaDeEndereco extends Component {
    render(){
        return (
            <>
                <Bar />
                <NavBarMenu />
                <View>
                <Text style={style.textCadastro}>
                        Escolha o endereço
                    </Text>
                </View>
                <View style={style.ajust}>
                   <TouchableOpacity onPress={()=>{this.props.navigation.push('PostFormServico')}}>
                        <View style={style.ciculo}>
                            <View style={style.fundoText}>
                                <Text style={style.textFundo}>Posto 1</Text>
                            </View>
                            <View style={style.textFundo2}>
                                <Text style={style.tamanho}> Rua: Av. Juraci Magalhães</Text>
                                <Text style={style.tamanho}> N°: 37</Text>
                                <Text style={style.tamanho}>Bairro: Boa vista</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.navigation.push('PostFormServico');}} >
                        <View style={style.ciculo}>
                            <View style={style.fundoText}>
                                <Text style={style.textFundo}>Posto 2</Text>
                            </View>
                            <View style={style.textFundo2}>
                                <Text style={style.tamanho}> Rua: Francisco Soares</Text>
                                <Text style={style.tamanho}> N°: 110</Text>
                                <Text style={style.tamanho}> Bairro: Urbis</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                   </View>
            </>
        );
    }
}

const style = StyleSheet.create({
    tamanho:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 24,
        color: 'black',
    },
    ajust:{
        marginTop:'10%',
        marginLeft:'13%',
        justifyContent:'space-between',
        height:200,
    },
    fundoText: {
        position: 'absolute',
        width: 240,
        height: 31.37,
        left: '10%',
        top: '10%',
        backgroundColor: 'lightgreen',
        borderRadius: 5,
        alignItems:'center',
    },
    textFundo: {
        position: 'absolute',
        width: 73,
        height: 25,
        top:'5%',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 24,
        color:'#ffffff',
    },
    textFundo2: {
        top:60,
        left:30,
    },
    ciculo: {
        position: 'absolute',
        width: 300,
        height: 160,
        borderColor: 'lightgreen',
        borderWidth: 3,
        borderRadius: 15,
    },
    textCadastro: {
        height:30,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 25,
        color: '#000000',
        left:'25%',
        },
});
