<?php
	include 'DBConfig.php';
	 
	$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	 
	$json = file_get_contents('php://input');
	  
	$obj = json_decode($json,true);
	 
	$email = $obj['email'];
	$password = $obj['password'];

	
	$Sql_Query = "SELECT u.CD_PESSOA, u.NM_LOGIN, u.DS_SENHA, t.NR_MATRICULA, 0 AS NR_SEQUENCIAL, 
		t.CD_CORPORACAO
		FROM usuario u
		JOIN pessoa p ON p.CD_PESSOA = u.CD_PESSOA
		JOIN pessoa_titular t ON t.CD_PESSOA = p.CD_PESSOA 
		WHERE u.NM_LOGIN = '$email' and u.DS_SENHA = '$password' 
		UNION
		SELECT u2.CD_PESSOA, u2.NM_LOGIN, u2.DS_SENHA, d.NR_MATRICULA, d.NR_SEQUENCIAL, d.CD_CORPORACAO
		FROM usuario u2
		JOIN pessoa p2 ON p2.CD_PESSOA = u2.CD_PESSOA
		JOIN pessoa_dependente d ON d.CD_PESSOA = p2.CD_PESSOA
		WHERE u2.NM_LOGIN = '$email' and u2.DS_SENHA = '$password' ";

	//$Sql_Query = "SELECT u.NM_LOGIN,u.DS_SENHA FROM usuario u WHERE u.NM_LOGIN = '$email' and //u.DS_SENHA = '$password' ";

	$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));

	if(isset($check)){
	 	
	 	//$SuccessLoginMsg = 'Data Matched';
		//$SuccessLoginJson = json_encode($SuccessLoginMsg);
		//echo $SuccessLoginJson ; 
		
		$json = json_encode($check);
		print("{\"ok\":true".", \"data\": ".$json."}");
	 } else{
		$InvalidMSG = 'Usuario ou senha invalido, tente novamente' ;
		$InvalidMSGJSon = json_encode($InvalidMSG);
	 	echo $InvalidMSGJSon ;
	}
	mysqli_close($con);
?>