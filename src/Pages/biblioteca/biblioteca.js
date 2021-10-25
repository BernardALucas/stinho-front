import React, { useState } from "react";
import "./biblioteca.css"
import Footer from "../../Footer";
import Header from "../../Header";
import { useHistory } from "react-router-dom"


function biblioteca(){
    return(
        <div>
            { Header() }
            <div classname="base-biblioteca">
                <div className="img-biblioteca">
                    <img src="/images/new_world_logo.png" alt="new_world_logo"/>

                </div>
                <div className="img-biblioteca">
                    <img src="/images/new_world_logo.png" alt="new_world_logo"/>

                </div>
            </div>
            {Footer()}
        </div>
    );
}

export default biblioteca