<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zumate_db";  // Cambia esto si tu base de datos tiene otro nombre

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verifica si se recibió una imagen
if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
    $nombreArchivo = $_FILES['imagen']['name'];
    $rutaTemporal = $_FILES['imagen']['tmp_name'];
    $directorioDestino = 'imagenes/';

    // Crea el directorio si no existe
    if (!file_exists($directorioDestino)) {
        mkdir($directorioDestino, 0777, true);
    }

    $rutaArchivo = $directorioDestino . basename($nombreArchivo);

    if (move_uploaded_file($rutaTemporal, $rutaArchivo)) {
        // Verifica si se recibió la URL del aliado
        if (isset($_POST['url']) && !empty($_POST['url'])) {
            $url = $_POST['url'];

            // Verifica que la URL sea válida
            if (filter_var($url, FILTER_VALIDATE_URL)) {
                // Guardar la imagen y la URL en la base de datos
                $sql = "INSERT INTO imagenes (nombre_archivo, ruta_archivo, url_aliado) VALUES (?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("sss", $nombreArchivo, $rutaArchivo, $url);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Imagen y URL guardadas exitosamente"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al guardar en la base de datos"]);
                }
                $stmt->close();
            } else {
                echo json_encode(["status" => "error", "message" => "La URL proporcionada no es válida"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "No se recibió una URL de aliado"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Error al mover el archivo"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "No se recibió una imagen válida"]);
}

$conn->close();
?>
