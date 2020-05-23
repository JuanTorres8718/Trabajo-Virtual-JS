'use strict';

let ageDog = 1;
let age;
if(ageDog=== 1){
    console.log(`The dog have 15 years of human`);
}else if(ageDog === 2){
    age = 15+9;
    console.log(`The dog have ${age} years of human`);
}else if(ageDog >2){  
    ageDog = (ageDog - 2)*5;
    age = 15+9+ageDog;
    console.log(`The dog have ${age} years of human`);
}else{
    console.log(`Sorry but the dog need have 1 year onwards`);
}
