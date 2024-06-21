USE Disagro;

DROP PROCEDURE IF EXISTS sp_maneja_eventos;
GO
Delimiter $$
CREATE PROCEDURE sp_maneja_eventos (
pOperacion			CHAR(3),
pNombre 			VARCHAR(255),
pDescripcion 		TEXT,
pPrecio				DECIMAL(10,2),
pFecha				DATETIME,
pHora				TIME,
pUbicacion			VARCHAR(255),
pCorreoElectronico	VARCHAR(255),
pContrasena			VARCHAR(255),
pUsuario			INT,
pServicioProducto		INT,
pTipo				INT,
pApellido			VARCHAR(255)
)
BEGIN
  IF pOperacion = "IEN" THEN  -- INSERTA EVENTOS NUEVOS
    INSERT INTO eventos (nombre, fecha, hora, ubicacion)
  VALUES (pNombre, pFecha, pHora, pUbicacion);
  END IF;
  IF pOperacion = "IUS" THEN  -- INSERTA USUARIOS NUEVOS
    INSERT INTO usuarios (nombre, apellido, correo_electronico, fecha_registro)
  VALUES (pNombre,pApellido, pCorreoElectronico, pFecha);
  END IF;
  IF pOperacion = "IPS" THEN  -- INSERTA PRODUCTOS SERVICIOS NUEVOS
    INSERT INTO productos_servicios (nombre, descripcion, precio,tipo) -- 1 producto 2 servicio
  VALUES (pNombre, pDescripcion, pPrecio,pTipo);
  END IF;
  
  IF pOperacion = "IIN" THEN  -- INSERTA INTERESES NUEVOS
    INSERT INTO intereses (id_usuario, id_producto_servicio,total)
  VALUES (pIdUsuario, pServicioProducto,pPrecio);
  END IF;
  
  IF pOperacion = "OI" THEN  -- OBTIENE INTERESES
    SELECT s.nombre, s.descripcion, s.precio
	  FROM productos_servicios s, intereses i
	  WHERE i.id_producto_servicio = s.id
	  AND i.id_usuario = pIdUsuario;
  END IF;
  
  
  IF pOperacion = "OPS" THEN  -- OBTIENE PRODUCTOS
    SELECT id, nombre, descripcion, precio, tipo
		FROM productos_servicios;
  END IF;
  
  IF pOperacion = "LU" THEN  -- LOGIN USUARIOS
    SELECT id, nombre, correo_electronico, fecha_registro
	  FROM usuarios
	  WHERE correo_electronico = pCorreoElectronico
	  AND contrasena = pContrasena;
  END IF;
  
END$$

