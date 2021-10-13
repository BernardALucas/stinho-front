import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";


import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login/Login";

function Routes(){
    return(
    <BrowserRouter> 
        <Switch> 
            <Route exact path="/login" component ={Login}/>
            <Route exact path="/home" component ={Home}/>
            <Route exact path="/cadastro" component ={Cadastro}/>        
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;