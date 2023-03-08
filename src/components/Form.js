import React from "react";
import "./Form.css"

const Form = () =>{


    return(
        <form>
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text" 
            name="firtName" 
            id="firstName" 
            />
            
            <label htmlFor="email">Last Name</label>
            <input 
            type="text" 
            name="lastName" 
            id="lastName" 
            />

            <label htmlFor="email">E-mail Adress</label>
            <input 
            type="email"
            name="email"
            id="email"
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="number" 
            name="phoneNumber" 
            id="phoneNumber" 
            />

            <button type="submit">submit</button>
        </form>
    )
}

export default Form