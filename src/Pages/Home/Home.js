import React from "react";
import Header from "../../Header";
import "./Home.css"

function Home(){
    return(
        <div className = "container-home"> 
            { Header() }

            <div className = "destaques-home"> 
                <div className = "titulo-home"><h1> Destaques </h1></div>
                <div className = "carrossel-home">
                    <img src="./images/new_world_logo.png" alt= "New World"></img>
                </div>

            </div>

            <div className = "promocao-home">
                <div className = "titulo-home"><h1> Jogos em Promoção </h1></div>
                <div className = "promocao-destaque-home">

                    <div className = "destaque1-home">
                        <img className = "image1-home" src="./images/new_world_logo.png" alt= "New World"></img>

                        <div className = "texto-promocao-destaque-home">
                            <div className = "texto-promocao-destaque-jogo1">
                                <h1>Hades – Lute para sair do inferno</h1>
                                <h2>Supergiant Games</h2>
                                
                                <div className ="preco">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className = "destaque2-home">
                        <img className = "image1-home" src="./images/new_world_logo.png" alt= "New World"></img>

                        <div className = "texto-promocao-destaque-home">
                            <div className = "texto-promocao-destaque-jogo1">
                                <h1>Hades – Lute para sair do inferno</h1>
                                <h2>Supergiant Games</h2>
                                
                                <div className ="preco">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    {/* <div className = "imagem-promocao-destaque-home">
                        <img className = "image1-home" src="./images/new_world_logo.png" alt= "New World"></img>
                        <img src="./images/new_world_logo.png" alt= "New World"></img>
                    </div>
                    <div className = "texto-promocao-destaque-home">
                        <div className = "texto-promocao-destaque-jogo1">
                            <h1>Hades – Lute para sair do inferno</h1>
                            <h2>Supergiant Games</h2>
                            
                            <div className ="preco">
                                <h2><s> R$69,99 </s></h2>
                                <h1>R$29,99</h1>
                            </div>

                        </div>
                    </div> */}
                </div>
            </div>


        </div>

    );
}

export default Home;