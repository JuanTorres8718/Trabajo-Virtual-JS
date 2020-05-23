'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const btn = document.querySelector('.start');
const movie1 = document.querySelector('.movie1');
const movie2 = document.querySelector('.movie2');
const movie3 = document.querySelector('.movie3');
const movie4 = document.querySelector('.movie4');
const movie5 = document.querySelector('.movie5');

const list = () =>{
    document.getElementById("listUl").style.display = "block";
    movie1.innerHTML= inception;
    movie2.innerHTML= theButterFlyEffect;
    movie3.innerHTML= eternalSunshineOfTheSM;
    movie4.innerHTML= blueVelvet;
    movie5.innerHTML= split;

}

btn.addEventListener('click', list);

function clickMovie (event){
    const selectMovie = event.currentTarget;
    console.log(selectMovie.textContent);
}

movie1.addEventListener('click',clickMovie);
movie2.addEventListener('click',clickMovie);
movie3.addEventListener('click',clickMovie);
movie4.addEventListener('click',clickMovie);
movie5.addEventListener('click',clickMovie);


