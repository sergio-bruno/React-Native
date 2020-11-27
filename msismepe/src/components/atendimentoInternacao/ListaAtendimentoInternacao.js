// Importando as bibliotecas 
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Criando o componente
export default class ListaAtendimentoInternacao extends Component {
    render() {
        return (
            <View style={styles.item}>    
                <View style={styles.destalhesItem}>
                    <Text style={styles.txtTitulo}>Beneficiário: {this.props.item.NM_PACIENTE}</Text>
                    <Text style={styles.txtDetalhes}>Atendimento: {this.props.item.CD_ATENDIMENTO} </Text>
                    <Text style={styles.txtDetalhes}>Data de Abertura: {this.props.item.DT_ABERTURA}</Text>
                    <Text style={styles.txtDetalhes}>Data de Finalização: {this.props.item.DT_FINALIZACAO}</Text>
                    <Text style={styles.txtDetalhes}>Qtd. de Dias Internado: {this.props.item.DIAS_INTERNADO}</Text>
                    <Text style={styles.txtDetalhes}>Origem do Atendimento: {this.props.item.DS_ORIGEM_ATEND}</Text>
                    <Text style={styles.txtDetalhes}>Especialidade: {this.props.item.DS_ESPECIALIDADE}</Text>
                    <Text style={styles.txtDetalhes}>Prestador Solicitante: {this.props.item.NM_PRESTADOR_SOLICITANTE}</Text>
                    <Text style={styles.txtDetalhes}>Prestador Resp. Atend.: {this.props.item.NM_PRESTADOR_RESP_ATEND}</Text>
                    <Text style={styles.txtDetalhes}>Situação do Atend.: {this.props.item.DS_SITUACAO_ATENDIMENTO}</Text>
                    <Text style={styles.txtDetalhes}>Leito: {this.props.item.DS_LEITO}</Text>
                    <Text style={styles.txtDetalhes}>Unidade de Int.: {this.props.item.DS_UNIDADE_INTERNACAO}</Text>
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
