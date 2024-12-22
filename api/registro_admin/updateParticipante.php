<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, OPTIONS');
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

// Comprobamos si el método es PUT
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

    // Obtener el id desde la URL (query string)
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
    } else {
        echo json_encode(["status" => "error", "message" => "ID no proporcionado"]);
        exit;
    }

    // Obtener los datos del cuerpo de la solicitud (sin incluir el id)
    $data = json_decode(file_get_contents('php://input'), true);

    // Comprobamos si los demás datos están presentes en el cuerpo de la solicitud
    if (isset($data['usuario'], $data['password'], $data['nombre'], $data['apellidos'], $data['email'], $data['rol'], $data['estado'])) {
        $usuario = $data['usuario'];
        $password = $data['password'];
        $nombre = $data['nombre'];
        $apellidos = $data['apellidos'];
        $email = $data['email'];
        $rol = $data['rol'];
        $estado = $data['estado'];

        // Consulta SQL para actualizar los datos del participante
        $sql = "UPDATE usuarios SET usuario = ?, password = ?, nombre = ?, apellidos = ?, email = ?, rol = ?, estado = ? WHERE id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssssi", $usuario, $password, $nombre, $apellidos, $email, $rol, $estado, $id);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Participante actualizado exitosamente"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al actualizar participante"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    }

} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
}

$conn->close();
?>