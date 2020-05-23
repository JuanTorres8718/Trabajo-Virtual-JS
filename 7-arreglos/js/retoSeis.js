'use strict';

const btn = document.querySelector('.send');
const content = document.querySelector('.message');
const movies=[];

const masterPiece = ()=>{

    movies[0] = document.querySelector('.first').value;
    movies[1] = document.querySelector('.second').value;
    for( const contMovies of movies){
       content.innerHTML += `<p>¡A mí también me encantó "${contMovies}"! Tenemos mucho en común, humana.</p>`
    }   
}

btn.addEventListener('click', masterPiece);