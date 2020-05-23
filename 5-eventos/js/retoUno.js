'use strict';
const button = document.querySelector('.change');

const changeText = () =>{
    let txt = document.querySelector(".text");
    txt.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
};

button.addEventListener('click', changeText);