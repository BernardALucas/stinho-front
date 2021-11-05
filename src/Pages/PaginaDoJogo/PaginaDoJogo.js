import React, { useEffect, useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import api from "../../services/api";
import "./PaginaDoJogo.css";



async function ComprarJogo(game_id,filtro,user_id) {
  console.log(filtro)
  for (let i = 0; i < filtro.length; i++) {
    if(filtro[i].game_id===game_id){
        alert("Esse jogo já foi adicionado a sua biblioteca");
        return null;
    }
  }
  try {
    await api.post("/library/add",  {user_id, game_id});
    alert("Jogo adicionado a sua biblioteca")
  }
  catch (err) {
    console.warn(err);
    alert("deu erro")
  }
}


function PaginaDoJogo({ game_id }) {

  const [data, setData] = useState();
  const [filtro, setFiltro] = useState([]);
  
  const id = localStorage.getItem("user");
  const newId = JSON.parse(id); 

  useEffect(()=> {
    if(newId !== null)
       api
          .get(`/library/${newId.user_id}`)
          .then((response)=>{
              setFiltro(response.data);
          })

  }, [])

  useEffect(() => {
    api.get(`/games/${game_id}`)
      .then((response) => setData(response.data))
  }, [])


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
          <button onClick={() => {
            if(newId !== null){
              ComprarJogo(data.game_id,filtro,newId.user_id);
              alert("Jogo adicionado a biblioteca");
            }
            else{
              alert("Você não está logado");
              window.location.href = "/login"
          }
          }}>COMPRAR R${data?.price}</button>
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
