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

$sql = 'SELECT * FROM speedtimer_data WHERE name ="'. $name. '"';

$result = $conn->query($sql);
$response = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $response['speedtimer_data'] = $row['speedtimer_data'];
    }
    echo json_encode($response);
} else {
    echo "  0 results";
}
$conn->close();