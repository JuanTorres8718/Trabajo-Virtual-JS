'use strict';

const body = document.querySelector('body');
body.style.backgroundColor= 'black';
body.style.color= 'white';
const div = document.querySelector('div');
for(let i=0; i<100; i++){
    const newItem = document.createElement('p');
    newItem.setAttribute('class',`p${i}`)
    const newContent = document.createTextNode('He aprendido bien cómo funcionan los bucles');
     newItem.appendChild(newContent);
     div.appendChild(newItem);

     const selectItem = document.createElement('SELECT');
     selectItem.setAttribute('class',`mySelect${i}`);
     div.appendChild(selectItem);

     const whiteItem = document.createElement('option');
     whiteItem.setAttribute('value','white');
     const textwhite = document.createTextNode('Blanco');
     whiteItem.appendChild(textwhite);
     document.querySelector(`.mySelect${i}`).appendChild(whiteItem);

    const redItem = document.createElement('option');
    redItem.setAttribute('value','red');
    const textred = document.createTextNode('Rojo');
    redItem.appendChild(textred);
    document.querySelector(`.mySelect${i}`).appendChild(redItem);

    const blueItem = document.createElement('option');
    blueItem.setAttribute('value','blue');
    const textblue = document.createTextNode('Azul');
    blueItem.appendChild(textblue);
    document.querySelector(`.mySelect${i}`).appendChild(blueItem);

    const greenItem = document.createElement('option');
    greenItem.setAttribute('value','green');
    const textgreen = document.createTextNode('Verde');
    greenItem.appendChild(textgreen);
    document.querySelector(`.mySelect${i}`).appendChild(greenItem);

    const yellowItem = document.createElement('option');
    yellowItem.setAttribute('value','yellow');
    const textyellow = document.createTextNode('Azul');
    yellowItem.appendChild(textyellow);
    document.querySelector(`.mySelect${i}`).appendChild(yellowItem);

    const roseItem = document.createElement('option');
    roseItem.setAttribute('value','pink');
    const textrose = document.createTextNode('Rosa');
    roseItem.appendChild(textrose);
    document.querySelector(`.mySelect${i}`).appendChild(roseItem);
}


const selects = document.querySelectorAll('select');

const fun = (e)=>{
    let nameClass = e.target.className;
    let colorValue = e.target.value;
    let letter =  `.p${nameClass.substr(8,9)}`;
    document.querySelector(letter).style.color = colorValue;

}

selects.forEach(element => {
    element.addEventListener('change', fun)
});

