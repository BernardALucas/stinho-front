import React, { useState } from "react";
import "./biblioteca.css"
import Footer from "../../Footer";
import Header from "../../Header";
import { useHistory } from "react-router-dom"


function biblioteca(){
    return(
        <div>
            { Header() }
            <div>
            
            </div>
            {Footer()}
        </div>
    );
}

export default biblioteca