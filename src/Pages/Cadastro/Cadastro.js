import React, { useState } from "react";
import "./cadastro.css";
import Footer from "../../Footer";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

function Cadastro() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [nickname, setNickname] = useState();
  const [cellphone, setCellphone] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();

  function cadastro(e) {
    e.preventDefault();
    api
      .post("/users/createnewuser", {
        email,
        password,
        name,
        nickname,
        cellphone,
        country,
        state,
        city,
        district,
        street,
        number,
      })
      .then(() => {
        alert("Cadastrado com Sucesso!!");
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log("erro", err);
        alert("Credenciais Inválidas");
      });
  }
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
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="caixa-cadastro"
              placeholder="Nome de perfil"
              onChange={(e) => setNickname(e.target.value)}
            ></input>
            <input
              className="caixa-cadastro"
              placeholder="Endereço de E-mail"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              className="caixa-cadastro"
              placeholder="Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              className="caixa-cadastro"
              placeholder="Confirmar senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              className="caixa-cadastro"
              placeholder="Numero de telefone"
              onChange={(e) => setCellphone(e.target.value)}
            ></input>
            <input
              className="caixa-cadastro"
              placeholder="País"
              onChange={(e) => setCountry(e.target.value)}
            ></input>

            <div>
              <input
                className="caixa-menor"
                placeholder="Estado"
                onChange={(e) => setState(e.target.value)}
              ></input>
              <input
                className="caixa-media"
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>

            <input
              className="caixa-cadastro"
              placeholder="Bairro"
              onChange={(e) => setDistrict(e.target.value)}
            ></input>

            <div>
              <input
                className="caixa-menor"
                placeholder="Número"
                onChange={(e) => setNumber(e.target.value)}
              ></input>
              <input
                className="caixa-media"
                placeholder="Rua"
                onChange={(e) => setStreet(e.target.value)}
              ></input>
            </div>

            <button className="botao-cadastrar-se" onClick={cadastro}>
              {" "}
              Criar uma conta
            </button>
            <div className="entrar-cadastro">
              Já é cadastrado?
              <button
                className="btn-cadastro"
                onClick={() => {
                  history.push("login");
                }}
              >
                Entrar
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
