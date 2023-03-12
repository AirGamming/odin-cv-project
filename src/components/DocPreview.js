import React from "react";
import "../css/doc.css";
import placeholder from "../images/Portrait_Placeholder.png" 

const DocPreview = (props) => {

    // let {data} = props

    return(
        <div id="docPreview">
            <div className="header">
                <img
                src={placeholder} 
                alt="profile placeholder" 
                height="96px"
                />
                <div >
                <h2>LOREM IPSUM</h2>
                <i>Junior Frontend Developer</i>
                </div>
            </div>
            <div className="aside">

            </div>
        </div>
    )
}

export default DocPreview;
