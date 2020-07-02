<?php
 header("content-type:text/html;charset=utf-8");
include_once "./connectvip.php";
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $phone = $_REQUEST["phone"];
    $sql = "SELECT * FROM `vip` WHERE username = '$username'";
$r = mysqli_query($vip, $sql);
$num= mysqli_num_rows($r); /* 该方法得到的是记录的条数:$r["num_rows"]  */
/* + 检查：检查当前的用户名在数据库中是否已经存在，如果存在那么就应该提示，否则就插入 */ 
if($num == 1){
  echo '{"status":"error","msg":"该用户已经存在，请重新填写注册的昵称!!"}';
}else{
  $sql = "INSERT INTO vip " .
    "(username,userpass,userphone)" .
    "VALUES " .
    "('$username','$password',$phone)";
  $retval = mysqli_query($vip, $sql);
  if (!$retval) {
    die('无法插入数据: ' . mysqli_error($vip));
  }
  /* 注意：PHP代码中不能使用``符号 */
  echo '{"status":"success"}';
}
?>