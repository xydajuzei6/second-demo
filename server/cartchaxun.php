<?php
include_once "./connectvip.php";
$goodsId = $_REQUEST["goodsId"];
$sql = "SELECT * FROM dacangku WHERE goodsId='$goodsId'";
$r = mysqli_query($vip,$sql);
$data = mysqli_fetch_all($r,MYSQLI_ASSOC);
echo json_encode($data,true);
?>