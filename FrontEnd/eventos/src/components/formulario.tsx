import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import React, { useState } from "react";

const Formulario = () =>{
    const [nombre, setNombre] = useState(""); 
 const [apellido, setApellido] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [fechaHora, setFechaHora] = useState(""); 

const clearForm = () => { 
    setNombre(""); 
    setApellido(""); 
    setEmail(""); 
    setFechaHora("");
    
  }; 

  const verificaDatos = () => {
        if(nombre!="" && apellido !="" && email!= "" && fechaHora != ""){
            return true;
        }
        return false;
  }

  const guardarDatos = async () =>{
  const client = axios.create({
  baseURL: 'http://localhost:3004',
});

    const config: AxiosRequestConfig = {
        headers: {
            'Accept': 'application/json'
        } as RawAxiosRequestHeaders
    };
    if(verificaDatos()){

    
    try {
        const data = {
            'nombre': nombre,
            'apellido': apellido,
            'correo_electronico': email,
            'fecha': fechaHora
        }
        const response: AxiosResponse = await client.post(`/api/usuarios`,data,config);
        console.log(response.status)
        console.log(response.data.json);
        if(response.status==200){
            alert("Datos Guardados");
        }else{
            alert("Ocurrió un error al guardar los datos, intente más tarde");
        }
        
    } catch (error) {
        console.log(error);
    }
}else{
    alert("Existen campos vacíos, por favor complete sus datos")
}
  }

const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    guardarDatos();
     
    clearForm(); 
  }; 

    return (
        <form className="fromGroup" onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Ingrese su información</h2> 
         <div className="Field"> 
           <label> 
             Nombre <sup>*</sup> 
           </label> 
           <input 
              value={nombre} 
             onChange={(e) => { 
               setNombre(e.target.value); 
             }} 
             placeholder="Introduzca su nombre" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Apellidos</label> 
           <input 
             value={apellido} 
             onChange={(e) => { 
               setApellido(e.target.value); 
             }} 
             placeholder="Introduzca sus apellidos" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email <sup>*</sup> 
           </label> 
           <input 
           type="email"
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Introduzca su Email" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Fecha y Hora <sup>*</sup> 
           </label> 
           <input 
            //  value={password.value} 
              type="datetime-local" 
              onChange={(e) => { 
                setFechaHora(e.target.value); 
              }} 
             placeholder="Seleccione Fecha y Hora en que asistirá" 
           /> 
           
         </div> 
         
         <button type="submit" > 
           Create account 
         </button> 
       </fieldset> 

       <button className="buttonEnviar">
        confirma asistencia
      </button>
     </form> 
    )
}
export default Formulario