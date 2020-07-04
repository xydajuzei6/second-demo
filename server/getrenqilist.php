<?php
header("content-type:text/html;charset=utf-8");
include_once "./connectvip.php";
$x = $_REQUEST["x"];
$limit = 32+($x*3);
$sql = "SELECT * FROM dacangku limit $limit,3";
$result = mysqli_query($vip,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>