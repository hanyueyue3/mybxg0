<?php
$dir ='main';
$filename='index';
if(array_key_exists('PATH_INFO',$_SERVER)){
	$path=$_SERVER['PATH_INFO'];
	$str=substr($path,1);
	$arr=explode('/',$str);
	if(count($arr)==2){
		$dir=$arr[0];
		$filename=$arr[1];
	}else{
		$filename='login';
	}
}
	include('./views/'.$dir.'/'.$filename.'.html');

?>