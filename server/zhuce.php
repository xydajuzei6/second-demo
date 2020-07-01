<?php
 header("content-type:text/html;charset=utf-8");
 $conn = mysqli_connect("localhost","root","root","haier");
 if($conn){
     echo "已连接";
 }else{
     echo "weilianjie";
 }
 echo "123";
?>