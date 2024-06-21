import express, {Application} from "express";
import connection from "../db/connection";
import router from "../routes/producto.routes";
import cors from "cors";
class Server {

    private app : Application
    private port : string
    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3000'
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor Corriendo en puerto: ', this.port)
        })
    }

    conectDb(){
        
        connection.connect((err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("EXITO")
            }
        });
    }

    routes(){
        this.app.use(cors({
            origin: ["http://34.125.179.240:8080/", "http://localhost:8080/", "http://192.168.208.2:8080/","http://0.0.0.0:8080/"],
            methods: ["GET","POST"]
        }))
        this.app.use('/api/productos',router)
    }

}

export default Server 