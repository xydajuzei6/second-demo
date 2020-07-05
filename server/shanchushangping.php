<?php
include_once "./connectvip.php";
$user = $_REQUEST["user"];
$goodsId = $_REQUEST["goodsId"];
$sql ="DELETE FROM $user WHERE goodsId='$goodsId'";
$retval = mysqli_query($vip,$sql);
if (!$retval) {
    die('删除失败: ' . mysqli_error($vip));
  }
  echo "删除成功";
?>