    // Importando as bibliotecas 
import React, { Component } from 'react';
import { ScrollView, Alert, View, AsyncStorage } from 'react-native';
import axios from 'axios';

import ListaLicenca from './ListaLicenca';

// Criando o componente
export default class Licenca extends Component {

    constructor(props) {
        super(props);

        this.state = { licenca: [] };
    }
    
    /* para a requisição a API REST
     * axios.get('http://www.sismepe.pe.gov.br/ehosp_new/ServicoAtendimentoPaciente.php?op=getListaLicenca&nrSame=28970')
     */
    async componentWillMount() {
        const user = JSON.parse(await AsyncStorage.getItem('@Sismepe:user'));

        const url = 'http://www.sismepe.pe.gov.br/ehosp_new/ServicoAtendimentoPaciente.php?op=getListaLicenca&nrSame=';
        const matricula = user.data.NR_MATRICULA;
        const urlConsulta = url.concat(matricula);

        axios.get(urlConsulta)
            .then(response => { this.setState({ licenca: response.data }); })
            .catch(() => { Alert.alert('Erro ao recuperar os dados'); });
    }

    render() {
        return (
            <View>
                <ScrollView style={{ backgroundColor: '#DDD' }}>
                    { this.state.licenca.map(
                        item => (<ListaLicenca key={item.CD_LICENCA} item={item} />)
                    )}
                </ScrollView>
            </View>    
        );
    }
}
