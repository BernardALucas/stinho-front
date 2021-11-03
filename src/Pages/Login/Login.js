import React, { useState } from "react";
import "./Login.css";
import Footer from "../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import {login} from "../../services/auth"
import { BsFillCreditCard2FrontFill, BsListNested } from "react-icons/bs";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handlelogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      login(response.data.acessToken);
      history.push("/");
    } catch (error) {
      if(error.response.status ===403){
        alert("Credenciais Invalidas!");
      }
      else{
        alert(error.response.data.notification);
      }
    }
  }

  return (
    <div className="page-login">
      <div className="base-login">
        <div className="retangulo-login">
          <div className="voltar-login">
            <button
              className="btn-login"
              onClick={() => {
                history.push("/");
              }}
            >
              {" "}
              voltar para a pagina principal
            </button>
          </div>

          <div className="conjunto-login">
            <div className="logo-login">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="inputs-login">
              <input
                className="email-login"
                placeholder="endereço de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="email-login"
                placeholder="senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="conjutno-checkbox-login">
                <input
                  type="checkbox"
                  id="checkbox-login"
                  className="checkbox-login"
                />
                <label for="checkbox-login" className="manter-logado">
                  {" "}
                  manter-me logado{" "}
                </label>
                <button className="btn-login">esqueceu sua senha</button>
              </div>
              <div className="botao-logar">
                <button className="btn-logar" onClick={handlelogin}>
                  iniciar sessão
                </button>
              </div>
            </div>
            <div className="cadastrar-login">
              ainda não é cadastrado?
              <button
                className="btn-login"
                onClick={() => {
                  history.push("cadastro");
                }}
              >
                cadastrar-se
              </button>
            </div>
          </div>
        </div>
      </div>
      {Footer()}
    </div>
  );
}

export default Login;
