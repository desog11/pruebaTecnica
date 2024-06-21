import {Productos} from "../Interfaces/obtieneProds.interface";

async function obtieneProductos(): Promise<Productos[]> {
    const response = await fetch('http://localhost:3001/api/productos');
    const data = await response.json();
    return data;
  }

  export default obtieneProductos