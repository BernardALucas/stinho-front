import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";

function Routes(){
    return(
    <BrowserRouter> 
        <Switch> 
            
            <Route path="/home" component ={Home}/>
            <Route path="/login" componet ={Login}/>
            <Route path="/cadastro" componet ={Cadastro}/>        
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;