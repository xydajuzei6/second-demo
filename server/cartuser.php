<?php
include_once "./connectvip.php";
$user = $_REQUEST["user"];
$sql = "SELECT * FROM $user";
$r = mysqli_query($vip,$sql);
$data = mysqli_fetch_all($r,MYSQLI_ASSOC);

echo json_encode($data,true);
?>