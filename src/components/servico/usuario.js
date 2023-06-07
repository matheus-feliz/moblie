/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default () => {
    return (
        <>
            <LinearGradient colors={['#68e8b2', '#48d767', '#cfAf3B']} style={styles.linearGradient}>
                <Text style={styles.nameUser}>brad1</Text>
                <Text style={styles.contatoUser}>Contato: 77 4002-8922</Text>
                <View style={styles.perfil}>
                    <Image
                        styles={styles.imagePerfil}
                        source={require('../../image/homemUsuario.png')}
                    />
                </View>
            </LinearGradient>
            <View style={styles.navBar} >
                <TouchableOpacity>
                    <Image
                    styles={styles.imageIcon}
                    source={require('../../image/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image
                    styles={styles.imageIcon}
                    source={require('../../image/casa.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    styles={styles.imageIcon}
                    source={require('../../image/homemUsuario16.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.eclipes}/>
        </>
    );
};

const styles = StyleSheet.create({
    nameUser: {
        position: 'absolute',
        width: 188,
        height: 37,
        left: 18,
        top: 160,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 32,
        lineHeight: 39,
        color: '#ffffff',
    },
    contatoUser: {
        position: 'absolute',
        width: 271,
        height: 30,
        left: 18,
        top: 216,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 29,
        color: '#ffffff',
    },
    linearGradient: {
        position: 'absolute',
        width: '100%',
        height: 270.33,
        top: 0,
    },
    perfil: {
        position: 'absolute',
        width: 153,
        height: 151,
        left: 199,
        top: 10,
        borderWidth: 3,
        borderColor: '#ffffff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    imagePerfil: {
        width: 150,
        height: 150,
    },
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
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
    },
    eclipes:{
        zIndex:-1,
        borderRadius: 100,
        height: 60,
        width:60,
        top:'585%',
        left:'74%',
        backgroundColor: 'lightgreen',
    },
});
