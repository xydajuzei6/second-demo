<?php
header("content-type:text/html;charset=utf-8");
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
include_once "./connectvip.php";
$sql = "SELECT * FROM `vip` WHERE username = '$username'";

$r = mysqli_query($vip, $sql);

$num = mysqli_num_rows($r); /* 该方法得到的是记录的条数:$r["num_rows"]  */

if($num == 1){
  $data = mysqli_fetch_all($r,MYSQLI_ASSOC)[0];
  if($password  === $data["userpass"]){
    echo '{"status":"success","msg":"登录成功!"}';
  }else{
    echo '{"status":"error","msg":"密码不正确!"}';
  }
}else{
  echo '{"status":"error","msg":"该用户名不存在!"}';
}

?>