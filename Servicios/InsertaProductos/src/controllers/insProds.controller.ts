import {Request,Response} from 'express'
import connection from '../db/connection'

export const insProds = (req:Request,res:Response)=>{
    connection.query('CALL sp_maneja_eventos(\'IPN\', ?, ?,?, NULL, NULL, NULL, NULL, NULL, NULL, NULL);',[req.body.nombre, req.body.descripcion,req.body.precio]
        ,(err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({
                error: 'ERROR AL INSERTAR PRODUCTOS INTENTE MÁS TARDE'
            })
        }else{
            res.status(200).json({
                mensaje: 'PRODUCTO INSERTADO CON ÉXITO'
            })
        }
    });
   
}