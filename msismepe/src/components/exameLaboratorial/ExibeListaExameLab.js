// Importando as bibliotecas 
import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    Text
} from 'react-native';

// Criando o componente
export default class ExibeListaExameLab extends Component {
    render() {
        return (
            <View style={styles.item}>    
                <View style={styles.destalhesItem}>
                    <Text style={styles.txtTitulo}>{this.props.item.DS_EXAME}</Text>
                    <Text style={styles.txtDetalhes}>Qtd. Solicitada: {this.props.item.QT_EXAME}</Text>
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
    txtDetalhes: {
        fontSize: 16
    },
});
