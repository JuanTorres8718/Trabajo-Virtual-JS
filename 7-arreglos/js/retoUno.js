'use strict';



const workWithMovies = ()=>{
    const movies= [
        'The Conjuring',
        'The Texas Chain Saw Massacre',
        'Rec'
    ];
    
    movies[3]='The Exorcist';
    console.log(movies);
    movies[3]= 'Saw';
    console.log(movies);
    movies[1]='Halloween';
    console.log(movies);
}

console.log(workWithMovies());
