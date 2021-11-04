import React, { useState } from "react";
import "./Login.css";
import Footer from "../../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isFailureStatus = (result) => {
    return !result || result.status >= 400;
  };

  async function handlelogin(e) {
    e.preventDefault();

    const response = await api.post("/login", { email, password });
    if (isFailureStatus(response)) {
      alert("Credenciais inválidas");
      history.push("/login");
      setEmail("");
      setPassword("");
    } else {
      login(response.data);
      history.push("/");
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
              Voltar para a pagina principal
            </button>
          </div>

          <div className="conjunto-login">
            <div className="logo-login">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="inputs-login">
              <input
                className="email-login"
                placeholder="Endereço de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="email-login"
                placeholder="Senha"
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
                  Manter-me logado{" "}
                </label>
                <button className="btn-login">Esqueceu sua senha?</button>
              </div>
              <div className="botao-logar">
                <button className="btn-logar" onClick={handlelogin}>
                  Iniciar sessão
                </button>
              </div>
            </div>
            <div className="cadastrar-login">
              Ainda não é cadastrado?
              <button
                className="btn-login"
                onClick={() => {
                  history.push("cadastro");
                }}
              >
                Cadastrar-se
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
