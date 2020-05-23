'use strict';

const geek = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'
    },
    {
        name: 'Sarita',
        age: 18,
        job: 'diseñadora'
    },
    {
        name: 'Claudia',
        age: 45,
        job: 'periodista'
    }
]

const countGeekGirls = (arrayGeek)=>{
    console.log(arrayGeek.length);
}

console.log(countGeekGirls(geek));

let mediaAge=0;
const averageAge = (arrayGeek)=>{
    for(let i=0; i<arrayGeek.length;i++){
        mediaAge += arrayGeek[i].age;   
    }
    console.log(mediaAge /=arrayGeek.length);
}
console.log(averageAge(geek));

let young;
let ageYoung = 99999999;
const theYoungest = (arrayGeek)=>{
    for(let i=0; i<arrayGeek.length;i++){
        if(arrayGeek[i].age < ageYoung){
            ageYoung = arrayGeek[i].age;
            young = arrayGeek[i].name;
        }  
    }
    console.log(young);
}
console.log(theYoungest(geek));

let count = 0;
const countDesigners = (arrayGeek)=>{
    for(let i=0; i<arrayGeek.length;i++){
        if(arrayGeek[i].job === 'diseñadora'){
            count +=1;
        }  
    }
    console.log(count);
}
console.log(countDesigners(geek));