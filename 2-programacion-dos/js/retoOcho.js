'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const firstContent = document.querySelector('#firstDog');
const secondContent = document.querySelector('#secondDog');
const thirdContent = document.querySelector('#thirdDog');

firstContent.innerHTML = `\
<img src="${firstDogImage}">\
<p>${firstDogName}</p>`;

secondContent.innerHTML = `\
<img src="${secondDogImage}">\
<p>${secondDogName}</p>`;

thirdContent.innerHTML = `\
<img src="${thirdDogImage}">\
<p>${thirdDogName}</p>`;