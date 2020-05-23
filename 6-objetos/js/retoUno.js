'use strict';

const geekGirl1={
    name : 'Susana',
    age : 34,
    job : 'periodista'
}
const geekGirl2={
    name : 'Rocío',
    age : 25,
    job : 'Actriz'
}

const text = document.querySelector('.message');
text.innerHTML = `Mi nombre es ${geekGirl1.name}, tengo ${geekGirl1.age} años y soy ${geekGirl1.job}`;
const text2 = document.querySelector('.message2');
text2.innerHTML = `${geekGirl2.name}, ${geekGirl2.age} años, ${geekGirl2.job}`;
