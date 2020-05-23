'use strict';

function calculator(box,widthcontent,padding,border){
    if(box == true){
       let width= widthcontent-(2*padding)-(2*border);
        return (`El elemento es border-box y el ancho de su contenido es de ${width}`);
    }else{
        let width = widthcontent+(2*padding)+(2*border);
        return (`El elemento es content-box y el ancho de su contenido es de ${width}`)
    }
}

console.log(calculator(true,160,20,8));
console.log(calculator(false,160,20,8));