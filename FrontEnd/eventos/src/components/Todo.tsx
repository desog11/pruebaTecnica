import React, { useState } from "react";
import {Dato} from "../Interfaces/obtieneProds.interface"

type Props = Dato
export const Todo: React.FC <Props> = ({nombre,precio,id}) => {
    const formato = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    });
    
    const precioMostrar = formato.format(precio).replace("$","Q.");

    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // Destructuring
        const { value, checked,name } = e.target;
        const { languages } = userinfo;

        console.log(`${name} con precio: ${value} is ${checked}`);
        
        // Case 1 : The user checks the box
        if (checked) {
            console.log("CLICK")
            
        }

        // Case 2  : The user unchecks the box
        else {
            setUserInfo({
                languages: languages.filter(
                    (e) => e !== value
                ),
                response: languages.filter(
                    (e) => e !== value
                ),
            });
        }
    };

    return (
        <div className="user_container">
            <div className="user_info">

            
        <input
            className="option1"
            type="checkbox"
            value={precio}
            name = {id.toString()}
            onChange={
                handleChange}
            />
            <h4 >{nombre} </h4>
            <small>{precioMostrar}</small>
             
            </div>
        </div>
    )
}