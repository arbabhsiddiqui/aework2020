<?php

$name   ="";
$email="";
$number="";
$message;
 $name = $_REQUEST['name'];
 $email = $_REQUEST['email'];
 $number = $_REQUEST['number'];
 $message = $_REQUEST['message'];

 $to = "zackh41@gmail.com";
$subject = "Aework Enquiry";

$message = "
<html>
<head>
<title>Aework Message</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Email</th>
<th>Number</th>
<th>Message</th>
</tr>
<tr>
<td>".$name."</td>
<td>".$email."</td>
<td>".$number."</td>
<td>".$message."</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";
$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);

echo "send";
 
?>