<?php

if (isset ($_GET["message"])){
    $message = $_GET ["$message"];
    $file=fopen("chat.txt", "a+");
    fputs ($file, $message. "/n");
    die();
}

$message=file_get_contents("chat.txt");

echo $message;