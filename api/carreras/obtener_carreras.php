<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zumate_db";  // Cambia esto a tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Consulta para obtener todas las carreras
$sql = "SELECT * FROM carrera";
$result = $conn->query($sql);

$carreras = array();
while ($row = $result->fetch_assoc()) {
    $carreras[] = $row;
}

echo json_encode($carreras);

$conn->close();
?>
