<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost"; // Cambia esto si tu servidor MySQL es diferente
$username = "root";        // Cambia esto por tu usuario de MySQL
$password = "";            // Cambia esto por tu contraseña de MySQL
$dbname = "zumate_db";     // Cambia esto por el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Datos recibidos desde el formulario de login
$data = json_decode(file_get_contents("php://input"));

if (isset($data->usuario) && isset($data->password)) {
    $usuario = $data->usuario;
    $plaintextPassword = $data->password;

    // Consultar la base de datos para obtener la contraseña
    $sql = "SELECT password FROM usuarios WHERE usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($storedPassword);
        $stmt->fetch();

        // Comparar la contraseña ingresada con la almacenada en texto plano
        if ($plaintextPassword === $storedPassword) {
            echo json_encode(["status" => "success"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Acceso denegado. Contraseña incorrecta"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Acceso denegado. Usuario no encontrado"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
}

$conn->close();
?>
