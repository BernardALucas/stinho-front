import React from "react";
import "./Header.css"

function Header(){
    return(

        <div className = "container">
            
            <div className="logo">
                    <img src="./images/logo_header.png" alt= "Stinho"/> 
                </div>

            <div className = "base">
                <div className = "botoes">
                    <div className = "home"><button>Home</button></div>
                    <div className = "store"><button>Store</button></div>
                    <div className = "biblioteca"><button>Biblioteca</button></div>
                    <div className = "entrar"><button>Entrar</button></div>
                </div>
                
        </div>
        </div>

        
    )
}

export default Header;