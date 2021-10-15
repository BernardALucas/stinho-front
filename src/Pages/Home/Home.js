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

            {/* Início da seção de promoções */}
            <div className = "promocao-home">
                <div className = "titulo-home"><h1> Jogos em Promoção </h1></div>
                
                {/* Divisão dos dois jogos em destaque da parte de promoções */}
                <div className = "promocao-destaque-home">
                    <div className = "destaque1-home">
                        <img className = "image1-home" src="./images/new-world-esticado.png" alt= "New World"></img>

                        <div className = "texto-promocao-destaque-home">
                            <div className = "texto-promocao-destaque-jogo1">
                                <h1>Hades – Lute para sair do inferno</h1>
                                <h2>Supergiant Games</h2>
                                
                                <div className = "conjunto-preco-destaque">
                                    
                                    <div className = "desconto">
                                        <h1>- 57%</h1>
                                    </div>

                                    <div className ="preco">
                                        <h2><s> R$69,99 </s></h2>
                                        <h1>R$29,99</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "destaque2-home">
                        <img className = "image2-home" src="./images/new-world-esticado.png" alt= "New World"></img>

                        <div className = "texto-promocao-destaque-home">
                            <div className = "texto-promocao-destaque-jogo1">
                                <h1>Hades – Lute para sair do inferno</h1>
                                <h2>Supergiant Games</h2>
                                
                                <div className = "conjunto-preco-destaque">
                                    
                                    <div className = "desconto">
                                        <h1> - 57%</h1>
                                    </div>

                                    <div className ="preco">
                                        <h2><s> R$69,99 </s></h2>
                                        <h1>R$29,99</h1>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
        
                </div>

                <div className = "todos-jogos-promocao">
                    <div className ="coluna1-home">
                        <div className = "jogo1-promocao-home">
                            <div className = "imagem-jogo1-home">
                                <div className="desconto"><h1>- 49%</h1></div>
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
                        </div>

                        <div className = "jogo1-promocao-home">
                            <div className = "imagem-jogo1-home">
                                <div className="desconto"><h1>- 49%</h1></div>
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
                        </div>

                        <div className = "jogo1-promocao-home">
                            <div className = "imagem-jogo1-home">
                                <div className="desconto"><h1>- 49%</h1></div>
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
                        </div>
                    </div>

                    <div className ="coluna2-home">
                        <div className = "jogo1-promocao-home">
                            <div className = "imagem-jogo1-home">
                                <div className="desconto"><h1>- 49%</h1></div>
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
                        </div>
                        
                        <div className = "jogo1-promocao-home">
                            <div className = "imagem-jogo1-home">
                                <div className="desconto"><h1>- 49%</h1></div>
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
                        </div>

                        <div className = "jogo1-promocao-home">
                            <div className = "imagem-jogo1-home">
                                <div className="desconto"><h1>- 49%</h1></div>
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
                        </div>
                    </div>
                </div>

            </div>
            
            <div className = "botao-home">
                <button>TODOS OS JOGOS</button>
            </div>

        </div>

    );
}

export default Home;