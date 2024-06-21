import {Productos} from "../Interfaces/obtieneProds.interface"
import { Todo } from "./Todo"





interface Props {
    todos:Productos | undefined
}

export const Todos: React.FC<Props> = ({todos}) => {
    return (
        <div className="users_container">
            
             {todos?.datos?.map((todo) => (
                <Todo
                    key = {todo.id}
                    id = {todo.id}
                    nombre = {todo.nombre}
                    precio = {todo.precio}
                    descripcion={todo.descripcion}
                    tipo = {todo.tipo}
                />
                ))} 
        </div>
    )
}