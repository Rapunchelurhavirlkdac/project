<?php

    $to = "Kechin.d@gmail.com";
    $from = $_POST['Email'];
    $first_name = $_POST['Name'];
    $second_name = $_POST['Surname'];
    $phone = $_POST['Phone'];
    $subject = "Форма отправки сообщений с сайта";
    $subject2 = "Copy of your from submission";
    $message = $first_name . ' ' . $second_name . ' оставил сообщение:' . '\n\n' . $phone . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
    $headers = "From" . $from;
    $headers2 = "From" . $to;

    mail($to, $subject, $message, $headers);

    echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вамию";
    echo "<br /><br /><a href='https://progershouse.ru'>Вернутся на сайт. </a>";

?>