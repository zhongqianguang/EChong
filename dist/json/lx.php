<?php
header("content-type:text/html;charset=utf-8");//解决中文乱码
$name=$_GET['name'];
$pass=$_GET['password'];
$abc = ["zqg"=>"1","ggg"=>"2"];
$flg = array_key_exists($name,$abc);
if($flg){
	echo "<script>alert('该用户已存在');window.location.href = 'register.html'</script>";
}else{
	$abc[$name]=$pass;
	echo "<script>alert('注册成功');window.location.href = 'register.html'</script>";
}
$json = json_encode($abc,JSON_UNESCAPED_UNICODE);
echo $json;
?>