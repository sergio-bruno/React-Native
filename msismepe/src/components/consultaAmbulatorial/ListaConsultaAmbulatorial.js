// Importando as bibliotecas 
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Criando o componente
export default class ListaConsultaAmbulatorial extends Component {
    render() {
        return (
            <View style={styles.item}>    
                <View style={styles.destalhesItem}>
                    <Text style={styles.txtTitulo}>Beneficiário: {this.props.item.NM_PESSOA}</Text>
                    <Text style={styles.txtDetalhes}>Atendimento: {this.props.item.CD_IT_AGENDA_CENTRAL}</Text>  
                    <Text style={styles.txtDetalhes}>Data da Consulta: {this.props.item.DataConsulta}</Text>
                    <Text style={styles.txtDetalhes}>Hora da Consulta: {this.props.item.HoraConsulta}</Text>
                    <Text style={styles.txtDetalhes}>Especialidade: {this.props.item.DS_ESPECIALIDADE}</Text>
                    <Text style={styles.txtDetalhes}>Prestador: {this.props.item.NM_MNEMONICO}</Text>
                    <Text style={styles.txtDetalhes}>Situação: {this.props.item.DS_SITUACAO}</Text>
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
