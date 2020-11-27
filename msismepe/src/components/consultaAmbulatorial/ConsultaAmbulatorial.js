    // Importando as bibliotecas 
import React, { Component } from 'react';
import { ScrollView, Alert, View, AsyncStorage } from 'react-native';
import axios from 'axios';

import ListaConsultaAmbulatorial from './ListaConsultaAmbulatorial';

// Criando o componente
export default class ConsultaAmbulatorial extends Component {
    constructor(props) {
        super(props);
        this.state = { consultaAmbulatorial: [] };
    }
    
    /* para a requisição a API REST
     * axios.get('http://www.sismepe.pe.gov.br/ehosp_new/ServicoAtendimentoPaciente.php?op=getListaConsulta&nrSame=28970')
     */
    async componentWillMount() {
        const user = JSON.parse(await AsyncStorage.getItem('@Sismepe:user'));

        const url = 'http://www.sismepe.pe.gov.br/ehosp_new/ServicoAtendimentoPaciente.php?op=getListaConsulta&nrSame=';
        const matricula = user.data.NR_MATRICULA;
        const urlConsulta = url.concat(matricula);

        axios.get(urlConsulta)
            .then(response => { this.setState({ consultaAmbulatorial: response.data }); })
            .catch(() => { Alert.alert('Erro ao recuperar os dados'); });
    }

    render() {
        return (
            <View>
                <ScrollView style={{ backgroundColor: '#DDD' }}>
                    { this.state.consultaAmbulatorial.map(
                        item => (<ListaConsultaAmbulatorial key={item.CD_IT_AGENDA_CENTRAL} item={item} />)
                    )}
                </ScrollView>
            </View>    
        );
    }
}
