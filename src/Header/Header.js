import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom"

function Header(){
    const history = useHistory();

    return(   
            <div className = "base">
                <div className="logo">
                    <img src="./images/logo_header.png" alt= "Stinho"/> 
                </div>

                <div className = "botoes">
                    <div className = "home"><button onClick = {()=>{history.push("home");}} class = "btn">Home</button></div>
                    <div className = "store"><button onClick = {()=>{history.push("store");}} class = "btn">Store</button></div>
                    <div className = "biblioteca"><button onClick = {()=>{history.push("biblioteca");}} class = "btn">Biblioteca</button></div>
                    <div className = "entrar"><button onClick = {()=>{history.push("login");}} class = "btn" >Entrar</button></div>
                </div>
            </div>           
    )
}

export default Header;