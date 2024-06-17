use Disagro;

-- Creación de la tabla `usuarios`
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) UNIQUE NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  fecha_registro DATETIME NOT NULL
);

-- Creación de la tabla `eventos`
CREATE TABLE eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  ubicacion VARCHAR(255) NOT NULL
);

-- Creación de la tabla `asistencias`
CREATE TABLE asistencias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  id_evento INT NOT NULL,
  FOREIGN KEY (id_evento) REFERENCES eventos(id),
  fecha_confirmacion DATETIME NOT NULL
);

-- Creación de la tabla `intereses`
CREATE TABLE intereses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  id_servicio INT NOT NULL,
  FOREIGN KEY (id_servicio) REFERENCES servicios(id),
  id_producto INT NOT NULL,
  FOREIGN KEY (id_producto) REFERENCES productos(id)
);

CREATE TABLE servicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

-- Creación de la tabla `productos`
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

-- Creación de la tabla `promociones`
CREATE TABLE promociones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_servicio INT NOT NULL,
  FOREIGN KEY (id_servicio) REFERENCES servicios(id),
  descuento DECIMAL(10,2) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  CHECK (descuento BETWEEN 0 AND 100)
);

-- Creación de la tabla `portafolios_promociones`
CREATE TABLE portfolios_promociones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  id_promocion INT NOT NULL,
  FOREIGN KEY (id_promocion) REFERENCES promociones(id)
);


