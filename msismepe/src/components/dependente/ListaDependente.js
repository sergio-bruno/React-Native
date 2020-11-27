// Importando as bibliotecas 
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Criando o componente
export default class ListaDependente extends Component {
    render() {
        return (
            <View style={styles.item}>    
                <View style={styles.destalhesItem}>
                    <Text style={styles.txtTitulo}>Nome: {this.props.item.NM_PESSOA}</Text>
                    <Text style={styles.txtDetalhes}>Sequencial: {this.props.item.NR_SEQUENCIAL}</Text>
                    <Text style={styles.txtDetalhes}>Data de Concessão: {this.props.item.DT_CONCESSAO}</Text>
                    <Text style={styles.txtDetalhes}>Data de Cancelamento: {this.props.item.DT_CANCELAMENTO}</Text>
                    <Text style={styles.txtDetalhes}>Data de Bloqueio: {this.props.item.DT_BLOQUEIO}</Text>
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
