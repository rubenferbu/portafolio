<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "rubenferbu@gmail.com"; // Reemplázalo con tu correo
    $subject = "Nuevo mensaje de contacto";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    $body = "Nombre: $name\nEmail: $email\nMensaje:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Acceso no permitido.";
}
?>

