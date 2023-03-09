import React from "react";
import "./Form.css"


const Form = () =>{


    return(
        <form>
            <fieldset id="personal">
            <legend>Personal info</legend>
                <label htmlFor="firstName">First Name</label>
                <input required
                type="text" 
                name="firtName" 
                id="firstName" 
                />
                text
                
                <label htmlFor="email">Last Name</label>
                <input required
                type="text" 
                name="lastName" 
                id="lastName" 
                />

                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                name="title" 
                id="title" 
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

                <label htmlFor="photo">Photo</label>
                <input type="file" />
                <label htmlFor="adress">Adress</label>
                <input 
                type="text" 
                name="adress" 
                id="adress" 
                />

            </fieldset >
  

            <fieldset id="expirience">
            <legend>expirience</legend>
                
                <label htmlFor="position">Position</label>
                <input 
                type="text" 
                name="position" 
                id="position"/>

                <label htmlFor="from">From (year only)</label>
                <input 
                type="text"
                name="from" 
                id="from"/>

                <label htmlFor="from">To (year only)</label>
                <input 
                type="text"
                name="to" 
                id="to"/>
            </fieldset>

            <button type="submit">submit</button>
        </form>
    )
}

export default Form