// Importando as bibliotecas 
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Criando o componente
export default class ListaAtendimentoUrgencia extends Component {
    render() {
        return (
            <View style={styles.item}>    
                <View style={styles.destalhesItem}>
                    <Text style={styles.txtTitulo}>Beneficiário: {this.props.item.NM_PESSOA}</Text>
                    <Text style={styles.txtDetalhes}>Atendimento: {this.props.item.CD_ATENDIMENTO}</Text>
                    <Text style={styles.txtDetalhes}>Data/Hora de Abertura: {this.props.item.DT_ABERTURA}</Text>
                    <Text style={styles.txtDetalhes}>Tipo: {this.props.item.TIPO}</Text>
                    <Text style={styles.txtDetalhes}>Destino do Atendimento: {this.props.item.DS_DESTINO_ATEND}</Text>
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
