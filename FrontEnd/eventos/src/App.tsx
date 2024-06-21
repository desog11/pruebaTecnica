import { useEffect, useState } from "react";
import axios from "axios";
import {Productos} from "./Interfaces/obtieneProds.interface";
import { Todos } from "./components/Todos";
import Header from "./components/header";
import Formulario from "./components/formulario";


const App = (): JSX.Element => { 
  const [todos,setTodos] = useState<Productos>();
  const [filteredtodos,setFilteredTodos] = useState<Productos>();
  useEffect(() => {
    axios.get<Productos>("http://34.125.179.240:3001/api/productos").then((response) => {setTodos(response.data); setFilteredTodos(response.data)})
    
  },[]);
  
  const dato1 : Productos = new Productos();


  //Busqueda
  
  const filterProductos= ((searchValue:string) =>{
    
    const results = todos?.datos?.filter(producto => {
      const nombre = producto.nombre;
      if(nombre.toLowerCase().includes(searchValue.toLowerCase())){
        
        return producto
      }
    });
    dato1.datos = results
      setFilteredTodos(dato1)
  });

  return (
    // <div className="App">
    //    {/* {todos?.datos.map((todo) => (<li>{todo.nombre}</li>))}  */}

    //   </div>
    
    <div className="container">
    
    <div className="right">
    <Header  filterProductos = {filterProductos}/>
    <Todos todos={filteredtodos}/>
    
    
    </div>
    <div className="left">
    <Formulario/>
      
    </div>
    </div>
  );
   

  
}

export default App
