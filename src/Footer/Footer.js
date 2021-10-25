import React, { useState } from "react";
import { BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Footer.css";

function Footer() {

    return (
        <div className="base_footer">
            <div className="conjunto_footer">
                <div className="icones_footer">
                    <IconContext.Provider value={{ color: "#808080", size: "3em", className: "icone_footer" }}>
                        <BsTwitter></BsTwitter>
                        <FaInstagramSquare></FaInstagramSquare>
                        <BsFacebook></BsFacebook>
                        <BsYoutube></BsYoutube>
                    </IconContext.Provider>
                </div>
                <div className="texto_footer">
                    Central de Atendimento:
                    <br />
                    contato@stinho.com.br
                    <br />
                    (31) 4002-8922
                </div>

            </div>
            <div className="logo_footer">
                <img src="./images/Logo_footer.png" alt="Stinho" />
            </div>
        </div>
    );
}

export default Footer;