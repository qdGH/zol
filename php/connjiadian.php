<?php  
	header('content-type:text/html;charset=utf-8');
	define('HOSTNAME','localhost');
	define('USERNAME','root');
	define('PASSWORD','');
	$conn=@mysql_connect(HOSTNAME,USERNAME,PASSWORD);
	if(!$conn){
		die('数据库链接失败:'.mysql_error());
	}

	mysql_select_db('zol');
	mysql_query('SET NAMES UTF8');

	$result=mysql_query("select * from jiadian");
		$piclist=array();
		for($i=0;$i<mysql_num_rows($result);$i++){
			$piclist[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
		}
	
	echo json_encode($piclist);
	
	
	
	mysql_close($conn);

	

?>