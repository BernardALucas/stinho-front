import React, { useState } from "react";
import "./Editar_Perfil.css";
import Header from "../../Header";
import Footer from "../../Footer";
import { VscTrash } from "react-icons/vsc";

function handleSubmit() {}

function Editar_Perfil() {
  const [nome, setNome] = useState();
  const [resumo, setResumo] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [pais, setPais] = useState();
  const [estado, setEstado] = useState();
  const [cidade, setCidade] = useState();
  const [bairro, setBairro] = useState();
  const [rua, setRua] = useState();
  const [numero, setNumero] = useState();
  return (
    <div>
      <div Header>{Header()}</div>
      <div className="Container_Editar_Perfil">
        <div className="Parte_de_Cima_Editar_Perfil">
          <div className="Dados_Editar_Perfil">
            <img
              className="Foto_Editar_Perfil"
              src="./images/Foto_Perfil.png"
              alt="Foto Perfil"
            ></img>
            <div className="Nome_Dados_Editar_Perfil">
              Relâmpago Marquinhos - Editar Perfil
            </div>
            <div className="Excluir_Perfil">
              <button>
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
                placeholder="Nome:"
                onChange={(e) => setNome(e.target.value)}
              ></input>

              <input
                className="Text_Box_Resumo_Editar_Perfil"
                placeholder="Resumo:"
                onChange={(e) => setResumo(e.target.value)}
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
            <div className="Barra_Verde_Estética"></div>
            <div className="Dados_Direita_Perfil">
              <div className="Escrita_Direita">Dados de Cobrança:</div>
              <div className="Mudar_Email">
                <input
                  className="Text_Box_Email_Editar_Perfil"
                  placeholder="E-mail:"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="Mudar_Telefone">
                <input
                  className="Text_Box_Telefone_Editar_Perfil"
                  placeholder="Telefone:"
                  onChange={(e) => setTelefone(e.target.value)}
                ></input>
              </div>
              <div className="Barra_Verde_Estética"></div>

              <div className="Escrita_Direita">Endereço:</div>
              <div className="País_Estado">
                <input
                  className="Text_Box_País_Editar_Perfil"
                  placeholder="País:"
                  onChange={(e) => setPais(e.target.value)}
                ></input>

                <input
                  className="Text_Box_Estado_Editar_Perfil"
                  placeholder="Estado:"
                  onChange={(e) => setEstado(e.target.value)}
                ></input>
              </div>
              <div className="Cidade_Bairro">
                <input
                  className="Text_Box_Cidade_Editar_Perfil"
                  placeholder="Cidade:"
                  onChange={(e) => setCidade(e.target.value)}
                ></input>

                <input
                  className="Text_Box_Bairro_Editar_Perfil"
                  placeholder="Bairro:"
                  onChange={(e) => setBairro(e.target.value)}
                ></input>
              </div>
              <div className="Rua_Numero">
                <input
                  className="Text_Box_Rua_Editar_Perfil"
                  placeholder="Rua:"
                  onChange={(e) => setRua(e.target.value)}
                ></input>

              
                <input
                  className="Text_Box_Numero_Editar_Perfil"
                  placeholder="Número:"
                  onChange={(e) => setNumero(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="Barra_Verde_Estética"></div>
            <button
              className="Botão_Confirmar_Alterações"
              onClick={handleSubmit}
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
