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

// Consulta para obtener todas las imágenes
$sql = "SELECT * FROM imagenes";
$result = $conn->query($sql);

$imagenes = array();
$ruta_base = "http://localhost/api/aliados/imagenes/"; // Ruta base para las imágenes

while ($row = $result->fetch_assoc()) {
    // Agregar la ruta completa a cada imagen
    $row['ruta_archivo'] = $ruta_base . $row['nombre_archivo'];
    $imagenes[] = $row;
}

// Devolver las imágenes en formato JSON
echo json_encode($imagenes);

$conn->close();
?>
