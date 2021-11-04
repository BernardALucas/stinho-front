import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Footer from "../../Footer";
import Header from "../../Header";
import api from "../../services/api";
import "./PaginaDoJogo.css";

function PaginaDoJogo({game_id}) {

  const [data, setData] = useState()
  
  useEffect(()=>{
    api.get(`/games/${game_id}`)
    .then((response) => setData(response.data))
  },[])


  return (
    <div>
      <div>{Header()}</div>
      <div className="container-pagjogo">
        <div className="jogo">
          <div className="nome-jogo">
            <h1> {data?.title} </h1>
          </div>
          <div className="foto-jogo">
            <img src={data?.image} alt={data?.title}></img>
          </div>
        </div>

        <div className="titulo_sinopse">
          <h1>Sobre esse jogo</h1>
        </div>
        <div className="SinopseJogo">
          {data?.description}
        </div>

        <div className="containerInfos">
          <div className="DadosJogo">
            <div className="Desenvolvedor">Desenvolvedor: {data?.developer}</div>
            <div className="Desenvolvedor">
              Data de Lançamento: 28/09/2021
            </div>
            <div className="Desenvolvedor">Gênero: {data?.category}</div>
            <div className="Desenvolvedor">Plataforma: Microsoft Windows</div>
          </div>

          <div className="Barra_Verde_Estética"></div>

          <div className="MaisInfos">
            <div className="Site">
              <button>Acesse o site oficial</button>
            </div>
            <div className="Site">
              <button>Veja o histórico de atualizações</button>
            </div>
            <div className="Site">
              <button>Veja as notícias relacionadas</button>
            </div>
            <div className="Site">
              <button>Encontre grupos da comunidade</button>
            </div>
          </div>
        </div>

        <div className="BotaoComprar">
          <button>COMPRAR R${data?.price}</button>
        </div>

        <div className="Barra_Verde_Estética2"></div>


        <div className="titulos_opcoes">
          <h1>Outros usuários também se interessaram</h1>
        </div>
        <div className="Jogos">
          <div className="JogoUm">
            <button>
              <img src="./images/new_world_logo.png" alt="New World"></img>
            </button>
          </div>
          <div className="JogoDois">
            <button>
              <img src="./images/new_world_logo.png" alt="New World"></img>
            </button>
          </div>
        </div>

      </div>

      {Footer()}
    </div>
  );
}
export default PaginaDoJogo;
