import React from "react";
import "./Header.css"

function Header(){
    return(

        <div className = "container">
            
            <div className = "base">
                <div className="logo">
                    <img src="./images/logo_header.png" alt= "Stinho"/> 
                </div>

                <div className = "botoes">
                    <div className = "home"><button class = "btn">Home</button></div>
                    <div className = "store"><button class = "btn">Store</button></div>
                    <div className = "biblioteca"><button class = "btn">Biblioteca</button></div>
                    <div className = "entrar"><button class = "btn" >Entrar</button></div>
                </div>
            </div>
            
        </div>

        
    )
}

export default Header;