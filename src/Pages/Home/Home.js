import React from "react";
import Header from "../../Header";
import "./Home.css"
import { useRef, useEffect } from "react";
import Footer from "../../Footer/Footer";



function Home() {
    const carrossel = useRef(null);
    const interval = useRef(null)

    const HandleLeftClick = (e) => {
        const index = carrossel.current.children.length - 1;
        const ultima_foto = carrossel.current.children[index];

        carrossel.current.style.transition = `300ms ease-out all`;

        const tamanho_slide = carrossel.current.children[0].offsetWidth;

        carrossel.current.style.transform = `translateX(${tamanho_slide}px)`;

        const transicao = () => {
            carrossel.current.style.transition = 'none';
            carrossel.current.style.transform = `translateX(0)`;

            carrossel.current.insertBefore(ultima_foto, carrossel.current.firstChild);
        }

        carrossel.current.addEventListener('transitionend', transicao);

    }

    const HandleRightClick = (e) => {

        carrossel.current.style.transition = `300ms ease-out all`;

        const tamanho_slide = carrossel.current.children[0].offsetWidth;

        carrossel.current.style.transform = `translateX(-${tamanho_slide}px)`;

        const transicao = () => {
            carrossel.current.style.transition = 'none';
            carrossel.current.style.transform = `translateX(0)`;

            carrossel.current.appendChild(carrossel.current.children[0]);

        }

        carrossel.current.addEventListener('transitionend', transicao);

    }

    useEffect(() => {
        interval.current = setInterval(() => {
            HandleRightClick();
        }, 3000);

        carrossel.current.addEventListener('mouseenter', () => {
            clearInterval(interval.current);
        });

        carrossel.current.addEventListener('mouseleave', () => {
            interval.current = setInterval(() => {
                HandleRightClick();
            }, 3000);
        })
    }, []);


    return (
        <div className="container-home">
            {Header()}

            <div className="destaques-home">
                <div className="titulo-home">
                    <h1> Destaques </h1>
                </div>

                <div className="carrossel_titulo">
                    <div className="carrossel-home">
                        <div className="items_wrapper_home">
                            <div className="items_home" ref={carrossel}>
                                <button onClick={() => { window.location.href = "/jogo1"; }}>
                                    <img src="./images/new_world_logo.png" alt="New World"></img>
                                </button>

                                <button onClick={() => { window.location.href = "/jogo2"; }}>
                                    <img src="./images/new_world_logo.png" alt="New World"></img>
                                </button>

                                <button onClick={() => { window.location.href = "/jogo3"; }}>
                                    <img src="./images/new_world_logo.png" alt="New World"></img>
                                </button>

                                <button onClick={() => { window.location.href = "/jogo4"; }}>
                                    <img src="./images/new_world_logo.png" alt="New World"></img>
                                </button>

                                <button onClick={() => { window.location.href = "/jogo5"; }}>
                                    <img src="./images/new_world_logo.png" alt="New World"></img>
                                </button>

                            </div>

                        </div>

                        <div className="botao_passar_pro_lado">
                            <button className="botao_left" onClick={() => { HandleLeftClick() }}>
                                <img src="./images/216151_right_chevron_icon.png" alt="Botao Left" />
                            </button>

                            <button className="botao_right" onClick={() => { HandleRightClick() }}>
                                <img src="./images/216151_right_chevron_icon.png" alt="Botao Right" />
                            </button>
                        </div>

                    </div>





                </div>


            </div>

            {/* Início da seção de promoções */}
            <div className="promocao-home">
                <div className="titulo-home"><h1> Jogos em Promoção </h1></div>

                {/* Divisão dos dois jogos em destaque da parte de promoções */}
                <div className="promocao-destaque-home">
                    <button className="destaque1-home" onClick={() => { window.location.href = "/jogo6"; }}>
                        <img className="image1-home" src="./images/new-world-esticado.png" alt="New World"></img>

                        <div className="texto-promocao-destaque-home">
                            <div className="texto-promocao-destaque-jogo1">
                                <h1>Hades – Lute para sair do inferno</h1>
                                <h2>Supergiant Games</h2>

                                <div className="conjunto-preco-destaque">

                                    <div className="desconto-home">
                                        <h1>- 57%</h1>
                                    </div>

                                    <div className="preco">
                                        <h2><s> R$69,99 </s></h2>
                                        <h1>R$29,99</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </button>

                    <button className="destaque2-home" onClick={() => { window.location.href = "/jogo7"; }}>
                        <img className="image2-home" src="./images/new-world-esticado.png" alt="New World"></img>

                        <div className="texto-promocao-destaque-home">
                            <div className="texto-promocao-destaque-jogo1">
                                <h1>Hades – Lute para sair do inferno</h1>
                                <h2>Supergiant Games</h2>

                                <div className="conjunto-preco-destaque">

                                    <div className="desconto-home">
                                        <h1> - 57%</h1>
                                    </div>

                                    <div className="preco">
                                        <h2><s> R$69,99 </s></h2>
                                        <h1>R$29,99</h1>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </button>

                </div>

                <div className="todos-jogos-promocao">
                    <div className="coluna1-home">
                        <button className="jogo1-promocao-home" onClick={() => { window.location.href = "/jogo8"; }}>
                            <div className="imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className="texto-jogo1-home">
                                <div className="titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className="preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>

                        <button className="jogo1-promocao-home" onClick={() => { window.location.href = "/jogo9"; }}>
                            <div className="imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className="texto-jogo1-home">
                                <div className="titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className="preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>

                        <button className="jogo1-promocao-home" onClick={() => { window.location.href = "/jogo10"; }}>
                            <div className="imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className="texto-jogo1-home">
                                <div className="titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className="preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>
                    </div>

                    <div className="coluna2-home">
                        <button className="jogo1-promocao-home" onClick={() => { window.location.href = "/jogo11"; }}>
                            <div className="imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className="texto-jogo1-home">
                                <div className="titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className="preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>

                        <button className="jogo1-promocao-home" onClick={() => { window.location.href = "/jogo12"; }}>
                            <div className="imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className="texto-jogo1-home">
                                <div className="titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className="preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>

                        <button className="jogo1-promocao-home" onClick={() => { window.location.href = "/jogo13"; }}>
                            <div className="imagem-jogo1-home">
                                <div className="desconto-home"><h1>- 49%</h1></div>
                            </div>

                            <div className="texto-jogo1-home">
                                <div className="titulo-jogo1-home">
                                    <h1>Hades – Lute para sair do inferno</h1>
                                    <h2>Supergiant Games</h2>
                                </div>
                                <div className="preco-jogo1-home">
                                    <h2><s> R$69,99 </s></h2>
                                    <h1>R$29,99</h1>
                                </div>

                            </div>
                        </button>
                    </div>
                </div>

            </div>

            <div className="botao-home">
                <button onClick={() => { window.location.href = "/allgames"; }}>TODOS OS JOGOS</button>
            </div>

        {Footer()} 

        </div>
    );


}


export default Home;