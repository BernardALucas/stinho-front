import React from "react";
import Header from "../../Header";
import "./Perfil.css";
import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";

function Perfil() {
  const history = useHistory();
  return (
    <div>
      <div Header>{Header()}</div>
      <div className="Container_Perfil">
        <div>
          <section class="grid grid-template-columns-1">
            <div className="Dados_Perfil">
              <button
                className="Editar_Perfil"
                onClick={() => {
                  history.push("editar_perfil");
                }}
              >
                Editar Perfil
              </button>
            </div>
            <section className="Lista_de_Amigos_Estatica">
              <div className="Titulo_Lista_Amigos"> Lista de Amigos </div>
              <div className="Texto_Lista_Amigos">
                {" "}
                Você não tem nenhum amigo adicionado.{" "}
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
