'use strict';

let year= 2017;
const moon= [];
for (let i = 0; i < 15; i++) {
    year +=3;
    moon[i]= year;
}

console.log(`Las proximas 15 lunas seran en los años:`);
for (let i = 0; i < moon.length; i++) {
    console.log(moon[i]);
}