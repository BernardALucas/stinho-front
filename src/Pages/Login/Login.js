import React from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom"

function Login(){
    const history = useHistory();

    return(
        <div className="base-login">
            <div className="retangulo-login">
                <div className="voltar-login">
                <button className="btn-login" onClick = {()=>{history.push("home");}} > voltar para a pagina principal</button>
                </div>

                <div className="conjunto-login">
                    <div className="logo-login">
                    <img src="/images/logo.png" alt="logo"/>
                    </div>
                    <div className="inputs-login">
                        <input className="email-login" placeholder="endereço de email"></input>
                        <input className="email-login" placeholder="senha" type="password" ></input>
                        <div>
                            <input type="checkbox" id="checkbox-login"className="checkbox-login" />
                            <label for="checkbox-login" className="manter-logado"> manter-me logado </label>
                            <button className="btn-login">esqueceu sua senha</button>
                        </div>
                        <div className="botao-logar"><button className="btn-logar">iniciar sessão</button></div>
                    </div>

                    <div className="cadastrar-login">
                    ainda não é cadastrado?
                    <button className="btn-login" onClick = {()=>{history.push("");}}>cadastrar-se</button>
                    </div>
                </div>  
            </div>
        </div> 

);

}

export default Login;