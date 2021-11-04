import React, { useEffect, useState } from "react";
import Header from "../../Header";
import "./Perfil.css";
import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import api from "../../services/api";

function Perfil() {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("vasco")
    const id = localStorage.getItem("user");
    const newId = JSON.parse(id);
    console.log({newId})
    api
      .get(`/users/myprofile/${newId.user_id}`)
      .then((response) => {
        console.log({response})
        setUser(response.data)
      });
  }, []);

  const history = useHistory();

  return (
    <div>
      <div Header>{Header()}</div>
      <div className="Container_Profile">
        <div className="Left_Wrapper_Profile">
          <div className="Data_Profile">
            <img
              className="Photo_Profile"
              src="./images/user2.png"
              alt="Foto Perfil"
            ></img>
            <div className="Info_User_Profile">
              <div className="Username_Profile"> {user?.nickname}</div>
              <div className="Userdata_Profile">
                <p>
                  {user?.city} {user?.country}
                </p>{" "}
                <p>{user?.email}</p> <p>{user?.cellphone}</p>{" "}
                <div className="Text_Profile">{user?.nutshell}</div>{" "}
              </div>
            </div>
            <div className="Edit_Profile_Button">
              {" "}
              <button
                onClick={() => {
                  history.push("editar_perfil");
                }}
              >
                Editar Perfil
                <FaEdit />
              </button>
            </div>
          </div>
          <div className="Recent_Games_Title"> Jogos Recentes</div>
          <div className="Recent_Games">
            <img
              className="Game_Photo_Profile"
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
              className="Game_Photo_Profile"
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
              className="Game_Photo_Profile"
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
          <div className="Static_Friend_List ">
            <h1>Lista de Amigos</h1>
            <p>Você não tem nenhum amigo adicionado.</p>
          </div>
        </div>
      </div>
      {Footer()}
    </div>
  );
}

export default Perfil;
