'use strict';

const btn = document.querySelector('.send');

const print = ()=>{
    let name = document.querySelector('.name').value;
    console.log(`Hola, ${name}`);
};

btn.addEventListener('click',print);
