'use strict';


const user =(e)=>{

    let nameU = document.querySelector('#name').value;
    let url = `https://api.github.com/users/${nameU}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const content = document.querySelector('#content');
        console.log(data)
        content.innerHTML += `
        <h3>Resultados</h3>
        <p>Nombre: ${data.name}</p>
        <p>Numero de repositorios: ${data.public_repos}</p>
        <img src="${data.avatar_url}">
        `
    })
    
}



document.querySelector('#search').addEventListener('click', user);    