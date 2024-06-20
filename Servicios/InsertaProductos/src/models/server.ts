import express, {Application} from "express";
import connection from "../db/connection";
import router from "../routes/insProds.routes";
import bodyParser from "body-parser"
class Server {

    private app : Application
    private port : string
    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3000'
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.raw());
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
        this.app.use('/api/insertaProds',router)
    }

}

export default Server 