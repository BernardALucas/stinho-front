import React from "react";
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

        <div className="SinopseJogo">
          {" "}
          Explore um MMO de mundo aberto emocionante e cheio de perigos e
          oportunidades, onde você irá forjar um novo destino na ilha
          sobrenatural de Aeternum.
        </div>

        <div className="DadosJogo">
          <div className="Desenvolvedor">Desenvolvedor : Amazon Games</div>
          <div className="DataLançamento">Data de Lançamento : 28/09/2021</div>
          <div className="Genero">Gênero : MMORPG</div>
          <div className="Plataforma">Plataforma : Microsoft Windows</div>
        </div>

        <div className="BotaoComprar">
          <button>COMPRAR / R$29,99</button>
        </div>
      </div>
    </div>
  );
}
 export default PaginaDoJogo;