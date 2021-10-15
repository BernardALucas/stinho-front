import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

    return(   
            <div className = "base-header">
                <div className="logo-header">
                    <img src="./images/logo_header.png" alt= "Stinho"/> 
                </div>

                <div className = "botoes-header">
                    <div className = "home-header"><button onClick = {()=>{history.push("home");}} class = "btn-header">Home</button></div>
                    <div className = "store-header"><button onClick = {()=>{history.push("store");}} class = "btn-header">Store</button></div>
                    <div className = "biblioteca-header"><button onClick = {()=>{history.push("biblioteca");}} class = "btn-header">Biblioteca</button></div>
                    <div className = "entrar-header"><button onClick = {()=>{history.push("login");}} class = "btn-header" >Entrar</button></div>
                </div>
            </div>           
    )
}

export default Header;
