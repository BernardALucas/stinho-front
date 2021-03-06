import React, { useState, useRef, useEffect } from "react";
import Header from "../../Header";
import "./Home.css"
import Footer from "../../Footer/Footer";


function Home() {
    const carrossel = useRef(null);
    const interval = useRef(null);

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3333/games')
            .then((response) => response.json())
            .then(setData);
    }, []);

    const HandleLeftClick = (e) => {
        const index = carrossel.current.children.length - 1;
        const ultima_foto = carrossel.current.children[index];

        carrossel.current.style.transition = `500ms ease-out all`;

        const tamanho_slide = carrossel.current.children[0].offsetWidth;

        carrossel.current.style.transform = `translateX(${tamanho_slide}px)`;

        const transicao = () => {
            carrossel.current.style.transition = 'none';
            carrossel.current.style.transform = `translateX(0)`;

            carrossel.current.insertBefore(ultima_foto, carrossel.current.firstChild);

            carrossel.current.removeEventListener('transitionend', transicao);
        }

        carrossel.current.addEventListener('transitionend', transicao);

    }

    const HandleRightClick = (e) => {

        carrossel.current.style.transition = `500ms ease-out all`;

        const tamanho_slide = carrossel.current.children[0].offsetWidth;

        carrossel.current.style.transform = `translateX(-${tamanho_slide}px)`;

        const transicao = () => {
            carrossel.current.style.transition = 'none';
            carrossel.current.style.transform = `translateX(0)`;

            carrossel.current.appendChild(carrossel.current.children[0]);

            carrossel.current.removeEventListener('transitionend', transicao);

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
                            {data.map((item_carrossel) => {
                                const {game_id, title, price, old_price, image, developer, genero, description, category, nivel_destaque} = item_carrossel;
                                
                                if(nivel_destaque === "carrossel")
                                    return(
                                            <button onClick={() => { window.location.href = game_id; }}>
                                                <img src={image} alt={title}></img>
                                            </button>                                       
                                    );
                                    else
                                        return null;
                            })}
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

            {/* In??cio da se????o de promo????es */}
            <div className="promocao-home">
                <div className="titulo-home"><h1> Jogos em Promo????o </h1></div>

                {/* Divis??o dos dois jogos em destaque da parte de promo????es */}
                <div className="promocao-destaque-home">
                    {data.map((destaque_home)=>{
                        const {game_id, title, price, old_price, image, developer, genero, description, category, nivel_destaque} = destaque_home;
                        
                        if(nivel_destaque === "destaque")
                        return(
                            <button className="destaque1-home" onClick={() => { window.location.href = game_id; }}>
                                <img className="image1-home" src= {image} alt={title}></img>

                                <div className="texto-promocao-destaque-home">
                                    <div className="texto-promocao-destaque-jogo1">
                                        <h1>{title}</h1>
                                        <h2>{developer}</h2> {/* ADICIONAR MONTADORA DO JOGO */}

                                        <div className="conjunto-preco-destaque">

                                            <div className="desconto-destaque-home">
                                                <h1>- {Math.round((1 - (price/old_price))*100)}%</h1>
                                            </div>

                                            <div className="preco">
                                                <h2><s> R${old_price} </s></h2>
                                                <h1>R${price}</h1>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </button>
                        );

                    else 
                        return null;
                    })}

                </div>

                <div className="todos-jogos-promocao">
                    <div className="coluna1-home">
                        {data.map((jogos_promocao) => {
                            const {game_id, title, price, old_price, image, developer, genero, description, category, nivel_destaque} = jogos_promocao;
                            
                            if(nivel_destaque === "coluna_1")
                                return(
                                    <button className="jogo1-promocao-home" onClick={() => { window.location.href = game_id; }}>
                                        <div className="imagem-jogo1-home">
                                            <img src={image} alt = {title} />
                                            <div className="desconto-home"><h1>- {Math.round((1 - (price/old_price))*100)}%</h1></div>
                                        </div>

                                        <div className="texto-jogo1-home">
                                            <div className="titulo-jogo1-home">
                                                <h1>{title}</h1>
                                                <h2>{developer}</h2> {/* COLOCAR MONTADORA */}
                                            </div>
                                            <div className="preco-jogo1-home">
                                                <h2><s> R${old_price} </s></h2>
                                                <h1>R${price}</h1>
                                            </div>

                                        </div>
                                    </button>
                                );

                            else 
                                return null;
                        })}

                    </div>

                    <div className="coluna1-home">
                    {data.map((jogos_promocao) => {
                            const {game_id, title, price, old_price, image, developer, genero, description, category, nivel_destaque} = jogos_promocao;
                            
                            if(nivel_destaque === "coluna_2")
                                return(
                                    <button className="jogo1-promocao-home" onClick={() => { window.location.href = game_id; }}>
                                        <div className="imagem-jogo1-home">
                                            <img src={image} alt = {title} />
                                            <div className="desconto-home"><h1>- {Math.round((1 - (price/old_price))*100)}%</h1></div>
                                        </div>

                                        <div className="texto-jogo1-home">
                                            <div className="titulo-jogo1-home">
                                                <h1>{title}</h1>
                                                <h2>{developer}</h2> {/* COLOCAR MONTADORA */}
                                            </div>
                                            <div className="preco-jogo1-home">
                                                <h2><s> R${old_price} </s></h2>
                                                <h1>R${price}</h1>
                                            </div>

                                        </div>
                                    </button>
                                );

                            else 
                                return null;
                        })}

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