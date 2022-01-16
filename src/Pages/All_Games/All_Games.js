import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import "./All_Games.css";
import Dropdown from "react-bootstrap/Dropdown";
import api from "../../services/api";

async function ComprarJogo(game_id, filtro, user_id) {
    for (let i = 0; i < filtro.length; i++) {
        if (filtro[i].game_id === game_id) {
            alert("Esse jogo já foi adicionado a sua biblioteca");
            return null;
        }
    }
    try {
        await api.post("/library/add", { user_id, game_id });
        alert("Jogo adicionado a sua biblioteca")
    }
    catch (err) {
        console.warn(err);
        alert("deu erro")
    }
}

function All_Games() {
    const [data, setData] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [permissao, setPermissao] = useState([])

    const id = localStorage.getItem("user");
    const newId = JSON.parse(id);

    useEffect(() => {
        if (newId !== null) {
            api
                .get(`/library/${newId.user_id}`)
                .then((response) => {
                    setPermissao(response.data);
                })
        }

    }, [])

    useEffect(() => {
        api
            .get("/games/")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    return (
        <div>
            {Header()}
            <div className="containerJogo">

                <div className="filtro_all_games">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Filtrar</Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item onClick={() => {
                                fetch('http://localhost:3333/games')
                                    .then((response) => response.json())
                                    .then(setData);
                            }}>Todos os Jogos</Dropdown.Item>

                            <Dropdown.Item onClick={() => {
                                fetch('http://localhost:3333/games/category/Aventura')
                                    .then((response) => response.json())
                                    .then(setData);
                            }}>Aventura</Dropdown.Item>

                            <Dropdown.Item onClick={() => {
                                fetch('http://localhost:3333/games/category/Ação')
                                    .then((response) => response.json())
                                    .then(setData);
                            }}>Ação</Dropdown.Item>

                            <Dropdown.Item onClick={() => {
                                fetch('http://localhost:3333/games/category/Corrida')
                                    .then((response) => response.json())
                                    .then(setData);
                            }}>Corrida</Dropdown.Item>

                            <Dropdown.Item onClick={() => {
                                fetch('http://localhost:3333/games/category/RPG')
                                    .then((response) => response.json())
                                    .then(setData);
                            }}>RPG</Dropdown.Item>

                            <Dropdown.Item onClick={() => {
                                fetch('http://localhost:3333/games/category/Tiro')
                                    .then((response) => response.json())
                                    .then(setData);
                            }}>Tiro</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                {data.map((jogo) => {
                    const { game_id, title, price, image, category, description } = jogo;

                    if (filtro.length === 0 || category.includes(filtro[0]))
                        return (
                            <div className="seçãoJogo">

                                <img className="jogoFoto" src={image} alt={title}></img>

                                <div className="descriçãoJogo">
                                    <div className="textojogo">
                                        <p className="jogoTitulo"> {title}:</p>
                                        <p className="jogoDescrição"> {description} </p>
                                    </div>

                                    <button className="botaoVejaMais" onClick={() => {
                                        window.location.href = game_id;
                                    }}> Veja Mais </button>
                                </div>

                                <div className="preçoJogo">
                                    <div className="parteBranca">
                                        <p className="textoPreço"> A partir de: </p>
                                        <p className="valorAtual"> R$ {price} </p>
                                    </div>
                                    <button
                                        className="botaoComprar"
                                        onClick={() => {
                                            if (newId !== null) {
                                                ComprarJogo(game_id, permissao, newId.user_id);
                                            }
                                            else {
                                                alert("Você não está logado");
                                                window.location.href = "/login"
                                            }
                                        }}
                                    >
                                        {" "}
                                        COMPRAR{" "}
                                    </button>
                                </div>
                            </div>
                        );

                    else return null;
                })}
            </div>

            {Footer()}
        </div >
    );
}

export default All_Games;
