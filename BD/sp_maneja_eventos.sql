USE Disagro;

DROP PROCEDURE IF EXISTS sp_maneja_eventos;
GO
Delimiter $$
CREATE PROCEDURE sp_maneja_eventos (
pOperacion			CHAR(3),
pNombre 			VARCHAR(255),
pDescripcion 		TEXT,
pPrecio				DECIMAL(10,2),
pFecha				DATE,
pHora				TIME,
pUbicacion			VARCHAR(255),
pCorreoElectronico	VARCHAR(255),
pContrasena			VARCHAR(255),
pUsuario			INT,
pServicio			INT
)
BEGIN
  IF pOperacion = "ISN" THEN  -- INSERTA SERVICIOS NUEVOS
    INSERT INTO servicios (nombre, descripcion, precio)
    VALUES (pNombre, pDescripcion, pPrecio);
  END IF;
  IF pOperacion = "IEN" THEN  -- INSERTA EVENTOS NUEVOS
    INSERT INTO eventos (nombre, fecha, hora, ubicacion)
  VALUES (pNombre, pFecha, pHora, pUbicacion);
  END IF;
  IF pOperacion = "IUS" THEN  -- INSERTA USUARIOS NUEVOS
    INSERT INTO usuarios (nombre, correo_electronico, contrasena)
  VALUES (pNombre, pCorreoElectronico, pContrasena);
  END IF;
  IF pOperacion = "IPN" THEN  -- INSERTA PRODUCTOS NUEVOS
    INSERT INTO productos (nombre, descripcion, precio)
  VALUES (pNombre, pDescripcion, pPrecio);
  END IF;
  
  IF pOperacion = "IIN" THEN  -- INSERTA INTERESES NUEVOS
    INSERT INTO intereses (id_usuario, id_servicio)
  VALUES (pIdUsuario, pIdServicio);
  END IF;
  
  IF pOperacion = "OI" THEN  -- OBTIENE INTERESES
    SELECT s.nombre, s.descripcion, s.precio
	  FROM servicios s, intereses i
	  WHERE i.id_servicio = s.id
	  AND i.id_usuario = pIdUsuario;
  END IF;
  
  IF pOperacion = "OS" THEN  -- OBTIENE SERVICIOS
    SELECT id, nombre, descripcion, precio
		FROM servicios;
  END IF;
  
  IF pOperacion = "OP" THEN  -- OBTIENE PRODUCTOS
    SELECT id, nombre, descripcion, precio
		FROM productos;
  END IF;
  
  IF pOperacion = "LU" THEN  -- LOGIN USUARIOS
    SELECT id, nombre, correo_electronico, fecha_registro
	  FROM usuarios
	  WHERE correo_electronico = pCorreoElectronico
	  AND contrasena = pContrasena;
  END IF;
  
END$$

