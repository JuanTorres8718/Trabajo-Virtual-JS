'use strict';

const numbers = [1, 2, 3];
let content = '';


const ul = document.querySelector('ul');
for(let i=0; i<numbers.length; i++){
    const newItem = document.createElement('li');
    const newContent = document.createTextNode(numbers[i]);
     newItem.appendChild(newContent);
     ul.appendChild(newItem);

}



