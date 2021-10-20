import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import Perfil from "./Pages/Perfil"
import Editar_Perfil from "./Pages/Editar_Perfil/Editar_Perfil";

import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login/Login";
import PaginaDoJogo from "./Pages/PaginaDoJogo"

function Routes(){
    return(
    <BrowserRouter> 
        <Switch> 
            <Route exact path="/login" component ={Login}/>
            <Route exact path="/home" component ={Home}/>
            <Route exact path="/cadastro" component ={Cadastro}/>        
            <Route path="/perfil" component ={Perfil}/>
            <Route path="/editar_perfil" component ={Editar_Perfil}/>
            <Route path="/paginajogo" component ={PaginaDoJogo}/>
            
        </Switch>     
    </BrowserRouter>
    );
}

export default Routes;