import React, { useState, useRef, useEffect } from "react";
import "./Biblioteca.css";
import Footer from "../../Footer";
import Header from "../../Header";
import { useHistory } from "react-router-dom";


function Biblioteca() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jogos.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    return (

        <div className="page-biblioteca">
            {Header()}
            <div classname="base-biblioteca">
                <div className="fileira-biblioteca">
                    {data.map((iten) => {
                        console.log(data);

                        const { id, name, price, oldPrice, image, desenvolvedor, genero } = iten;

                        return (
                            <div className="botao-jogos-biblioteca">
                                <img src={image} className="img-biblioteca" alt={name} />

                                <div className="titulo-jogo1-biblioteca">
                                    <h1>{name}</h1>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
            {Footer()}
        </div>
    );

}

export default Biblioteca;