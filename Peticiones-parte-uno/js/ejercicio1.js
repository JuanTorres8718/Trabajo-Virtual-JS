'use strict';

fetch('https://rickandmortyapi.com/api/character/?name=Rick&status=Alive')
  .then(response => response.json())
  .then(data => {
      let dato = data.results[1]
    const img = document.querySelector('img');
    img.src = dato.image;
    img.alt = dato.name;
  });