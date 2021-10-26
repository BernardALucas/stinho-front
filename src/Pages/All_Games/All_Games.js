import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import "./All_Games.css";
import Dropdown from 'react-bootstrap/Dropdown';



function All_Games(){
    const [data, setData] = useState([]);
    const [filtro, setFiltro] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/jogos.json')
            .then((response) => response.json())
            .then(setData);
    }, []);
    
    return(
        <div>
            { Header() }
            <div className="containerJogo">

                <div className ="filtro_all_games">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">Filtrar</Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item onClick = {()=>{setFiltro(["Todos os Jogos"])}}>Todos os Jogos</Dropdown.Item>
                        <Dropdown.Item onClick = {()=>{setFiltro(["Ação"])}}>Ação</Dropdown.Item>
                        <Dropdown.Item onClick = {()=>{setFiltro(["Aventura"])}}>Aventura</Dropdown.Item>
                        <Dropdown.Item onClick = {()=>{setFiltro(["Estratégia"])}}>Estratégia</Dropdown.Item>
                        <Dropdown.Item onClick = {()=>{setFiltro(["RPG"])}}>RPG</Dropdown.Item>
                        <Dropdown.Item onClick = {()=>{setFiltro(["Tiro"])}}>Tiro</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                {data.map((jogo)=>{
                    const {id, name, price, oldPrice, image, desenvolvedor, genero, descricao} = jogo;

                    if(filtro.length === 0 || genero.includes(filtro[0]))
                    return (
                        <div className="seçãoJogo">
                    
                            <img className="jogoFoto" src={image} alt= {name}></img>
                            
                            <div className="descriçãoJogo">
                                <div>
                                    <p className="jogoTitulo"> {name}:</p>
                                    <p className="jogoDescrição"> {descricao} </p>
                                </div>
                                <button className="botaoVejaMais"> Veja Mais </button> 
                            </div>
                        
                            <div className="preçoJogo">
                                <div>
                                    <p className="textoPreço"> A partir de:  </p>
                                    <p className="valorAtual"> R$ {price} </p>
                                </div>
                                <button className="botaoComprar" onClick ={() => { window.location.href = id; }}>   COMPRAR </button>  
                            </div> 
                        </div>
                    );

                    else
                        return null;
                })}
            
            </div>

            { Footer() }
        </div>
    )

}

export default All_Games;
