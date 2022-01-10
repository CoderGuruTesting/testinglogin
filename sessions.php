<?php

session_start();

    include("connection.php");
    include("functions.php");

    $user_data = check_login($con);
?>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>SpeedTimer</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="logo1.jpg">
    <!-- This link -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
</head>

<body>
    <div class="left">
        <img class="logo" width="80" height="80" src="logo1.jpg">
        <div class="part">
            SpeedTimer
        </div>
        <div class="smallPart">
            <a href="index.php">
                <!-- This icon -->
                <i class="fas fa-stopwatch"></i>
                Timer
            </a>
        </div>
        <div class="smallPart active">
            <a href="sessions.php">
                <!-- This icon -->
                <i class="fas fa-list"></i>
                Sessions
            </a>
        </div>
        <div class="smallPart">
            <a href="algorithms.php">
                <!-- This icon -->
                <i class="fas fa-th"></i>
                Algorithms
            </a>
        </div>
        <div class="smallPart">
            <a href="settings.php">
                <!-- This icon -->
                <i class="fas fa-cog"></i>
                Settings
            </a>
        </div>
    </div>

    <div class="right">

    </div>
</body>

</html>