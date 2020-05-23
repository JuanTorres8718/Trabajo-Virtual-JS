'use strict';

const array = document.querySelectorAll('p');

for(let i=0; i< array.length; i++){
    const h = array[i].offsetHeight;
    array[i].style.height = `${h/3}px`;
}