import {Productos} from "../Interfaces/obtieneProds.interface";

async function obtieneProductos(): Promise<Productos[]> {
    const response = await fetch('http://127.0.0.1:3001/api/productos');
    const data = await response.json();
    return data;
  }

  export default obtieneProductos