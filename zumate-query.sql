CREATE DATABASE zumate_db;
USE zumate_db;

CREATE TABLE entrega_presencial (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    dni VARCHAR(8) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    tipo_donacion VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE recoleccion_domicilio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    dni VARCHAR(8) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    departamento VARCHAR(30) NOT NULL,
    provincia VARCHAR(30) NOT NULL,
    distrito VARCHAR(30) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    tipo_donacion VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE patrocinar_proyecto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreEmpresa VARCHAR(50) NOT NULL,
    ruc VARCHAR(11) NOT NULL,
    email VARCHAR(50) NOT NULL,
    razonSocial VARCHAR(50) NOT NULL,
    nombreRep VARCHAR(50) NOT NULL,
    apellidosRep VARCHAR(50) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    proyecto VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE participar_chocolatada (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    dni VARCHAR(8) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    preferencia VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE participar_evento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    dni VARCHAR(8) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    eventos VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* PROGRAMA PASANTIA*/
CREATE TABLE institucion (
    id VARCHAR(30) PRIMARY KEY, /*Por ejemplo: "INST001"*/
    nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE carrera (
    id VARCHAR(30) PRIMARY KEY, /*Por ejemplo: "CARR001"*/
    nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE programa_pasantia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    dni CHAR(8) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    institucion_id VARCHAR(30) NOT NULL,
    carrera_id VARCHAR(30) NOT NULL,
    ciclo VARCHAR(10) NOT NULL,
    horas varchar(40) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (institucion_id) REFERENCES institucion(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (carrera_id) REFERENCES carrera(id) ON DELETE CASCADE ON UPDATE CASCADE
);



/****************************************************************/
CREATE TABLE libro_reclamaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipoDocumento VARCHAR(10) NOT NULL,
    numeroDocumento VARCHAR(12) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidoPaterno VARCHAR(20) NOT NULL,
    apellidoMaterno VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    departamento VARCHAR(50) NOT NULL,
    provincia VARCHAR(50) NOT NULL,
    distrito VARCHAR(50) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    subtipo VARCHAR(20) NOT NULL,
    motivo VARCHAR(50) NOT NULL,
    descripcion TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE contacto (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
apellidos VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
telefono VARCHAR(9) NOT NULL,
mensaje TEXT,
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  rol ENUM('admin', 'usuario', 'supervisor') NOT NULL DEFAULT 'usuario',
  estado ENUM('activo', 'inactivo') NOT NULL DEFAULT 'activo'
);


INSERT INTO usuarios (usuario, password, nombre, apellidos, email, rol, estado) 
VALUES ('jimenez', '123456789', 'Juan', 'Jiménez', 'jimenez@gmail.com', 'admin', 'activo');

INSERT INTO usuarios (usuario, password, nombre, apellidos, email, rol, estado) 
VALUES ('risco', '23456789', 'Manuel', 'Risco', 'risco@gmail.com', 'admin', 'activo');


CREATE TABLE imagenes (	
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_archivo VARCHAR(255) NOT NULL,
  ruta_archivo VARCHAR(255) NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  url_aliado VARCHAR(255) NOT NULL
);

INSERT INTO institucion (id, nombre) VALUES
    ('INST001', 'Universidad Nacional Mayor de San Marcos'),
    ('INST002', 'Universidad Nacional de Ingeniería'),
    ('INST003', 'Universidad Nacional Agraria La Molina'),
    ('INST004', 'Universidad Nacional de San Antonio Abad del Cusco'),
    ('INST005', 'Universidad Nacional de Trujillo'),
    ('INST006', 'Universidad Nacional de San Agustín de Arequipa'),
    ('INST007', 'Universidad Nacional del Altiplano'),
    ('INST008', 'Universidad Nacional de Piura'),
    ('INST009', 'Universidad Nacional de la Amazonía Peruana'),
    ('INST010', 'Universidad Nacional de San Martín'),
    ('INST011', 'Universidad Nacional de Ucayali'),
    ('INST012', 'Universidad Nacional de Tumbes'),
    ('INST013', 'Universidad Nacional del Santa'),
    ('INST014', 'Universidad Nacional de Huancavelica'),
    ('INST015', 'Universidad Nacional Amazónica de Madre de Dios'),
    ('INST016', 'Universidad Nacional Tecnológica de Lima Sur'),
    ('INST017', 'Universidad Nacional José María Arguedas'),
    ('INST018', 'Universidad Nacional de Moquegua'),
    ('INST019', 'Universidad Nacional de Juliaca'),
    ('INST020', 'Universidad Nacional de Jaén'),
    ('INST021', 'Universidad Nacional de Barranca'),
    ('INST022', 'Universidad Nacional de Cañete'),
    ('INST023', 'Universidad Nacional de Frontera'),
    ('INST024', 'Universidad Nacional de Chota'),
    ('INST025', 'Universidad Nacional de Huancabamba'),
    ('INST026', 'Universidad Nacional de Huaraz'),
    ('INST027', 'Universidad Nacional Autónoma de Camaná'),
    ('INST028', 'Universidad Nacional Autónoma de Chiclayo'),
    ('INST029', 'Universidad Nacional Autónoma de Olmos'),
    ('INST030', 'Universidad Nacional Autónoma de Padre Abad de Ucayali'),
    ('INST031', 'Universidad Nacional de Ayaviri'),
    ('INST032', 'Universidad Nacional de Chincheros'),
    ('INST033', 'Universidad Nacional de Chumbivilcas'),
	('INST034', 'Pontificia Universidad Católica del Perú'),
    ('INST035', 'Universidad Peruana Cayetano Heredia'),
    ('INST036', 'Universidad Católica de Santa María'),
    ('INST037', 'Universidad del Pacífico'),
    ('INST038', 'Universidad de Lima'),
    ('INST039', 'Universidad de San Martín de Porres'),
    ('INST040', 'Universidad Peruana de Ciencias Aplicadas'),
    ('INST041', 'Universidad Científica del Sur'),
    ('INST042', 'Universidad San Ignacio de Loyola'),
    ('INST043', 'Universidad Ricardo Palma'),
    ('INST044', 'Universidad César Vallejo'),
    ('INST045', 'Universidad Privada del Norte'),
    ('INST046', 'Universidad Tecnológica del Perú'),
    ('INST047', 'Universidad Continental'),
    ('INST048', 'Universidad Privada Antenor Orrego'),
    ('INST049', 'Universidad Católica San Pablo'),
    ('INST050', 'Universidad Católica Los Ángeles de Chimbote'),
    ('INST051', 'Universidad Católica Sedes Sapientiae'),
    ('INST052', 'Universidad Privada de Tacna'),
    ('INST053', 'Universidad Privada de Piura'),
    ('INST054', 'Universidad Andina del Cusco'),
    ('INST055', 'Universidad Peruana Unión'),
    ('INST056', 'Universidad Nacional de Música'),
    ('INST057', 'Universidad Nacional Federico Villarreal'),
    ('INST058', 'Universidad Nacional Hermilio Valdizán de Huánuco'),
    ('INST059', 'Universidad Nacional Daniel Alcides Carrión'),
    ('INST060', 'Universidad Nacional del Callao'),
    ('INST061', 'Universidad Nacional Pedro Ruiz Gallo');
    
INSERT INTO carrera (id, nombre) VALUES
    ('CARR001', 'Administración de Empresas'),
    ('CARR002', 'Administración Pública'),
    ('CARR003', 'Agronomía'),
    ('CARR004', 'Antropología'),
    ('CARR005', 'Arqueología'),
    ('CARR006', 'Arquitectura'),
    ('CARR007', 'Arte y Diseño Gráfico Empresarial'),
    ('CARR008', 'Artes Escénicas'),
    ('CARR009', 'Artes Plásticas y Visuales'),
    ('CARR010', 'Biología'),
    ('CARR011', 'Ciencia Política'),
    ('CARR012', 'Ciencia de la Computación'),
    ('CARR013', 'Ciencias de la Comunicación'),
    ('CARR014', 'Ciencias de la Educación'),
    ('CARR015', 'Ciencias de la Información'),
    ('CARR016', 'Ciencias Forestales'),
    ('CARR017', 'Contabilidad'),
    ('CARR018', 'Derecho'),
    ('CARR019', 'Economía'),
    ('CARR020', 'Educación Inicial'),
    ('CARR021', 'Educación Primaria'),
    ('CARR022', 'Educación Secundaria'),
    ('CARR023', 'Enfermería'),
    ('CARR024', 'Estadística'),
    ('CARR025', 'Farmacia y Bioquímica'),
    ('CARR026', 'Filosofía'),
    ('CARR027', 'Física'),
    ('CARR028', 'Geografía'),
    ('CARR029', 'Geología'),
    ('CARR030', 'Historia'),
    ('CARR031', 'Ingeniería Agrícola'),
    ('CARR032', 'Ingeniería Agroindustrial'),
    ('CARR033', 'Ingeniería Ambiental'),
    ('CARR034', 'Ingeniería Civil'),
    ('CARR035', 'Ingeniería de Minas'),
    ('CARR036', 'Ingeniería de Petróleo'),
    ('CARR037', 'Ingeniería de Sistemas'),
    ('CARR038', 'Ingeniería Electrónica'),
    ('CARR039', 'Ingeniería Eléctrica'),
    ('CARR040', 'Ingeniería Forestal'),
    ('CARR041', 'Ingeniería Industrial'),
    ('CARR042', 'Ingeniería Mecánica'),
    ('CARR043', 'Ingeniería Mecatrónica'),
    ('CARR044', 'Ingeniería Metalúrgica'),
    ('CARR045', 'Ingeniería Pesquera'),
    ('CARR046', 'Ingeniería Química'),
    ('CARR047', 'Ingeniería Textil'),
    ('CARR048', 'Lingüística'),
    ('CARR049', 'Literatura'),
    ('CARR050', 'Matemática'),
    ('CARR051', 'Medicina Humana'),
    ('CARR052', 'Medicina Veterinaria'),
    ('CARR053', 'Microbiología y Parasitología'),
    ('CARR054', 'Nutrición'),
    ('CARR055', 'Obstetricia'),
    ('CARR056', 'Odontología'),
    ('CARR057', 'Periodismo'),
    ('CARR058', 'Psicología'),
    ('CARR059', 'Química'),
    ('CARR060', 'Sociología'),
    ('CARR061', 'Trabajo Social'),
    ('CARR062', 'Turismo y Hotelería'),
    ('CARR063', 'Zootecnia');
