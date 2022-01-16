import React, { useEffect, useState } from "react";
import Header from "../../Header";
import "./Perfil.css";
import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import api from "../../services/api";

function Perfil() {
  const [user, setUser] = useState();
  const [data, setData] = useState();

  const id = localStorage.getItem("user");
  const newId = JSON.parse(id);


  useEffect(() => {

    api
    .get(`/library/${newId.user_id}`)
    .then((response)=>{
        console.log(response.data);
        setData(response.data);
    })

}, []);

/*     useEffect(()=>{
      for (let i = 0; i < 3; i++){
        jogos[i] = data[i];
        console.log(jogos)
        }
    }, [data]) */

    
  useEffect(() => {
    const id = localStorage.getItem("user");
    const newId = JSON.parse(id);
    api
      .get(`/users/myprofile/${newId.user_id}`)
      .then((response) => {
        setUser(response.data)
      });
  }, []);

  const history = useHistory();

  return (
    <div>
      {console.log(data)}
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
                  {user?.city}, {user?.country}
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
      
          <div className="Recent_Games" >
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
              src="https://cdn1.epicgames.com/83d6990f16444655866b04be562bf589/offer/MAD_STD_Store_Landscape_2560x1440-2560x1440-0d275f75a75f6367c373e727bc78b4d1.jpg"
              alt="Jogos Recentes"
            ></img>
            <div className="Game_Info_Profile">
              <div className="Game_Name_Profile">Riders Republic</div>
              <div className="Hours_Played_Profile">30 horas registradas</div>
            </div>
          </div>
          <div className="Recent_Games">
            <img
              className="Game_Photo_Profile"
              src="https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg"
              alt="Jogos Recentes"
            ></img>
            <div className="Game_Info_Profile">
              <div className="Game_Name_Profile">God of War</div>
              <div className="Hours_Played_Profile"> 60 horas registradas</div>
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
