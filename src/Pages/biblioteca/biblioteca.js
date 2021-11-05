import React, { useState, useEffect } from "react";
import "./Biblioteca.css";
import Footer from "../../Footer";
import Header from "../../Header";
import api from "../../services/api";


function Biblioteca() {
    const [data, setData] = useState([]);
    const id = localStorage.getItem("user");
    const newId = JSON.parse(id);

    useEffect(() => {
        console.log(newId.user_id);

        api
        .get(`/library/${newId.user_id}`)
        .then((response)=>{
            console.log(response.data);
            setData(response.data);
        })

    }, []);

    return (

        <div className="page-biblioteca">
            {Header()}
            <div classname="base-biblioteca">
                <div className = "titulo-biblioteca">
                    <h1>Seus Jogos</h1>
                </div>
                <div className="fileira-biblioteca">
                    {data.map((iten) => {
                        console.log(data);

                        const { title,  image} = iten;

                        return (
                            <div className="botao-jogos-biblioteca">
                                <img src={image} className="img-biblioteca" alt={title} />

                                <div className="titulo-jogo1-biblioteca">
                                    <h1>{title}</h1>
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