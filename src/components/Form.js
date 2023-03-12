import React, { Component } from "react";
import "../css/Form.css"
import data from "../json/formFields.json"

class Form extends Component{
    
    render(){
        console.log(this.props.handleChange)
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
                            key={e.name}
                            type={e.type}
                            name={e.name}
                            placeholder={e.name}
                            onChange={this.props.HandleChange}
                            required
                            />
                        )
                    }
                    else{
                        return(
                            <input 
                            key={e.name}
                            type={e.type}
                            name={e.name}
                            onChange={this.props.HandleChange}
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