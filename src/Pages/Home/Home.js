import React from "react";
import { useHistory } from "react-router";
import Header from "../../Header";
import "./Home.css"
import { useRef, useState, useEffect } from "react";



function Home(){
    const history = useHistory();
    const carrossel = useRef(null);

    const HandleLeftClick = (e) => {
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    const HandleRightClick = (e) => {
        /* e.preventDefault(); */
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;

    }

    return(
        <div className = "container-home"> 
            { Header() }

            <div className = "destaques-home"> 
                <div className = "titulo-home">
                    <h1> Destaques </h1>
                </div>

                <div className = "carrossel_titulo">
                        <div className = "carrossel-home">
                            <div id = "items_wrapper_home">
                                <div id = "items_home" ref = {carrossel}>
                                    <button onClick = {()=>{history.push("jogo1");}}>
                                        <img src="./images/new_world_logo.png" alt= "New World"></img>
                                    </button>
                                    
                                    <button onClick = {()=>{history.push("jogo2");}}>
                                        <img src="./images/new_world_logo.png" alt= "New World"></img>
                                    </button>
                                    
                                    <button onClick = {()=>{history.push("jogo3");}}>
                                        <img src="./images/new_world_logo.png" alt= "New World"></img>
                                    </button>
                                    
                                    <button onClick = {()=>{history.push("jogo4");}}>
                                        <img src="./images/new_world_logo.png" alt= "New World"></img>
                                    </button>
                                
                                    <button onClick = {()=>{history.push("jogo5");}}>
                                        <img src="./images/new_world_logo.png" alt= "New World"></img>
                                    </button>

                                </div>
                                
                            </div>
                        
                    </div>

                    <div className = "botao_passar_pro_lado">
                        <button className = "botao_left" onClick = {()=> {HandleLeftClick()}}>
                            <img src="./images/216151_right_chevron_icon.png" alt = "Botao Left"/> 
                        </button>

                        <button className = "botao_right" onClick = {()=> {HandleRightClick()}}>
                            <img src="./images/216151_right_chevron_icon.png" alt = "Botao Right"/>
                        </button>
                    </div>

                </div>
                

            </div>

            {/* Início da seção de promoções */}
            <div className = "promocao-home">
                <div className = "titulo-home"><h1> Jogos em Promoção </h1></div>
                
                {/* Divisão dos dois jogos em destaque da parte de promoções */}
                <div className = "promocao-destaque-home">
                    <button className = "destaque1-home" onClick = {()=>{history.push("jogo6");}}>
                        <img className = "image1-home" src="./images/new-world-esticado.png" alt= "New World"></img>

                        <div className = "texto-promocao-destaque-home">
                            <div className = "texto-promocao-destaque-jogo1">
                                <h1>Hades – Lute para sair do inferno</h1>
                                <h2>Supergiant Games</h2>
                                
                                <div className = "conjunto-preco-destaque">
                                    
                                    <div className = "desconto-home">
                                        <h1>- 57%</h1>
                                    </div>

                                    <div className ="preco">
                                        <h2><s> R$69,99 </s></h2>
                                        <h1>R$29,99</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </button>

                    <button className = "destaque2-home" onClick = {()=>{history.push("jogo7");}}>
                        <img className = "image2-home" src="./images/new-world-esticado.png" alt= "New World"></img>

                        <div className = "texto-promocao-destaque-home">
                            <div className = "texto-promocao-destaque-jogo1">
                                <h1>Hades – Lute para sair do inferno</h1>
                                <h2>Supergiant Games</h2>
                                
                                <div className = "conjunto-preco-destaque">
                                    
                                    <div className = "desconto-home">
                                        <h1> - 57%</h1>
                                    </div>

                                    <div className ="preco">
                                        <h2><s> R$69,99 </s></h2>
                                        <h1>R$29,99</h1>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </button>
        
                </div>

                <div className = "todos-jogos-promocao">
                    <div className ="coluna1-home">
                        <button className = "jogo1-promocao-home" onClick = {()=>{history.push("jogo8");}}>
                            <div className = "imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className = "texto-jogo1-home">
                                <div className = "titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className = "preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>

                        <button className = "jogo1-promocao-home" onClick = {()=>{history.push("jogo9");}}>
                            <div className = "imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className = "texto-jogo1-home">
                                <div className = "titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className = "preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>

                        <button className = "jogo1-promocao-home" onClick = {()=>{history.push("jogo10");}}>
                            <div className = "imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className = "texto-jogo1-home">
                                <div className = "titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className = "preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>
                    </div>

                    <div className ="coluna2-home">
                        <button className = "jogo1-promocao-home" onClick = {()=>{history.push("jogo11");}}>
                            <div className = "imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className = "texto-jogo1-home">
                                <div className = "titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className = "preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>
                        
                        <button className = "jogo1-promocao-home" onClick = {()=>{history.push("jogo12");}}>
                            <div className = "imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className = "texto-jogo1-home">
                                <div className = "titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className = "preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>

                        <button className = "jogo1-promocao-home" onClick = {()=>{history.push("jogo13");}}>
                            <div className = "imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className = "texto-jogo1-home">
                                <div className = "titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className = "preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>
                    </div>
                </div>

            </div>
            
            <div className = "botao-home">
                <button onClick = {()=>{history.push("todos-os-jogos");}}>TODOS OS JOGOS</button>
            </div>

        </div>

    );
}


export default Home;