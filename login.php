<?php
session_start();

include("connection.php");
include("functions.php");


if($_SERVER['REQUEST_METHOD'] == "POST")
{
    //something was posted
    $user_name = $_POST['user_name'];
    $password = $_POST['password'];

    if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
    {

        //read from database
        $query = "select * from users where user_name = '$user_name' limit 1";
        $result = mysqli_query($con, $query);

        if($result)
        {
            if($result && mysqli_num_rows($result) > 0)
            {

                $user_data = mysqli_fetch_assoc($result);
                
                if($user_data['password'] === $password)
                {
                    $_SESSION['user_id'] = $user_data['user_id'];
                    $dataStuff = $user_data['speedtimer_data'];
                    header("Location: index.php");
                    die;
                }
            }
        }
        
        echo "<p style='text-align:center;  color: white;  margin: 15px;  font-size: 20px'>". "Wrong Username or Password!" . "</p>";
    }else
    {
        echo "<p style='text-align:center;  color: white;  margin: 15px;  font-size: 20px'>". "Wrong Username or Password!" . "</p>";
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login - SpeedTimer</title>
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

                    <div id="login">Login:</div><br><br>
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

                        <input id="sub" type="submit" value="Login">

                        <a href="">Sign Up Page</a></div>
                        <!-- signup.php -->
                    <br>

                </form>
            </div>
        </div>
    </div>
    <script src="" async defer></script>
</body>

</html>