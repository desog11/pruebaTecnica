import {Request,Response} from 'express'
import connection from '../db/connection'

export const insertaUsuarios = (req:Request,res:Response)=>{
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.headers.origin && ["http://34.125.179.240:8080/", "http://localhost:8080/", "http://192.168.64.2:8080/","http://0.0.0.0:8080/"].includes(req.headers.origin)) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      }
    let fecha = FechaConvierte(req.body.fecha)
    connection.query('CALL sp_maneja_eventos(\'IUS\', ?, NULL,NULL, ?, NULL, NULL, ?, NULL, NULL, NULL,NULL,?);',[req.body.nombre, fecha,req.body.correo_electronico,req.body.apellido],
        (err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({
                error: 'ERROR EN LA CONEXIÓN A BD INTENTE MÁS TARDE'
            })
        }else{
         
            res.json({
                codigo : 0,
                mensaje: 'REGISTRO EXITOSO'
            });
        }
    });

    function FechaConvierte(fecha:string):string{
        let date = new Date(fecha);
        return date.toISOString().slice(0, 19).replace('T', ' ')
    }
}