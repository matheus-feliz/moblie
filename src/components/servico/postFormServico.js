/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Bar from '../bar';
import NavBarMenu from '../navBarMenu';

export default class PostFormServico extends Component{
    state = {
    valido: false,
    date: new Date(),
    dateTime: new Date(),
    open:false,
    openTime : false,
    selectedRadio : '',
    selectedRadioSexo: '',
    };
   render(){
    if (this.state.valido === true) {
        return (
            <>
                <Bar />
                <NavBarMenu />
                <View>
                    <View style={style.ciculo}>
                        <Image
                            style={style.image}
                            source={require('../../image/check.png')}
                        />
                    </View>
                    <Text style={style.textCadastro}>
                        Agendamento Realizado
                        com Sucesso!
                    </Text>
                </View>
            </>
        );
    } else {
        return (
            <>
                <Bar />
                <NavBarMenu />
                <View>
                    <View style={style.inputForm}>
                        <TextInput
                            placeholder="Nome"
                            style={style.inputLogin}
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            placeholder="idade"
                            style={style.inputLogin}
                            keyboardType="numeric"
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            placeholder="raça"
                            style={style.inputLogin}
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            placeholder="tipo"
                            secureTextEntry={true}
                            style={style.inputLogin}
                            placeholderTextColor="gray"
                        />
                        <View style={style.main}>
                            <TouchableOpacity onPress={() => {this.setState({selectedRadio: 'Consulta'});}}>
                                <View style={style.radioWapper}>
                                    <View style={style.radio}>
                                        {
                                            this.state.selectedRadio === 'Consulta' ? <View style={style.radioBg} /> : null
                                        }
                                    </View>
                                    <Text style={style.textRadio}>Consulta</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>{this.setState({selectedRadio:'Castracao'});}}>
                                <View style={style.radioWapper}>
                                    <View style={style.radio}>
                                        {
                                            this.state.selectedRadio === 'Castracao' ? <View style={style.radioBg} /> : null
                                        }
                                    </View>
                                    <Text style={style.textRadio}>Castração</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.ajustCheck}>
                            <TouchableOpacity onPress={() =>this.setState({ selectedRadioSexo :'macho'})}>
                                <View style={style.radioWapper}>
                                    <View style={style.radio}>
                                        {
                                            this.state.selectedRadioSexo === 'macho' ? <View style={style.radioBg} /> : null
                                        }
                                    </View>
                                    <Text style={style.textRadio}>macho</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>{this.setState({ selectedRadioSexo :'femea'})}}>
                                <View style={style.radioWapper}>
                                    <View style={style.radio}>
                                        {
                                            this.state.selectedRadioSexo === 'femea' ? <View style={style.radioBg} /> : null
                                        }
                                    </View>
                                    <Text style={style.textRadio}>femea</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.ajustDate}>
                            <TextInput
                                placeholder="data"
                                style={style.inputDate}
                                keyboardType="numeric"
                                placeholderTextColor="gray"
                            />
                            <TouchableOpacity onPress={() => {this.setState({open:true})}}>
                                <Image source={require('../../image/calendario.png')} />
                            </TouchableOpacity>
                            <DatePicker
                                modal
                                mode="date"
                                open={this.state.open}
                                date={this.state.date}
                                // eslint-disable-next-line no-shadow
                                onConfirm={(date) => {
                                    this.setState({open:false});
                                    this.setState({date:date});
                                }}
                                onCancel={() => {
                                    this.setState({open:false});
                                }}
                            />
                        </View>
                        <View style={style.ajustDate}>
                            <TextInput
                                placeholder="horario"
                                style={style.inputDate}
                                keyboardType="numeric"
                                placeholderTextColor="gray"
                            />
                            <TouchableOpacity onPress={() => {this.setState({openTime: true})}}>
                                <Image source={require('../../image/relogio.png')} />
                            </TouchableOpacity>
                            <DatePicker
                                modal
                                mode="time"
                                open={this.state.openTime}
                                date={this.state.dateTime}
                                onConfirm={(dateTime) => {
                                    this.setState({openTime: true});
                                    this.setState({dateTime:dateTime});
                                }}
                                onCancel={() => {
                                    this.setState({openTime: false});
                                }}
                            />
                        </View>
                        <View style={style.bottomButton}>
                            <TouchableOpacity style={style.BotoaCadastro} onPress={() =>{this.setState({valido: true})}}>
                                <Text style={style.textButton}> Adicionar </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    }
   }
};

const style = StyleSheet.create({
    radioBg: {
        backgroundColor: 'lightgreen',
        width: 8,
        height: 8,
        borderRadius: 20,
    },
    radioWapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radio: {
        width: 15,
        height: 15,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 250,
    },
    textRadio: {
        fontSize: 20,
        marginLeft: 5,
    },
    ajustCheck: {
        borderWidth: 5,
        borderRadius: 15,
        borderColor: 'lightgreen',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 250,
        height: 50,
    },
    image: {
        width: 157,
        height: 157,
    },
    ciculo: {
        position: 'absolute',
        width: 157,
        height: 157,
        left: 121,
        top: 60,
        borderRadius: 100,
    },
    textCadastro: {
        position: 'absolute',
        width: 321,
        height: 24,
        left: 60,
        top: 240,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 24,
    },
    BotoaCadastro: {
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'lightgreen',
        borderRadius: 10,
    },
    textButton: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 24,
        color: '#ffffff',
    },
    bottomButton: {
        width: '100%',
        marginBottom:10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputLogin: {
        width: 314,
        height: 36,
        marginBottom: 15,
        borderBottomWidth: 2,
        borderColor: 'gray',
    },
    inputForm: {
        position: 'absolute',
        width: 350,
        left: 20,
        top: 20,
        borderColor: 'lightgreen',
        borderRadius: 15,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputDate: {
        width: 250,
        height: 36,
        marginBottom: 15,
        borderBottomWidth: 2,
        borderColor: 'gray',
    },
    ajustDate: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 270,
    },
});
