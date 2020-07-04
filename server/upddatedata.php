<?php
include_once "./connectvip.php";
$goodsNum = $_REQUEST["goodsNum"];
$user = $_REQUEST["user"];
$sql = "UPDATE $user SET goodsNum = goodsNum +1 WHERE goodsNum = $goodsNum";
$retval = mysqli_query($vip,$sql);
echo "成功";
?>