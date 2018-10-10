<?php  
	require "conn.php";

	$result=mysql_query("select * from djdiy");
		$piclist=array();
		for($i=0;$i<mysql_num_rows($result);$i++){
			$piclist[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
		}
	
	echo json_encode($piclist);
	
	
	
	mysql_close($conn);

	

?>