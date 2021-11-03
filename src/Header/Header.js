import React, { useEffect, useState } from "react";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { CgMenu } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { isAuthenticated, logout } from "../services/auth"
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  console.log(isAuthenticated())
  

  return (
    <div>
      <div className="base-header">
        <div className="logo-header">
          <img src="./images/logo_header.png" alt="Stinho" />
        </div>

        <div className="botoes-header">
          <div className="home-header">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              class="btn-header"
            >
              HOME
            </button>
          </div>
          <div className="store-header">
            <button
              onClick={() => {
                window.location.href = "/allgames";
              }}
              class="btn-header"
            >
              STORE
            </button>
          </div>
          <div className="biblioteca-header">
            <button
              onClick={() => {
                window.location.href = "/biblioteca";
              }}
              class="btn-header"
            >
              BIBLIOTECA
            </button>
          </div>
          <div className="entrar-header">
            <button
              onClick={() => {
                window.location.href = "/perfil";
              }}
              class="btn-header"
            >
              {isAuthenticated() ? "PERFIL" : "ENTRAR" }
            </button>

          </div>
          {isAuthenticated() && <button
            onClick={() => {
              logout();
              history.push("/");
            }}
            class="btn--logout-header"
          >
            <FiLogOut></FiLogOut>

          </button>}
        </div>
        <div className="btn-drawer-header">
          <Dropdown
            className="menu-header"
            style={{ backgroundColor: "black" }}
          >
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="dark"
              style={{ backgroundColor: "black" }}
            >
              <CgMenu />
            </Dropdown.Toggle>
            <Dropdown.Menu
              variant="dark"
              className="super-colors"
              style={{ backgroundColor: "#000000" }}
            >
              <Dropdown.Item
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                HOME
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  window.location.href = "/allgames";
                }}
              >
                STORE
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  window.location.href = "/biblioteca";
                }}
              >
                BIBLIOTECA
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  window.location.href = "/perfil";
                }}
              >
              </Dropdown.Item>
              <Dropdown.Item onClick={() => {
                window.location.href = "/perfil";
              }} >
              {isAuthenticated() ? "PERFIL" : "ENTRAR" }
              </Dropdown.Item>
              {isAuthenticated() && <Dropdown.Item
              onClick={() => {
                logout();
                history.push("/");
              }}
              >
                <FiLogOut></FiLogOut>
              </Dropdown.Item>}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
