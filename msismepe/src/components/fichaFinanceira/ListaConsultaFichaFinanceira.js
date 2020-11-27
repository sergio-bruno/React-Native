// Importando as bibliotecas 
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Criando o componente
export default class ListaConsultaAmbulatorial extends Component {
    render() {
        return (
            <View style={styles.item}>    
                <View style={styles.destalhesItem}>
                    <Text style={styles.txtTitulo}>Descrição: {this.props.item.DESCRICAO}</Text>
                    <Text style={styles.txtDetalhes}>Dependente: {this.props.item.NM_DEPENDENTE}</Text>
                    <Text style={styles.txtDetalhes}>Período: {this.props.item.MES}/{this.props.item.ANO}</Text>  
                    <Text style={styles.txtDetalhes}>Procedimento: {this.props.item.PROCEDIMENTO}</Text>
                    <Text style={styles.txtValor}>Valor: {this.props.item.VALOR}</Text>
                    <Text style={styles.txtValor}>Saldo Devedor: {this.props.item.SALDO_DEVEDOR}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    foto: {
        width: 102,
        height: 102
    },
    destalhesItem: {
        marginLeft: 20,
        flex: 1
    },
    txtTitulo: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    txtValor: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetalhes: {
        fontSize: 16
    }
});
