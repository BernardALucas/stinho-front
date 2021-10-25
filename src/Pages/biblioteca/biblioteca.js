import React, { useState } from "react";
import "./biblioteca.css"
import Footer from "../../Footer";
import Header from "../../Header";
import { useHistory } from "react-router-dom"


function biblioteca(){
    return(
        <div className="page-biblioteca">
            { Header() }
            <div classname="base-biblioteca">
                
                <button className="botao-jogos-biblioteca">
                    <img src="/images/new_world_logo.png" className="img-biblioteca" alt="new_world_logo"/>
                </button>
                <button className="botao-jogos-biblioteca">
                    <img src="/images/new_world_logo.png" className="img-biblioteca" alt="new_world_logo"/>
                </button>
                <button className="botao-jogos-biblioteca">
                    <img src="/images/new_world_logo.png" className="img-biblioteca" alt="new_world_logo"/>
                </button>
 
                <div className="espaco-antes-do-footer">

                </div>
            </div>
            {Footer()}
        </div>
    );
}

export default biblioteca