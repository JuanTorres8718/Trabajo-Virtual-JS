'use strict';

const activableClass = document.querySelector('.content');
const h1Content = document.querySelector('h1');
const pContent = document.querySelector('p');

if(activableClass.classList.contains('warning')){
    h1Content.innerHTML = 'AVISO';
    pContent.innerHTML = 'Tengan cuidado';
}else if(activableClass.classList.contains('error')){
    h1Content.innerHTML = 'ERROR';
    pContent.innerHTML = 'Ha surgido un error';
}else if(activableClass.classList.contains('success')){
    h1Content.innerHTML = 'CORRECTO';
    pContent.innerHTML = 'Los datos son correctos';
}