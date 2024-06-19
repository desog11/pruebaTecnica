import Server from "./src/models/server";
import dotenv from "dotenv"
//configurando variables de entorno
dotenv.config()

const server = new Server()
server.listen();
server.conectDb();
server.routes();