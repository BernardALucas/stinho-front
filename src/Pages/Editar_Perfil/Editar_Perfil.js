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
              <div className="Escrita_Esquerda">Nome:</div>

              <input
                className="Text_Box_Editar_Perfil"
                placeholder="Rêlampago Marquinhos"
              ></input>

              <div className="Escrita_Esquerda">Resumo:</div>

              <input
                className="Text_Box_Editar_Perfil"
                placeholder="Foguete não tem ré nem eu"
              ></input>
            </div>
            <div className="Mudar_Foto_Perfil">
              <div className="Escrita_Esquerda">Avatar:</div>

              <button className="Mudar_Avatar"> Enviar foto</button>
            </div>
            <h1>Enviar uma foto do seu dispositivo</h1>
          </div>
          <div className="Lado_Direito_Editar_Perfil">
            <div className="Barra_Verde_Estética"></div>
            <div className="Dados_Direita_Perfil">
              <div className="Escrita_Direita">Dados de Cobrança:</div>
              <div className="Mudar_Email">
                <div className="Escrita_Direita_Inferior">Email:</div>
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Editar_Perfil"
                    placeholder="relampagomarquinhos@cpejr.com.br"
                  ></input>
                </div>
              </div>
              <div className="Mudar_Telefone">
                <div className="Escrita_Direita_Inferior">Telefone:</div>
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Editar_Perfil"
                    placeholder="(31) 99999-9999"
                  ></input>
                </div>
              </div>
              <div className="Barra_Verde_Estética"></div>

              <div className="Escrita_Direita">Endereço:</div>
              <div className="País_Estado">
                <div className="Mudar_País">
                  <div className="Escrita_Direita_Inferior">País:</div>
                  <div className="Caixa_Mudança">
                    <input
                      className="Text_Box_Editar_Perfil"
                      placeholder="Brasil"
                    ></input>
                  </div>
                </div>
                <div className="Mudar_Estado">
                  <div className="Escrita_Direita_Inferior">Estado:</div>
                  <div className="Caixa_Mudança">
                    <input
                      className="Text_Box_Editar_Perfil"
                      placeholder="Minas Gerais"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="Mudar_Cidade">
                <div className="Escrita_Direita_Inferior">Cidade:</div>
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Editar_Perfil"
                    placeholder="Belo Horizonte"
                  ></input>
                </div>
              </div>
              <div className="Mudar_Bairro">
                <div className="Escrita_Direita_Inferior">Bairro:</div>
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Editar_Perfil"
                    placeholder="Centro"
                  ></input>
                </div>
              </div>

              <div className="Mudar_Rua">
                <div className="Escrita_Direita_Inferior">Rua:</div>
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Editar_Perfil"
                    placeholder="Afonso Pena"
                  ></input>
                </div>
              </div>
              <div className="Mudar_Numero">
                <div className="Escrita_Direita_Inferior">Número:</div>
                <div className="Caixa_Mudança">
                  <input
                    className="Text_Box_Editar_Perfil"
                    placeholder="666"
                  ></input>
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
