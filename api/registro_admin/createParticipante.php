<?php
// Configurar CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zumate_db";  // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Comprobamos si se han enviado los datos del participante a través de POST
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['usuario'], $data['password'], $data['nombre'], $data['apellidos'], $data['email'], $data['rol'], $data['estado'])) {
    $usuario = $data['usuario'];
    $password = $data['password'];
    $nombre = $data['nombre'];
    $apellidos = $data['apellidos'];
    $email = $data['email'];
    $rol = $data['rol'];
    $estado = $data['estado'];

    // Consulta SQL para insertar el nuevo participante
    $sql = "INSERT INTO usuarios (usuario, password, nombre, apellidos, email, rol, estado) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $usuario, $password, $nombre, $apellidos, $email, $rol, $estado);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Participante creado exitosamente"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al crear participante"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
}

$conn->close();
?>