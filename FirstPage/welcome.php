<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $email = $_POST['email'];  
    if (empty($email)) {
        echo "Email is empty";
    } else {
        $to = $email;
        $subject = "Welcome to our website!";
        $message = "Thank you for registering. We're glad to have you with us!";
        $headers = 'From: webmaster@example.com' . "\r\n" .
            'Reply-To: webmaster@example.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        if(mail($to, $subject, $message, $headers)){
            echo "Email sent successfully";
        }else{
            echo "Failed to send email";
        }
    }
}
?>