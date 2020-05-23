'use strict';

const btn = document.querySelector('.send');
const ConsoleDir = ()=> {
    const content = document.querySelector('.txtInput');
    console.dir(content);
}

/**
 * El value: trae el valor que se ingreso en el input
 * el nodeName : especifica que es un input
 * y el required sale false por que no le especificamos que fuera un campo obligatorio
 */

btn.addEventListener('click',ConsoleDir);