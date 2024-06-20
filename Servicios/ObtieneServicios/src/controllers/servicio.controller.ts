import {Request,Response} from 'express'
import connection from '../db/connection'

export const getServicios = (req:Request,res:Response)=>{
    connection.query('CALL sp_maneja_eventos(\'OS\', NULL, NULL,NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);',(err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({
                error: 'ERROR AL CONSULTAR SERVICIOS INTENTE MÁS TARDE'
            })
        }else{
            res.json({
                data
            });
        }
    });
}