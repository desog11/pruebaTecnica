import {Request,Response} from 'express'
import connection from '../db/connection'

export const insProds = (req:Request,res:Response)=>{
    connection.query('CALL sp_maneja_eventos(\'IPS\', ?, ?,?, NULL, NULL, NULL, NULL, NULL, NULL, NULL,?);',[req.body.nombre, req.body.descripcion,req.body.precio,req.body.tipo]
        ,(err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({
                error: 'ERROR AL INSERTAR PRODUCTOS INTENTE MÁS TARDE'
            })
        }else{
            let mensaje =''
            if(req.body.tipo == 1){
                mensaje = 'PRODUCTO INSERTADO CON ÉXITO'
            }else{
                mensaje = 'SEVICIO INSERTADO CON ÉXITO'
            }
            res.status(200).json({
                mensaje
            })
        }
    });
   
}