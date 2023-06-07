/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Bar from '../bar';
import NavBarMenu from '../navBarMenu';

export default () => {
    return (
        <>
            <Bar />
            <NavBarMenu />
            <View style={style.mainV}>
            <Text style={style.textCadastro}>
                    agenda
                </Text>
            </View>
            <View style={style.ajust}>
                    <TouchableOpacity>
                    <View style={style.ciculo}>
                        <View style={style.fundoText}>
                            <Text style={style.textFundo}> bilu</Text>
                        </View>
                        <View style={style.textFundo2}>
                            <Text style={style.tamanho}> Rua: Av. Juraci Magalhães</Text>
                            <Text style={style.tamanho}> N°: 37</Text>
                            <Text style={style.tamanho}>Bairro: Boa vista</Text>
                            <Text style={style.tamanho}>tipo: consulta</Text>
                            <Text style={style.tamanho}>data: 22/06/2023</Text>
                            <Text style={style.tamanho}>hora: 15:00</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={style.ciculo}>
                        <View style={style.fundoText}>
                            <Text style={style.textFundo}>auau</Text>
                        </View>
                        <View style={style.textFundo2}>
                            <Text style={style.tamanho}> Rua: Francisco Soares</Text>
                            <Text style={style.tamanho}> N°: 110</Text>
                            <Text style={style.tamanho}> Bairro: Urbis</Text>
                            <Text style={style.tamanho}>tipo: castração</Text>
                            <Text style={style.tamanho}>data: 23/06/2023</Text>
                            <Text style={style.tamanho}>hora: 15:00</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
               </View>
        </>
    );
};

const style = StyleSheet.create({
    mainV:{
        zIndex:2,
    },
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
        height:250,
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
        height: 250,
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
