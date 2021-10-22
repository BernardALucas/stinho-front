/* import React from "react";

function carrossel(){
    let time = 2000;
    let currentImageIndex = 0;
    let images = document.querySelector("#items_home img")
    let max = 5;

    function start(){
            setInterval(() => {

                TrocarImagens();

            }, time);
        }

    function TrocarImagens(){
        images[currentImageIndex].classList.remove("selected");

        currentImageIndex++;

        if(currentImageIndex >= max)
            currentImageIndex = 0;

        images[currentImageIndex].classList.add("selected");
    }



    window.addEventListener("load", start);
}


export default carrossel(); */