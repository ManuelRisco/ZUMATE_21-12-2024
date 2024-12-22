<?php
// Configurar CORS (permite solicitudes desde cualquier origen)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json'); // Asegura que la respuesta sea en formato JSON

// Si la solicitud es de tipo OPTIONS, responder sin procesar los datos
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Conexión a la base de datos MySQL
$servidor = "localhost";
$usuario = "root";
$clave = "";
$baseDeDatos = "zumate_db";

$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

// Verificar la conexión
if (!$enlace) {
    die(json_encode(['status' => 'error', 'message' => 'Error de conexión: ' . mysqli_connect_error()]));
}

// Recuperar datos del formulario (en formato JSON)
$data = json_decode(file_get_contents('php://input'), true);

// Verificar si se recibieron los datos
if (isset($data['nombre'], $data['apellidos'], $data['dni'], $data['email'], $data['telefono'], $data['institucion'], $data['carrera'], $data['ciclo'], $data['horas'])) {
    
    // Preparar la consulta SQL para insertar los datos en la tabla
    $nombre = mysqli_real_escape_string($enlace, $data['nombre']);
    $apellidos = mysqli_real_escape_string($enlace, $data['apellidos']);
    $dni = mysqli_real_escape_string($enlace, $data['dni']);
    $email = mysqli_real_escape_string($enlace, $data['email']);
    $telefono = mysqli_real_escape_string($enlace, $data['telefono']);
    $institucion = mysqli_real_escape_string($enlace, $data['institucion']);
    $carrera = mysqli_real_escape_string($enlace, $data['carrera']);
    $ciclo = mysqli_real_escape_string($enlace, $data['ciclo']);
    $horas = mysqli_real_escape_string($enlace, $data['horas']);

    // Consulta para insertar los datos en la base de datos
    $sql = "INSERT INTO programa_pasantia (nombre, apellidos, dni, email, telefono, institucion_id, carrera_id, ciclo, horas) 
            VALUES ('$nombre', '$apellidos', '$dni', '$email', '$telefono', '$institucion', '$carrera', '$ciclo', '$horas')";

    if (mysqli_query($enlace, $sql)) {
        // Respuesta exitosa
        echo json_encode(['status' => 'success', 'message' => 'Formulario enviado correctamente']);
    } else {
        // Si ocurre un error al insertar
        echo json_encode(['status' => 'error', 'message' => 'Error al insertar los datos: ' . mysqli_error($enlace)]);
    }
} else {
    // Si faltan campos en el formulario
    echo json_encode(['status' => 'error', 'message' => 'Faltan datos en el formulario']);
}

// Cerrar la conexión
mysqli_close($enlace);
?>
