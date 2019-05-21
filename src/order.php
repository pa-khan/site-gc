<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['comment'])) {$comment = $_POST['comment'];}
if (isset($_POST['square'])) {$square = $_POST['square'];}
if (isset($_POST['time'])) {$time = $_POST['time'];}
if (isset($_POST['tariff'])) {$tariff = $_POST['tariff'];}
if (isset($_POST['count'])) {$count = $_POST['count'];}
if (isset($_POST['type-object'])) {$type_object = $_POST['type-object'];}
if (isset($_POST['prim'])) {$prim = $_POST['prim'];}


$message;

if ($name== true) {
	$message .= "Имя: $name";
}

if ($phone== true) {
	$message .= "\nТелефон: $phone";
}

if ($email== true) {
	$message .= "\nПочта: $email";
}

if ($square== true) {
	$message .= "\nПлощадь: $square";
}


if ($time== 'morning') {
	$message .= "\nГрафик уборки: Утренняя уборка";
} else if($time== 'evening'){
	$message .= "\nГрафик уборки: Вечерняя уборка";
}

if ($tariff== '1') {
	$message .= "\nТариф: Эконом";
} else if ($tariff== '2'){
	$message .= "\nТариф: Стандарт";
} else if ($tariff== '3'){
	$message .= "\nТариф: VIP";
}


if ($count== true) {
	$message .= "\nКоличество уборок в неделю: $count";
}
if ($type_object== true) {
	$message .= "\nВид объекта: $type_object";
}
if ($prim== true) {
	$message .= "\nПримечание: $prim";
}

if ($comment == true) {
	$message .= "\nКомментарий: $comment";
}


$to = "e5ash.bro@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>