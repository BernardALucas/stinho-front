import React, { useState, useEffect } from "react";
import "./Editar_Perfil.css";
import Header from "../../Header";
import Footer from "../../Footer";
import { VscTrash } from "react-icons/vsc";
import api from "../../services/api";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";

function Editar_Perfil() {
  const [user, setUser] = useState();
  const [aux, setAux] = useState();
  const history = useHistory();

  useEffect(() => {
    const id = localStorage.getItem("user");
    const newId = JSON.parse(id);
    console.log({ newId });
    api.get(`/users/myprofile/${newId.user_id}`).then((response) => {
      console.log(response);
      setUser(response.data);
      setAux(response.data);
    });
  }, []);

  function deleteId() {
    api
      .delete(`/users/delete/${user.user_id}`)
      .then(() => {
        logout();
        alert("Usuário Excluído com Sucesso!");
        history.push("/");
      })
      .catch(() => {
        alert("Erro ao excluir usuário");
      });
  }
  function AtualizarDados() {
    if (
      aux.nickname !== user.nickname ||
      aux.nutshell !== user.nutshell ||
      aux.country !== user.country ||
      aux.state !== user.state ||
      aux.city !== user.city ||
      aux.district !== user.district ||
      aux.street !== user.street ||
      aux.number !== user.number
    ) {
      delete user.user_id;
      delete user.firebase_id;
      delete user.email;
      delete user.name;
      delete user.cellphone;
      api
        .put(`/users/edit/${aux.user_id}`, user)
        .then((res) => {
          alert("Dados modificados com sucesso!");
          console.log(res.data);
        })
        .catch(() => {
          alert("Erro ao modificar dados do usuário");
        });
    } else alert("Nenhum dado foi modificado!");
  }

  return (
    <div>
      <div Header>{Header()}</div>
      <div className="Container_Editar_Perfil">
        <div className="Parte_de_Cima_Editar_Perfil">
          <div className="Dados_Editar_Perfil">
            <img
              className="Foto_Editar_Perfil"
              src="./images/user2.png"
              alt="Foto Perfil"
            ></img>
            <div className="Nome_Dados_Editar_Perfil">
              {user?.nickname} - Editar Perfil
            </div>
            <div className="Excluir_Perfil">
              <button onClick={deleteId}>
                <VscTrash color={"FF1E56"} />
              </button>
            </div>
          </div>
        </div>
        <div className="Parte_de_Baixo_Editar_Perfil">
          <div className="Lado_Esquerdo_Editar_Perfil">
            <div className="Dados_Esquerda_Editar_Perfil">
              <input
                className="Text_Box_Nome_Editar_Perfil"
                placeholder="Nome do perfil:"
                onChange={(e) => setUser({ ...user, nickname: e.target.value })}
              ></input>

              <input
                className="Text_Box_Resumo_Editar_Perfil"
                placeholder="Resumo:"
                onChange={(e) => setUser({ ...user, nutshell: e.target.value })}
              ></input>
            </div>
            <div className="Mudar_Foto_Perfil">
              <div className="Escrita_Avatar">Avatar:</div>
              <div className="Botao_Avatar">
                <button className="Mudar_Avatar"> Enviar foto</button>
                <h1>Enviar uma foto do seu dispositivo</h1>
              </div>
            </div>
          </div>
          <div className="Lado_Direito_Editar_Perfil">
            <div className="Barra_Verde_Estética_Editar_Perfil"></div>
            <div className="Dados_Direita_Perfil">
              <div className="Escrita_Direita">Dados de Cobrança:</div>
              <div className="Mudar_Email">
                <input
                  className="Text_Box_Email_Editar_Perfil"
                  placeholder="E-mail:"
                  value={user?.email}
                  disabled
                ></input>
              </div>
              <div className="Mudar_Telefone">
                <input
                  className="Text_Box_Telefone_Editar_Perfil"
                  placeholder="Telefone:"
                  value={user?.cellphone}
                  disabled
                ></input>
              </div>
              <div className="Barra_Verde_Estética_Editar_Perfil"></div>

              <div className="Escrita_Direita">Endereço:</div>
              <div className="País_Estado">
                <input
                  className="Text_Box_País_Editar_Perfil"
                  placeholder="País:"
                  onChange={(e) =>
                    setUser({ ...user, country: e.target.value })
                  }
                ></input>

                <input
                  className="Text_Box_Estado_Editar_Perfil"
                  placeholder="Estado:"
                  onChange={(e) => setUser({ ...user, state: e.target.value })}
                ></input>
              </div>
              <div className="Cidade_Bairro">
                <input
                  className="Text_Box_Cidade_Editar_Perfil"
                  placeholder="Cidade:"
                  onChange={(e) => setUser({ ...user, city: e.target.value })}
                ></input>

                <input
                  className="Text_Box_Bairro_Editar_Perfil"
                  placeholder="Bairro:"
                  onChange={(e) =>
                    setUser({ ...user, district: e.target.value })
                  }
                ></input>
              </div>
              <div className="Rua_Numero">
                <input
                  className="Text_Box_Rua_Editar_Perfil"
                  placeholder="Rua:"
                  onChange={(e) => setUser({ ...user, street: e.target.value })}
                ></input>

                <input
                  className="Text_Box_Numero_Editar_Perfil"
                  placeholder="Número:"
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                ></input>
              </div>
            </div>
            <div className="Barra_Verde_Estética_Editar_Perfil"></div>
            <button
              className="Botão_Confirmar_Alterações"
              onClick={AtualizarDados}
            >
              Confirmar Alterações
            </button>
          </div>
        </div>
      </div>
      {Footer()}
    </div>
  );
}

export default Editar_Perfil;
