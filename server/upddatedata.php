<?php
include_once "./connectvip.php";
$goodsNum = $_REQUEST["goodsNum"];
$user = $_REQUEST["user"];
$goodsId = $_REQUEST["goodsId"];

$sql = "SELECT * FROM $user WHERE goodsId = '$goodsId'";
$result = mysqli_query($vip,$sql);

$sql1 = "UPDATE $user SET goodsNum=$goodsNum WHERE goodsId = '$goodsId'";
$retval = mysqli_query($vip,$sql1);
if (!$retval) {
    die('添加到购物车失败: ' . mysqli_error($vip));
  }
  echo "添加成功";
?>