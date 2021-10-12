import React from "react";
import "./Login.css";

function Login(){
    return(
       <div className="base">
        <div className="logo">
            <img src="/images/logo.png" alt="logo(1)"/>
            <div className="inputs">
                <input></input>
                <input></input>
                <button>login</button> 
            </div>
        </div>  
       </div> 

);

}

export default Login;