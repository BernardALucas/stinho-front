import React from "react";
import "./Header.css";

function Header() {

    return(   
            <div className = "base-header">
                <div className="logo-header">
                    <img src="./images/logo_header.png" alt= "Stinho"/> 
                </div>

                <div className = "botoes-header">
                    <div className = "home-header"><button onClick = {()=>{window.location.href = "/home";}} class = "btn-header">Home</button></div>
                    <div className = "store-header"><button onClick = {()=>{window.location.href = "/store";}} class = "btn-header">Store</button></div>
                    <div className = "biblioteca-header"><button onClick = {()=>{window.location.href = "/biblioteca";}} class = "btn-header">Biblioteca</button></div>
                    <div className = "entrar-header"><button onClick = {()=>{window.location.href = "/login";}} class = "btn-header" >Entrar</button></div>
                </div>
            </div>           
    )
}

export default Header;
