import React from "react";
import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { CgMenu } from "react-icons/cg";

function Header() {

    return(   
        
            <div>
            <div className = "base-header">
                <div className="logo-header">
                    <img src="./images/logo_header.png" alt= "Stinho"/> 
                </div>

                <div className = "botoes-header">
                    <div className = "home-header"><button onClick = {()=>{window.location.href = "/home";}} class = "btn-header">Home</button></div>
                    <div className = "store-header"><button onClick = {()=>{window.location.href = "/allgames";}} class = "btn-header">Store</button></div>
                    <div className = "biblioteca-header"><button onClick = {()=>{window.location.href = "/biblioteca";}} class = "btn-header">Biblioteca</button></div>
                    <div className = "entrar-header"><button onClick = {()=>{window.location.href = "/login";}} class = "btn-header" >Entrar</button></div>
                </div>
            <div className ="btn-drawer-header">
                    <Dropdown className="menu-header" style={{backgroundColor:"black"}}>
                
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark"><CgMenu/></Dropdown.Toggle>
                        <Dropdown.Menu variant="dark" className="super-colors">
                        <Dropdown.Item onClick = {()=>{window.location.href = "/home";}} >Home</Dropdown.Item>
                        <Dropdown.Item onClick = {()=>{window.location.href = "/allgames";}} >Store</Dropdown.Item>
                        <Dropdown.Item onClick = {()=>{window.location.href = "/biblioteca";}}>biblioteca</Dropdown.Item>
                        <Dropdown.Item onClick = {()=>{window.location.href = "/login";}}>Entrar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
        
            </div>

            </div>     
    )
    
}

export default Header;
