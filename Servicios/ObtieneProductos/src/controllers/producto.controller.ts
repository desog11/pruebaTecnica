import {Request,Response} from 'express'
import connection from '../db/connection'

export const getProductos = (req:Request,res:Response)=>{
    connection.query('CALL sp_maneja_eventos(\'OPS\', NULL, NULL,NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,NULL,NULL);',(err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({
                error: 'ERROR EN LA CONEXIÓN A BD INTENTE MÁS TARDE'
            })
        }else{
            let datos = data[0];
            res.json({
                datos
            });
        }
    });
}