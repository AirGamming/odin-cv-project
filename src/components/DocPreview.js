import React, { Component } from "react";
import "../css/doc.css";
import placeholder from "../images/Portrait_Placeholder.png" 

class DocPreview extends Component {
    constructor(props){
        super (props)
        this.state= {
            data: [

            ]
        }
    }
    
    render(){
    return(
        <div id="docPreview">
            <div className="header">
                <img
                src={placeholder} 
                alt="profile placeholder" 
                height="96px"
                />
                <div >
                <h2>{this.state.data.map(i => i.name === "firstName" ? i.value : null)}</h2>
                <i>Junior Frontend Developer</i>
                </div>
            </div>
            <div className="aside">
            </div>
        </div>
    )
}
}


export default DocPreview;
