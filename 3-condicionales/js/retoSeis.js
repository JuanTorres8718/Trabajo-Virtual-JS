'use strict';

const activableClass = document.querySelector('.content');
const h1Content = document.querySelector('h1');
const pContent = document.querySelector('p');

const warning = (activableClass.classList.contains('warning'))? true : false;
const error = (activableClass.classList.contains('error')) ? true : false;
const success = (activableClass.classList.contains('success')) ? true : false;

if(warning){
    h1Content.innerHTML = 'AVISO';
    pContent.innerHTML = 'Tengan cuidado';
}else if(error){
    h1Content.innerHTML = 'ERROR';
    pContent.innerHTML = 'Ha surgido un error';
}else if(success){
    h1Content.innerHTML = 'CORRECTO';
    pContent.innerHTML = 'Los datos son correctos';
}