import React from "react";
import Header from "../../Header";
import "./Perfil.css";
//import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";

function Perfil() {
  const history = useHistory();
  return (
    <div>
      <div Header>{Header()}</div>
      <div className="Container_Profile">
        <div className="Left_Wrapper_Profile">
          <div className="Data_Profile">
            <img
              className="Photo_Profile"
              src="./images/Foto_Perfil.png"
              alt="Foto Perfil"
            ></img>
            <div className="Info_User_Profile">
              <div className="Username_Profile"> Relâmpago Marquinhos</div>
              <div className="Userdata_Profile">
                <p>Belo Horizonte, Brasil</p>{" "}
                <p>relampagomarquinhos@cpejr.com.br</p> <p>(31) 99999-9999</p>{" "}
              </div>
              <div className="Text_Profile">Foguete não tem ré e nem eu</div>
            </div>
            <div className="Button_Profile">
              <button
                onClick={() => {
                  history.push("editar_perfil");
                }}
              >
                Editar Perfil
              </button>
            </div>
          </div>
          <div className="Recent_Games_Title"> Jogos Recentes</div>
          <div className="Recent_Games">
            <img
              className="Photo_Profile"
              src="./images/new-world-esticado.png"
              alt="Jogos Recentes"
            ></img>
            <div className="Game_Info_Profile">
              <div className="Game_Name_Profile">New World</div>
              <div className="Hours_Played_Profile">50 horas registradas</div>
            </div>
          </div>
          <div className="Recent_Games">
            <img
              className="Photo_Profile"
              src="./images/new-world-esticado.png"
              alt="Jogos Recentes"
            ></img>
            <div className="Game_Info_Profile">
              <div className="Game_Name_Profile">New World</div>
              <div className="Hours_Played_Profile">50 horas registradas</div>
            </div>
          </div>
          <div className="Recent_Games">
            <img
              className="Photo_Profile"
              src="./images/new-world-esticado.png"
              alt="Jogos Recentes"
            ></img>
            <div className="Game_Info_Profile">
              <div className="Game_Name_Profile">New World</div>
              <div className="Hours_Played_Profile"> 50 horas registradas</div>
            </div>
          </div>
          <div className="Library_Button_Profile">
            <button
              onClick={() => {
                history.push("biblioteca");
              }}
            >
              Acessar Biblioteca
            </button>
          </div>
        </div>
        {/*Final da parte esquerda*/}

        <div className="Right_Wrapper">
          <section className="Lista_de_Amigos_Estatica">
            <div className="Titulo_Lista_Amigos"> Lista de Amigos </div>
            <div className="Texto_Lista_Amigos">
              {" "}
              Você não tem nenhum amigo adicionado.{" "}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
