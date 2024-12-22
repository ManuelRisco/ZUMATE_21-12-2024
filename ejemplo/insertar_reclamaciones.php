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
if (isset($data['tipoDocumento'], $data['numeroDocumento'], $data['nombres'], $data['apellidoPaterno'], $data['apellidoMaterno'], 
          $data['email'], $data['telefono'], $data['departamento'], $data['provincia'], $data['distrito'],
          $data['tipo'], $data['subtipo'], $data['motivo'], $data['descripcion'])) {
    
    // Escapar caracteres especiales
    $tipoDocumento = mysqli_real_escape_string($enlace, $data['tipoDocumento']);
    $numeroDocumento = mysqli_real_escape_string($enlace, $data['numeroDocumento']);
    $nombres = mysqli_real_escape_string($enlace, $data['nombres']);
    $apellidoPaterno = mysqli_real_escape_string($enlace, $data['apellidoPaterno']);
    $apellidoMaterno = mysqli_real_escape_string($enlace, $data['apellidoMaterno']);
    $email = mysqli_real_escape_string($enlace, $data['email']);
    $telefono = mysqli_real_escape_string($enlace, $data['telefono']);
    $departamento = mysqli_real_escape_string($enlace, $data['departamento']);
    $provincia = mysqli_real_escape_string($enlace, $data['provincia']);
    $distrito = mysqli_real_escape_string($enlace, $data['distrito']);
    $tipo = mysqli_real_escape_string($enlace, $data['tipo']);
    $subtipo = mysqli_real_escape_string($enlace, $data['subtipo']);
    $motivo = mysqli_real_escape_string($enlace, $data['motivo']);
    $descripcion = isset($data['descripcion']) ? mysqli_real_escape_string($enlace, $data['descripcion']) : null;

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO libro_reclamaciones (tipoDocumento, numeroDocumento, nombres, apellidoPaterno, apellidoMaterno, 
            email, telefono, departamento, provincia, distrito, tipo, subtipo, motivo, descripcion) 
            VALUES ('$tipoDocumento', '$numeroDocumento', '$nombres', '$apellidoPaterno', '$apellidoMaterno', 
                    '$email', '$telefono', '$departamento', '$provincia', '$distrito', '$tipo', '$subtipo', '$motivo', '$descripcion')";

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
