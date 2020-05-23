'use strict';
const sectionAboutElement = document.querySelector('ul');

sectionAboutElement.querySelector('.teacher--isra').classList.toggle('teacher--selected')
sectionAboutElement.querySelector('.teacher--tuerto').classList.toggle('teacher--selected')
sectionAboutElement.querySelector('.teacher--nasi').classList.toggle('teacher--selected')

const fav1 =sectionAboutElement.querySelector('.teacher--isra');
const fav2 =sectionAboutElement.querySelector('.teacher--tuerto');
const fav3 =sectionAboutElement.querySelector('.teacher--nasi');
let dato;
let variable; 
variable =fav1.querySelector('.favorite').textContent;
if(variable=='Añadir'){
  dato = fav1.querySelector('.favorite')
  dato.innerHTML='Quitar';
}else{
  dato = fav1.querySelector('.favorite')
  dato.innerHTML='Añadir';
}

variable =fav2.querySelector('.favorite').textContent
if(variable=='Añadir'){
  dato = fav2.querySelector('.favorite')
  dato.innerHTML='Quitar';
}else{
  dato = fav2.querySelector('.favorite')
  dato.innerHTML='Añadir';
}

variable =fav3.querySelector('.favorite').textContent
if(variable=='Añadir'){
  dato = fav3.querySelector('.favorite')
  dato.innerHTML='Quitar';
}else{
  dato = fav3.querySelector('.favorite')
  dato.innerHTML='Añadir';
}