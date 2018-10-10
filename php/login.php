<?php
require "conn.php";

if(isset($_POST['number'])){
	$phonenumber=$_POST['number'];
	$password=md5($_POST['pass']);
}else{
	exit('非法操作');
}

$query="select * from register where phonenumber='$phonenumber' and password='$password'";
$result=mysql_query($query);

if(mysql_fetch_array($result)){
	echo true;
}else{
	echo false;
}


?>