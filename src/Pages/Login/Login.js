import React from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function Login(){
    return(
        <div className="base-login">
            <div className="retangulo-login">
                <div className="voltar-login">
                <Breadcrumb>
                    <Breadcrumb.Item href="home">voltar para a pagina principal</Breadcrumb.Item>
                </Breadcrumb>
                </div>

                <div className="conjunto-login">
                    <div className="logo-login">
                    <img src="/images/logo.png" alt="logo"/>
                    </div>
                    <div className="inputs-login">
                        <input className="email-login" placeholder="endereço de email"></input>
                        <input className="email-login" placeholder="senha" type="password" ></input>
                        <div className="manter-logado"><input type="checkbox" className="chexkbox-login" label="manter-me logado"></input></div>
                        <div className="botao-login"><button className="btn-login">iniciar sessão</button></div>
                    </div>

                    <div className="cadastrar-login">
                    ainda não é cadastrado?
                    <Breadcrumb>
                    <Breadcrumb.Item href="cadastro">cadastrar-se</Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                </div>  
            </div>
        </div> 

);

}

export default Login;