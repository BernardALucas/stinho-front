import React from "react";
import Header from "../../Header";
import Footer from "../../Footer/Footer";
import "./All_Games.css";


function All_Games(){
    return(
        <div>
            { Header() }
            <div className="container">
                <div className="jogo">
                    
                    <div className="jogoFoto"> FOTO </div>
                    <div className="jogoTitulo"> <h1> New World: </h1> </div>
                    <div className="jogoDescrição"> <h1> Explore um MMO de mundo aberto emocionante e cheio de perigos e oportunidades, onde você irá forjar um novo destino na ilha sobrenatural de Aeternum. </h1> </div>
                    <div className="preço">
                        <div className="textoPreço">
                            <h1> A partir de: </h1>  
                        </div>
                        <div className="valorAntigo">
                            <h1> R$ 75,49 </h1>
                        </div>
                    </div>
                    <div className="b1"> <h1> jogo 1 </h1> </div>
                    <div className="b2"> <h1> jogo 1 </h1> </div>
                </div>
                <div className="jogo">
                    <div className="jogoFoto"> <h1> jogo 2 </h1> </div>
                    <div className="jogoTitulo"> <h1> jogo 2 </h1> </div>
                    <div className="jogoDescrição"> <h1> jogo 2 </h1> </div>
                    <div className="jogoPreço"> <h1> jogo 2 </h1> </div>
                    <div className="b1"> <h1> jogo 2 </h1> </div>
                    <div className="b2"> <h1> jogo 2 </h1> </div>
                </div>

            </div>
            <h1>All Games</h1>
            { Footer() }
        </div>
    )

}

export default All_Games;
