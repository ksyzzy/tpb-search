<?php
 header("Access-Control-Allow-Origin: *");

$data = file_get_contents('https://pirateproxy.surf/api?url=/q.php?q' . $_POST["title"]);
echo json_encode($data);
?>

