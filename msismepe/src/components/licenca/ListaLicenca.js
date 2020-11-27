// Importando as bibliotecas 
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Criando o componente
export default class ListaLicenca extends Component {
    render() {
        return (
            <View style={styles.item}>    
                <View style={styles.destalhesItem}>
                    <Text style={styles.txtTitulo}>Parecer: {this.props.item.DS_PARECER}</Text>
                    <Text style={styles.txtDetalhes}>Data de Cadastro: {this.props.item.DT_CADASTRO}</Text>
                    <Text style={styles.txtDetalhes}>Data de Início: {this.props.item.DT_INICIO}</Text>
                    <Text style={styles.txtDetalhes}>Data de Homologação: {this.props.item.DT_HOMOLOGACAO}</Text>
                    <Text style={styles.txtDetalhes}>Qtd. de Dias: {this.props.item.QT_DIAS}</Text>
                    <Text style={styles.txtDetalhes}>Homologação: {this.props.item.DS_HOMOLOGACAO}</Text>
                    <Text style={styles.txtDetalhes}>Prestador: {this.props.item.NM_MNEMONICO}</Text>
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
