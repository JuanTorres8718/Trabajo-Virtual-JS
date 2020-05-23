'use strict';

const pContent = document.querySelector('.event');

const newP = () =>{
    let content = document.querySelector('body');
    content.innerHTML += '<p>lorem ipsum</p>';
}

pContent.addEventListener('mouseover', newP);