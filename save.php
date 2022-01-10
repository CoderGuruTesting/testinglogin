<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "speedtimer";

if(!$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname))
{
    die("Failed to Connect.");
}


$speedtimer_data = mysqli_real_escape_string($conn, $_POST['speedtimer_data']);

$sql = "INSERT INTO speedtimer_data (speedtimer_data)";

$conn->close();
?>