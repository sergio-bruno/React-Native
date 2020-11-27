// Importando as bibliotecas 
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    TouchableHighlight, 
    Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// Criando o componente
export default class ListaExameLaboratorial extends Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                    Actions.detalheExameLaboratorial({ codItem: this.props.item.CD_IT_AGENDA_CENTRAL });
                }}
            >
            <View style={styles.item}>    
                <View style={styles.destalhesItem}>
                    <Text style={styles.txtTitulo}>Beneficiário: {this.props.item.NM_PESSOA}</Text>
                    <Text style={styles.txtDetalhes}>Atendimento: {this.props.item.CD_IT_AGENDA_CENTRAL}</Text>  
                    <Text style={styles.txtDetalhes}>Data: {this.props.item.DT_AGENDAMENTO}</Text>
                    <Text style={styles.txtDetalhes}>Hora: {this.props.item.HR_INICIAL}</Text>
                    <Text style={styles.txtDetalhes}>Encaixe: {this.props.item.SN_ENCAIXE}</Text>                        
                    <Text style={styles.txtDetalhes}>Situação: {this.props.item.DS_TP_SITUACAO}</Text>
                </View>
            </View>
            </TouchableHighlight>
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
    },
});
