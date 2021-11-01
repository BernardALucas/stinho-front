import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import Perfil from "./Pages/Perfil"
import Editar_Perfil from "./Pages/Editar_Perfil/Editar_Perfil";

import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login/Login";
import All_Games from "./Pages/All_Games";
import PaginaDoJogo from "./Pages/PaginaDoJogo"
import Biblioteca from "./Pages/Biblioteca"

function Routes(){
    return(
    <BrowserRouter> 
        <Switch> 
            <Route exact path="/login" component ={Login}/>
            <Route exact path="/cadastro" component ={Cadastro}/>
            <Route exact path="/allgames" component ={All_Games}/>
            <Route path="/biblioteca" component ={Biblioteca}/>        
            <Route path="/perfil" component ={Perfil}/>
            <Route path="/editar_perfil" component ={Editar_Perfil}/>
            <Route path="/paginajogo" component ={PaginaDoJogo}/>
            
            <Route exact path="/" component ={Home}/>

        </Switch>     
    </BrowserRouter>
    );
}

export default Routes;