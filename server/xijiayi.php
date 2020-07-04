<?php
include_once "./connectvip.php";
$user = $_REQUEST["user"];
$goodsId = $_REQUEST["goodsId"];
$sql = "SELECT * FROM $user WHERE goodsId = '$goodsId' ";
$result = mysqli_query($vip,$sql);
$num = mysqli_num_rows($result);

if($num == 0){
  $sql = "INSERT INTO $user " .
    "(goodsId,goodsNum)" .
    "VALUES " .
    "('$goodsId',1)";

}elseif($num == 1){
  $sql = "UPDATE $user SET goodsNum = goodsNum +1 WHERE goodsId = '$goodsId'";
}
$retval = mysqli_query($vip,$sql);
if (!$retval) {
  die('添加到购物车失败: ' . mysqli_error($vip));
}
echo "添加成功";
?>