<?php
session_start();

include("connection.php");
include("functions.php");


if($_SERVER['REQUEST_METHOD'] == "POST")
{
    //something was posted
    $user_name = $_POST['user_name'];
    $password = $_POST['password'];
    $temp = "[]";

    if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
    {

        //save to database
        $user_id = random_num(20);
        $query = "insert into users (user_id,user_name,password,speedtimer_data) values ('$user_id','$user_name','$password', '$temp')";

        mysqli_query($con, $query);

        header("Location: login.php");
        die;
    }else
    {
        echo "Please enter some valid information!";
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sign Up - SpeedTimer</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="log.css">
    <link rel="icon" href="logo1.jpg">
</head>

<body>

    <div class="left">
        <div id="img">
            <img src="logo1.jpg">
            <div id="title">SpeedTimer</div>
        </div>

    </div>
    <div class="right">
        <div id="box">

            <div id="stuff">
                <form method="post">

                    <div id="login">Sign Up:</div><br><br>
                    <div id="sec">
                        <div id="caption">Username:&nbsp;</div>
                        <input type="text" name="user_name">
                    </div>
                    <br>
                    <div id="sec">
                        <div id="caption">Password:&nbsp;&nbsp;</div>
                        <input type="password" name="password">
                    </div>

                    <br><br><br>

                    <div class="buttons">

                        <input id="sub" type="submit" value="Sign Up">

                        <a href="login.php">Login Page</a></div>
                    <br>

                </form>
            </div>
        </div>
    </div>
    <script src="" async defer></script>
</body>

</html>