<?php
header("content-type:text/html;charset=utf-8");
$vip = mysqli_connect("localhost","root","root","haier");
if(!$vip){
    die("数据库连接错误".mysqli_error($vip));
}
?>