<?php
header("content-type:text/html;charset=utf-8");
$con = mysqli_connect("localhost","root","root","haier");
$cartname = $_REQUEST["cartname"];
// $sql = "CREATE table $cartname(".
// "    goodsId varchar(100),".
// "    goodsNum int(20)".
// "    )";
$sql = "CREATE TABLE $cartname(goodsId VARCHAR(100),goodsNum INT(20))";
$r = mysqli_query($con,$sql);
if($r){
    echo "创建用户购物车成功";
    echo $cartname;
}else{
    echo "创建用户购物车失败";
};
?>