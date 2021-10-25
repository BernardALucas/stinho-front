import React from "react";
import "./Editar_Perfil.css";
import Header from "../../Header";

function Editar_Perfil() {
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
          </div>
        </div>
        <div className="Parte_de_Baixo_Editar_Perfil">
          <div className="Lado_Esquerdo_Editar_Perfil">
            <div className="Dados_Esquerda_Editar_Perfil">
              <input
                className="Text_Box_Nome_Editar_Perfil"
                placeholder="Nome:"
              ></input>

              <input
                className="Text_Box_Resumo_Editar_Perfil"
                placeholder="Resumo:"
              ></input>
            </div>
            <div className="Mudar_Foto_Perfil">
              <div className="Escrita_Avatar">Avatar:</div>

              <button className="Mudar_Avatar"> Enviar foto</button>
            </div>
            <h1>Enviar uma foto do seu dispositivo</h1>
          </div>
          <div className="Lado_Direito_Editar_Perfil">
            <div className="Barra_Verde_Estética"></div>
            <div className="Dados_Direita_Perfil">
              <div className="Escrita_Direita">Dados de Cobrança:</div>
              <div className="Mudar_Email">
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Email_Editar_Perfil"
                    placeholder="E-mail:"
                  ></input>
                </div>
              </div>
              <div className="Mudar_Telefone">
                <input
                  className="Text_Box_Telefone_Editar_Perfil"
                  placeholder="Telefone:"
                ></input>
              </div>
              <div className="Barra_Verde_Estética"></div>

              <div className="Escrita_Direita">Endereço:</div>
              <div className="País_Estado">
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_País_Editar_Perfil"
                    placeholder="País:"
                  ></input>
                </div>
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Estado_Editar_Perfil"
                    placeholder="Estado:"
                  ></input>
                </div>
              </div>
              <div className="Cidade_Bairro">
                <input
                  className="Text_Box_Cidade_Editar_Perfil"
                  placeholder="Cidade:"
                ></input>

                <div className="Mudar_Bairro">
                  <div className="Escrita_Direita_Inferior"></div>
                  <div className="Caixa_Mudança">
                    <input
                      className="Text_Box_Bairro_Editar_Perfil"
                      placeholder="Bairro:"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="Rua_Numero">
              <div className="Mudar_Rua">
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Rua_Editar_Perfil"
                    placeholder="Rua:"
                  ></input>
                </div>
              </div>
              <div className="Mudar_Numero">
                <div className="Escrita_Direita_Inferior"></div>
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Numero_Editar_Perfil"
                    placeholder="Número:"
                  ></input>
                </div>
              </div>
            </div>
            </div>
            <div className="Barra_Verde_Estética"></div>
            <button className="Botão_Confirmar_Alterações">
              Confirmar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editar_Perfil;
