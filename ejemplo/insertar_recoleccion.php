<?php
// Configurar CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Conexión a la base de datos
$servidor = "localhost";
$usuario = "root";
$clave = "";
$baseDeDatos = "zumate_db";

$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

// Verificar la conexión
if (!$enlace) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Recuperar los datos del formulario (en formato JSON)
$data = json_decode(file_get_contents('php://input'), true);

// Verificar si los datos están completos
if (isset($data['nombre'], $data['apellidos'], $data['dni'], $data['email'], $data['telefono'], $data['departamento'], $data['provincia'], $data['distrito'], $data['direccion'], $data['tipoDonacion'])) {
    
    // Escapar caracteres especiales
    $nombre = mysqli_real_escape_string($enlace, $data['nombre']);
    $apellidos = mysqli_real_escape_string($enlace, $data['apellidos']);
    $dni = mysqli_real_escape_string($enlace, $data['dni']);
    $email = mysqli_real_escape_string($enlace, $data['email']);
    $telefono = mysqli_real_escape_string($enlace, $data['telefono']);
    $departamento = mysqli_real_escape_string($enlace, $data['departamento']);
    $provincia = mysqli_real_escape_string($enlace, $data['provincia']);
    $distrito = mysqli_real_escape_string($enlace, $data['distrito']);
    $direccion = mysqli_real_escape_string($enlace, $data['direccion']);
    $tipoDonacion = mysqli_real_escape_string($enlace, $data['tipoDonacion']);

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO recoleccion_domicilio (nombre, apellidos, dni, email, telefono, departamento, provincia, distrito, direccion, tipo_donacion) 
            VALUES ('$nombre', '$apellidos', '$dni', '$email', '$telefono', '$departamento', '$provincia', '$distrito', '$direccion', '$tipoDonacion')";

    if (mysqli_query($enlace, $sql)) {
        echo json_encode(['status' => 'success', 'message' => 'Formulario enviado correctamente']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error al insertar los datos: ' . mysqli_error($enlace)]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Faltan datos en el formulario']);
}

// Cerrar la conexión
mysqli_close($enlace);
?>
