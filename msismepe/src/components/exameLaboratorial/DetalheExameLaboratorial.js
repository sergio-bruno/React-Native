// Importando as bibliotecas 
import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    ScrollView, 
    Alert } from 'react-native';
import axios from 'axios';

import ExibeListaExameLab from './ExibeListaExameLab';

// Criando o componente
export default class DetalheExameLaboratorial extends Component {
    constructor(props) {
        super(props);
        this.state = { codItem: props.codItem, consultaListaDetLab: [] };
    }
    
    async componentWillMount() {
        const url = 'http://www.sismepe.pe.gov.br/ehosp_new/ServicoAtendimentoPaciente.php?op=getListaExameDetLab&cdItAgendaCentral=';
        const urlConsulta = url.concat(this.state.codItem);

        axios.get(urlConsulta)
            .then(response => { this.setState({ consultaListaDetLab: response.data }); })
            .catch(() => { Alert.alert('Erro ao recuperar os dados'); });
    }
    
    render() {
        return (
            <View>
                <ScrollView style={{ backgroundColor: '#DDD' }}>
                    { this.state.consultaListaDetLab.map(
                        item => (<ExibeListaExameLab key={item.CD_IT_AGENDA_CENTRAL} item={item} />)
                    )}
                </ScrollView>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  viewPrincipal: {
    alignItems: 'center'
  },
});
