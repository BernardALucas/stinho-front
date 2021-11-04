import React, { useState, useRef, useEffect } from "react";
import "./Biblioteca.css";
import Footer from "../../Footer";
import Header from "../../Header";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { IoTrashOutline } from "react-icons/io5";

async function ExluirJogo(user_id,game_id){
    const history = useHistory();
    console.log(user_id);
    try{
        await api.delete("/library/delete/:user_id/:game_id",{user_id, game_id});
        alert("um jogo foi exluido da sua biblioteca")
        history.push("/Biblioteca");
    }
    catch (err) {
        console.warn(err);
        alert("deu erro")
      }

}
function Biblioteca() {
    const [data, setData] = useState([]);
    const id = localStorage.getItem("user");
    const newId = JSON.parse(id);
    const user_id = newId.user_id;

    useEffect(() => {
        console.log(newId.user_id);

        api
        .get(`/library/${newId.user_id}`)
        .then((response)=>{
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

                        const { game_id, title, price, old_price, image, developer, genero, description, category, nivel_destaque } = iten;

                        return (
                            <div className="botao-jogos-biblioteca">
                                <img src={image} className="img-biblioteca" alt={title} />

                                <div className="titulo-jogo1-biblioteca">
                                    <h1>{title}</h1>
                                    <button className="lixeira-biblioteca" onClick={() => {ExluirJogo(data.game_id,user_id)}}>
                                    <IoTrashOutline size="2vw"></IoTrashOutline>
                                    </button>
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