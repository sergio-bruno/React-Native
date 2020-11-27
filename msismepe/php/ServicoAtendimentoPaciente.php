<?php

include($_SERVER['DOCUMENT_ROOT'].'InitZend.php');
include_once($_SERVER['DOCUMENT_ROOT']."ehosp_new/erp/controller/util.php");
error_reporting(E_ALL);
ini_set('display_errors', 'on');

//session_start();

$svc = new AtendimentoService();

if(isset($_GET['start'])){
	$svc->setInit($_GET['start']);
}
if(isset($_GET['limit'])){
	$svc->setCount($_GET['limit']);
}

$op = $_GET['op'];

$erro = "Erro desconhecido.";

if($op == ""){
}

else if($op == 'getListaDependente'){
	$nrSame = '';
	if (isset($_GET['nrSame'])) {
		$nrSame = strtoupper(trim($_GET['nrSame']));	
	}
	$query = '';
	$query = $query . 'SELECT * FROM PESSOA';
	$query = $query . ' WHERE MATRICULA = "'.$nrSame.'"';
	$elmnts = $svc->getBySelect($query);
	$json = json_encode($elmnts);
	echo $json;
}

else if($op == 'getListaLicenca'){
	$nrSame = '';
	if (isset($_GET['nrSame'])) {
		$nrSame = strtoupper(trim($_GET['nrSame']));	
	}
	$query = '';
	$query = $query . 'SELECT * FROM licencas WHERE ATIVO = "S"';
	$query = $query . ' AND MATRICULA = '.$nrSame;
	$query = $query . ' ORDER BY INICIO DESC';
	$elmnts = $svc->getBySelect($query);
	$json = json_encode($elmnts);
	echo $json;
}

else if($op == 'getListaAtendimentoUrgencia'){
	$nrSame = '';
	if (isset($_GET['nrSame'])) {
		$nrSame = strtoupper(trim($_GET['nrSame']));	
	}
	$query = '';
	$query = $query . 'SELECT * FROM atendimentos'; 
	$query = $query . ' WHERE MATRICULA = '.$nrSame;
	$query = $query . ' ORDER BY ABERTURA DESC ';
		
	$elmnts = $svc->getBySelect($query);
	$json = json_encode($elmnts);
	echo $json;
}

else if($op == 'getListaConsulta'){
	$nrSame = '';
	if (isset($_GET['nrSame'])) {
		$nrSame = strtoupper(trim($_GET['nrSame']));	
	}
	$query = '';
	$query = $query . 'SELECT * FROM consultas WHERE MATRICULA = '.$nrSame;
	$elmnts = $svc->getBySelect($query);
	$json = json_encode($elmnts);
	echo $json;
}

else if($op == 'getListaInternacao'){
	$nrSame = '';
	if (isset($_GET['nrSame'])) {
		$nrSame = strtoupper(trim($_GET['nrSame']));	
	}
	$query = '';
	$query = $query . 'SELECT * FROM internacao WHERE MATRICULA = '.$nrSame;
	$elmnts = $svc->getBySelect($query);
	$json = json_encode($elmnts);
	echo $json;
}

else if($op == 'getListaExameLab'){
	$nrSame = '';
	if (isset($_GET['nrSame'])) {
		$nrSame = strtoupper(trim($_GET['nrSame']));	
	}
	$query = '';
	$query = $query . "SELECT * FROM exames WHERE NR_MATRICULA = ".$nrSame;
	$elmnts = $svc->getBySelect($query);
	$json = json_encode($elmnts);
	echo $json;
}

else if($op == 'getListaExameDetLab'){
	$cdItAgendaCentral = '';
	if (isset($_GET['cdItAgendaCentral'])) {
		$cdItAgendaCentral = strtoupper(trim($_GET['cdItAgendaCentral']));	
	}
	$query = '';
	$query = $query . "SELECT * FROM it_agenda_lab WHERE AGENDA_CENTRAL = ".$cdItAgendaCentral;
	$query = $query . ' ORDER BY EXAME';
	$elmnts = $svc->getBySelect($query);
	$json = json_encode($elmnts);
	echo $json;
}

else if($op == 'getListaFichaFinanceira'){
	$cdPessoa = '';
	if (isset($_GET['cdPessoa'])) {
		$cdPessoa = strtoupper(trim($_GET['cdPessoa']));	
	}
	$query = '';
	$query = $query . "SELECT * FROM financeirao 
		WHERE pessoa = ".$cdPessoa;
	$elmnts = $svc->getBySelect($query);
	$json = json_encode($elmnts);
	echo $json;
}

else{
	print("'success': false,");
	print("'mensagem': $erro");
}

?>