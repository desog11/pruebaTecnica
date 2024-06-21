export class Productos {
    public datos: Dato[] | undefined 
  }

export  interface Dato {
    id: number
    nombre: string
    descripcion: string
    precio: number
    tipo: number
  }

  