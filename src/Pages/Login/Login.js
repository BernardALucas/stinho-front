import React from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function Login(){
    return(
        <div className="base">
            <div className="retangulo">
                <div className="voltar">
                <Breadcrumb>
                    <Breadcrumb.Item href="home">voltar para a pagina principal</Breadcrumb.Item>
                </Breadcrumb>
                </div>

                <div className="conjunto">
                    <div className="logo">
                    <img src="/images/logo.png" alt="logo"/>
                    </div>
                    <div className="inputs">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Endereço de email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="password" placeholder="senha" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="manter-me logado" />
                        </Form.Group>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">esqueceu sua senha?</Breadcrumb.Item>
                        </Breadcrumb>
                        <Button variant="dark">iniciar sessão</Button>{' '} 
                    </div>
                    <div className="cadastrar">
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