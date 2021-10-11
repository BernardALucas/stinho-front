import React from "react";
import "./Header.css"

function Header(){
    return(
        <div className = "base">
                <h1>Stinho</h1>

                <div className = "botoes">
                    <button>Home</button>
                    <button>Store</button>
                    <button>Biblioteca</button>
                    <button>Entrar</button>
                </div>
                
        </div>
    )
}

export default Header;