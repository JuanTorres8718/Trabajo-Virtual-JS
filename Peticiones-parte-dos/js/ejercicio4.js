'use strict';

fetch('https://rickandmortyapi.com/api/character/?name=Rick&status=Alive')
  .then(response => response.json())
  .then(data => {
      let dato = data.results[2];
      localStorage.setItem('dato', JSON.stringify(dato));
      console.log(savedDato)
    const img = document.querySelector('img');
    img.src = dato.image;
    img.alt = dato.name;
  });

  
const  savedDato=JSON.parse(localStorage.getItem('dato'));