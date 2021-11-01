import React from "react";
import { Button } from "react-bootstrap";
import Header from "../../Header";
import "./PaginaDoJogo.css";

function PaginaDoJogo() {
  return (
    <div>
      <div>{Header()}</div>
      <div className="container-pagjogo">
        <div className="jogo">
          <div className="nome-jogo">
            <h1> New World </h1>
          </div>
          <div className="foto-jogo">
            <img src="./images/new_world_logo.png" alt="New World"></img>
          </div>
        </div>

        <div className="titulo_sinopse">
          <h1>Sobre esse jogo</h1>
        </div>
        <div className="SinopseJogo">
          {" "}
          Explore um MMO de mundo aberto emocionante e cheio de perigos e
          oportunidades, onde você irá forjar um novo destino na ilha
          sobrenatural de Aeternum.
        </div>

        <div className="containerInfos">
          <div className="DadosJogo">
            <div className="Desenvolvedor">Desenvolvedor : Amazon Games</div>
            <div className="DataLançamento">
              Data de Lançamento : 28/09/2021
            </div>
            <div className="Genero">Gênero : MMORPG</div>
            <div className="Plataforma">Plataforma : Microsoft Windows</div>
          </div>

          <div className="Barra_Verde_Estética"></div>

          <div className="MaisInfos">
            <div className="Site">
              <button>Acesse o site oficial</button>
            </div>
            <div className="Atualizacoes">
              <button>Veja o histórico de atualizações</button>
            </div>
            <div className="Noticias">
              <button>Veja as notícias relacionadas</button>
            </div>
            <div className="Comunidade">
              <button>Encontre grupos da comunidade</button>
            </div>
          </div>
        </div>

        <div className="BotaoComprar">
          <button>COMPRAR / R$29,99</button>
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
    </div>
  );
}
export default PaginaDoJogo;
