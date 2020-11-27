import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

import Dependente from './components/dependente/Dependente';
import AtendimentoUrgencia from './components/atendimentoUrgencia/AtendimentoUrgencia';
import AtendimentoInternacao from './components/atendimentoInternacao/AtendimentoInternacao';
import ConsultaAmbulatorial from './components/consultaAmbulatorial/ConsultaAmbulatorial';
import ExameLaboratorial from './components/exameLaboratorial/ExameLaboratorial';
import DetalheExameLaboratorial from './components/exameLaboratorial/DetalheExameLaboratorial';
import Licenca from './components/licenca/Licenca';
import ConsultaFichaFinanceira from './components/fichaFinanceira/ConsultaFichaFinanceira';
import EmDesenvolvimento from './EmDesenvolvimento';
import TesteComponente from './TesteComponente';
import Principal from './Principal';
import Login from './Login';

//const botaoVoltar = require('./images/btn_voltar.png');

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Stack key="root">
					<Scene 
						key="login" 
						component={Login} 
						title="Login" 
						initial 
						hideNavBar 
					/>
					<Scene 
						key="principal" 
						component={Principal} 
						title="MEU SISMEPE" 
						left={() => null}
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="dependente" 
						component={Dependente} 
						title="DEPENDENTES" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="licenca" 
						component={Licenca} 
						title="LICENÇAS/ DISPENSAS" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="atendimentoUrgencia" 
						component={AtendimentoUrgencia} 
						title="ATENDIMENTOS DE URGÊNCIA" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="atendimentoInternacao" 
						component={AtendimentoInternacao} 
						title="INTERNAÇÕES" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="consultaAmbulatorial" 
						component={ConsultaAmbulatorial} 
						title="CONSULTAS AMBULATORIAIS" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="exameLaboratorial" 
						component={ExameLaboratorial} 
						title="EXAMES" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="detalheExameLaboratorial" 
						component={DetalheExameLaboratorial} 
						title="EXAMES LABORATORIAIS" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="consultaFichaFinanceira" 
						component={ConsultaFichaFinanceira} 
						title="FICHA FINANCEIRA" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="emDesenvolvimento" 
						component={EmDesenvolvimento} 
						title="EM DESENVOLVIMENTO" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
					<Scene 
						key="testeComponente" 
						component={TesteComponente} 
						title="Teste de Componente" 
						//backButtonImage={botaoVoltar} 
						navigationBarStyle={styles.navBar}
						titleStyle={styles.titulo}
					/>
				</Stack>
			</Router>
		);
	}
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#D02090'
  },
	titulo: {
		fontSize: 18,
		textAlign: 'center',
		color: '#FFF'
	}
});
