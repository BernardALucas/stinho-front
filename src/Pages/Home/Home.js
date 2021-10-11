import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import "./Home.css"

function Home(){
    return(
        <div header> 
            { Header() }
        </div>

    );
}

export default Home;