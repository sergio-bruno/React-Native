    // Importando as bibliotecas 
import React, { Component } from 'react';
import { ScrollView, Alert, View, AsyncStorage } from 'react-native';
import axios from 'axios';

import ListaConsultaFichaFinanceira from './ListaConsultaFichaFinanceira';

// Criando o componente
export default class ConsultaFichaFinanceira extends Component {
    constructor(props) {
        super(props);
        this.state = { consultaFichaFinanceira: [] };
    }
    
    async componentWillMount() {
        const user = JSON.parse(await AsyncStorage.getItem('@Sismepe:user'));

        const url = 'http://www.sismepe.pe.gov.br/ehosp_new/ServicoAtendimentoPaciente.php?op=getListaFichaFinanceira&cdPessoa=';
        const cdPessoa = user.data.CD_PESSOA;
        const urlConsulta = url.concat(cdPessoa);

        axios.get(urlConsulta)
            .then(response => { this.setState({ consultaFichaFinanceira: response.data }); })
            .catch(() => { Alert.alert('Erro ao recuperar os dados'); });
    }

    render() {
        return (
            <View>
                <ScrollView style={{ backgroundColor: '#DDD' }}>
                    { this.state.consultaFichaFinanceira.map(
                        item => (<ListaConsultaFichaFinanceira key={item.id} item={item} />)
                    )}
                </ScrollView>
            </View>    
        );
    }
}
