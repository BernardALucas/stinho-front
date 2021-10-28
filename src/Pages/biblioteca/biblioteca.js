import React, { useState,  useRef ,useEffect } from "react";
import "./Biblioteca.css";
import Footer from "../../Footer";
import Header from "../../Header";
import { useHistory } from "react-router-dom";


function Biblioteca(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/jogos.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    return(

        <div className="page-biblioteca">
            { Header() }
            <div classname="base-biblioteca">
                {data.map((iten)=>{
                    console.log(data);

                    const {id, name, price, oldPrice, image, desenvolvedor, genero}=iten;
                    
                    return(
                    <button className="botao-jogos-biblioteca">
                    <img src={image} className="img-biblioteca" alt={name}/>
                
                </button>
                );
                })}
                
                
 
                <div className="espaco-antes-do-footer">

                </div>
            </div>
            {Footer()}
        </div>
    );

}

export default Biblioteca;