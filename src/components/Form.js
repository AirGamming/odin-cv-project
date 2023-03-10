import React, { Component } from "react";
import "../css/Form.css"
import data from "./formFields.json"

class Form extends Component{
    render(){
        return(
        <form>
            {data.map((el) =>{
            return( 
            <fieldset id={el.name}>
            <legend>{el.name}</legend>
                {el.components.map(e =>{
                    if(e.required){
                        return(
                            <input 
                            type={e.type}
                            name={e.name}
                            placeholder={e.name}
                            required  
                            />
                        )
                    }
                    else{
                        return(
                            <input 
                            type={e.type}
                            name={e.name}
                            placeholder={e.name}
                            />
                    )
                }
                })                
                }
            </fieldset>
            )
            }
            )}
        </form>
        )
    }
}


export default Form;