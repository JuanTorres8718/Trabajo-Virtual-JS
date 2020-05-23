'use strict';

const geekGirl1={
    name : 'Susana',
    age : 34,
    job : 'periodista',
    run: () => 'Estoy corriendo',
    runAMarathon: (distance)=> `Estoy corriendo un maratón de ${distance} kilómetros`
}

console.log(geekGirl1.run());
console.log(geekGirl1.runAMarathon(50));