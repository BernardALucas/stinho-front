import React from "react";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Perfil from "./Pages/Perfil"
import Editar_Perfil from "./Pages/Editar_Perfil/Editar_Perfil";

import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login/Login";
import All_Games from "./Pages/All_Games";
import PaginaDoJogo from "./Pages/PaginaDoJogo"
import Biblioteca from "./Pages/Biblioteca"
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
function Routes(){
    return(
    <BrowserRouter> 
        <Switch> 
            <Route exact path="/login" component ={Login}/>
            <Route exact path="/cadastro" component ={Cadastro}/>
            <Route exact path="/allgames" component ={All_Games}/>
            <Route path="/biblioteca" component ={Biblioteca}/>        
            <PrivateRoute path="/perfil" component ={Perfil}/>
            <Route path="/editar_perfil" component ={Editar_Perfil}/>

            <Route path="/d50d2022-1360-4c4c-93b4-aad64f533d16" render ={()=> <PaginaDoJogo game_id = "d50d2022-1360-4c4c-93b4-aad64f533d16"/>}/>
            <Route path="/b31b86d1-03f9-45d6-b4dd-f4cd7b402db4" render ={()=> <PaginaDoJogo game_id = "b31b86d1-03f9-45d6-b4dd-f4cd7b402db4"/>}/>
            <Route path="/187c0803-868c-487d-9e50-a7029f38b913" render ={()=> <PaginaDoJogo game_id = "187c0803-868c-487d-9e50-a7029f38b913"/>}/>
            <Route path="/b9bea0ba-1628-412d-9953-4c6fd87f931f" render ={()=> <PaginaDoJogo game_id = "b9bea0ba-1628-412d-9953-4c6fd87f931f"/>}/>
            <Route path="/d7f585e5-ae5a-4a0c-a6f3-b222219d0fb5" render ={()=> <PaginaDoJogo game_id = "d7f585e5-ae5a-4a0c-a6f3-b222219d0fb5"/>}/>
            <Route path="/044a2cf4-801e-4475-bb3e-6005cf956074" render ={()=> <PaginaDoJogo game_id = "044a2cf4-801e-4475-bb3e-6005cf956074"/>}/>
            <Route path="/889edab0-16b7-4954-91cf-1578ef14d5a5" render ={()=> <PaginaDoJogo game_id = "889edab0-16b7-4954-91cf-1578ef14d5a5"/>}/>
            <Route path="/51689659-8b86-472c-a678-eeba311df3ea" render ={()=> <PaginaDoJogo game_id = "51689659-8b86-472c-a678-eeba311df3ea"/>}/>
            <Route path="/3bcc107f-facd-407b-b1bb-7915a5575d6f" render ={()=> <PaginaDoJogo game_id = "3bcc107f-facd-407b-b1bb-7915a5575d6f"/>}/>
            <Route path="/8a77c0d7-baaf-4aa0-ba44-f5933983d062" render ={()=> <PaginaDoJogo game_id = "8a77c0d7-baaf-4aa0-ba44-f5933983d062"/>}/>
            <Route path="/850ded97-50e4-420b-a0cd-97b909498094" render ={()=> <PaginaDoJogo game_id = "850ded97-50e4-420b-a0cd-97b909498094"/>}/>
            <Route path="/76d126c2-45dd-404f-ae45-0ae85c461615" render ={()=> <PaginaDoJogo game_id = "76d126c2-45dd-404f-ae45-0ae85c461615"/>}/>
            <Route path="/e6fd65bd-ac7e-4554-a549-a723b8c14d6b" render ={()=> <PaginaDoJogo game_id = "e6fd65bd-ac7e-4554-a549-a723b8c14d6b"/>}/>

            
            <Route exact path="/" component ={Home}/>

        </Switch>     
    </BrowserRouter>
    );
}

export default Routes;