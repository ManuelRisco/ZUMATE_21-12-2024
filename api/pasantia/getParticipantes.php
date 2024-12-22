<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zumate_db"; 

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Consulta para obtener todos los participantes con los nombres de institución y carrera
$sql = "SELECT p.id, p.nombre, p.apellidos, p.dni, p.email, p.telefono, p.institucion_id, p.carrera_id, p.ciclo, p.horas, p.fecha_registro,
               i.nombre AS institucion_nombre, c.nombre AS carrera_nombre
        FROM programa_pasantia p
        LEFT JOIN institucion i ON p.institucion_id = i.id
        LEFT JOIN carrera c ON p.carrera_id = c.id";


$result = $conn->query($sql);

$participantes = array();
while ($row = $result->fetch_assoc()) {
    $participantes[] = $row;
}

// Retornar los datos como JSON
echo json_encode($participantes);

$conn->close();
?>
