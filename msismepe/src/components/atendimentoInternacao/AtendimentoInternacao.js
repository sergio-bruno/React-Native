    // Importando as bibliotecas 
import React, { Component } from 'react';
import { ScrollView, Alert, View, AsyncStorage } from 'react-native';
import axios from 'axios';

import ListaAtendimentoInternacao from './ListaAtendimentoInternacao';

// Criando o componente
export default class AtendimentoInternacao extends Component {

    constructor(props) {
        super(props);

        this.state = { atendimentoInternacao: [] };
    }
    
    /* para a requisição a API REST
     * axios.get('http://www.sismepe.pe.gov.br/ehosp_new/ServicoAtendimentoPaciente.php?op=getListaInternacao&nrSame=28970')
     */
    async componentWillMount() {
        const user = JSON.parse(await AsyncStorage.getItem('@Sismepe:user'));

        const url = 'http://www.sismepe.pe.gov.br/ehosp_new/ServicoAtendimentoPaciente.php?op=getListaInternacao&nrSame=';
        const matricula = user.data.NR_MATRICULA;
        const urlConsulta = url.concat(matricula);

        axios.get(urlConsulta)
            .then(response => { this.setState({ atendimentoInternacao: response.data }); })
            .catch(() => { Alert.alert('Erro ao recuperar os dados'); });
    }

    render() {
        return (
            <View>
                <ScrollView style={{ backgroundColor: '#DDD' }}>
                    { this.state.atendimentoInternacao.map(
                        item => (<ListaAtendimentoInternacao key={item.CD_ATENDIMENTO} item={item} />)
                    )}
                </ScrollView>
            </View>    
        );
    }
}
