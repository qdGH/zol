<?php
    require "conn.php";

    if(isset($_POST['phonenumber']) || isset($_POST['submit'])){
		$phonenumber=@$_POST['phonenumber'];
	}else{
		exit('非法操作');
	}
	
	
	
	$query="select * from register where phonenumber='$phonenumber'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){
		echo 'false';
	}else{
		echo 'true';
	}
	
	if(isset($_POST['submit']) && $_POST['submit']=="注册"){
		$phone=$_POST['phonenumber'];
		$pass=md5($_POST['password']);

		$query="insert register(sid,phonenumber,password,date) values(null,'$phone','$pass',NOW())";
		mysql_query($query);
		header('location:../src/login.html');
	}
?>