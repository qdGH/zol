<?php  
	require "conn.php";
	$sid=$_GET['sid'];
	$result=mysql_query("select * from hotsell where sid=$sid");
	
	$arrdata=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arrdata[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}

	echo json_encode($arrdata);
?>