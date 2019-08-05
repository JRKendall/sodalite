
<?php
 header("Access-Control-Allow-Origin: *");

$username = $_POST['username'];
$password = $_POST['password'];

if($username && $password == ''){
    echo "empty";
} else {
    echo "Welcome to Costa! $username";
    include 'image.php';
   $planurl = GetPlanImg('Sweet', '037');
   echo "<img width='600px' height='750px' src=\"$planurl\"/>";
}


?>