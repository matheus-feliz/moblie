/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
    return (
        <View style={style.bar}>
            <Text style={style.textBar}>PetSu</Text>
        </View>
        );
};

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
});
