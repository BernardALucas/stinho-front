import React, { useState } from "react";
import "./cadastro.css";
import Footer from "../../Footer";
import { useHistory } from "react-router-dom";

function Cadastro() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <div className="base-cadastro">
        <div className="retangulo-cadastro">
          <div className="logo-cadastro">
            <img src="/images/logo.png" alt="logo" />
          </div>

          <div className="input-cadastro">
            <input
              className="caixa-cadastro"
              placeholder="Endereço de E-mail"
            ></input>
            <input
              className="caixa-cadastro"
              placeholder="Nome de perfil"
            ></input>
            <input className="caixa-cadastro" placeholder="Senha"></input>
            <input
              className="caixa-cadastro"
              placeholder="Confirmar senha"
            ></input>
            <input
              className="caixa-cadastro"
              placeholder="Numero de telefone"
            ></input>

            <div>
              <input className="caixa-menor" placeholder="Estado"></input>
              <input className="caixa-media" placeholder="Cidade"></input>
            </div>

            <input className="caixa-cadastro" placeholder="bairro"></input>

            <div>
              <input className="caixa-menor" placeholder="N°da casa"></input>
              <input className="caixa-media" placeholder="Rua"></input>
            </div>

            {/* <div className="enviar-email">
                <input type="checkbox" id="checkbox-login"className="checkbox-cadastro" />
                <label for="checkbox-login" className="enviar-cadastro"> por favor me envie emails que vão encher a minha caixa de entrada  </label>
                </div> */}

            <button className="botao-cadastrar-se"> criar uma conta</button>
            <div className="entrar-cadastro">
              já é cadastrado?
              <button
                className="btn-cadastro"
                onClick={() => {
                  history.push("login");
                }}
              >
                entrar
              </button>
            </div>
          </div>
        </div>
      </div>
      {Footer()}
    </div>
  );
}

export default Cadastro;
