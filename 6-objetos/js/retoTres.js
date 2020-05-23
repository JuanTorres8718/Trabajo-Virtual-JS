'use strict';

const geekGirl1={
    name : 'Susana',
    age : 34,
    job : 'periodista',
    run: () => 'Estoy corriendo',
    runAMarathon: (distance)=> `Estoy corriendo un maratón de ${distance} kilómetros`,
    showBio: function(){
        return alert(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`);
    }
}

const geekGirl2={
    name : 'Rocío',
    age : 25,
    job : 'Actriz',
    showBio: function(){
        return alert(`${this.name}, ${this.age} años, ${this.job}`);
    }
}

console.log(geekGirl1.showBio());