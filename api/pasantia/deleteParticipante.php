<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

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

// Comprobamos si el id ha sido proporcionado en la URL
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Consulta SQL para eliminar el participante
    $sql = "DELETE FROM programa_pasantia WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);  // Vincula el id como un entero

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Participante eliminado exitosamente"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al eliminar participante"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "ID no proporcionado"]);
}

$conn->close();
?>
