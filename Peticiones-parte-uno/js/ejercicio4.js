'use strict';

  const repo =(e)=>{

    let nameU = document.querySelector('#name').value;
    let url = `https://api.github.com/orgs/${nameU}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        return fetch(data.repos_url);
    })
    .then(urlResponse => urlResponse.json())
    .then(repoData => {
        const ul = document.querySelector('ul');
        let ulContent = '';
    
        for (let i=0; i<repoData.length; i++) {
          const repoContent = `<li>${repoData[i].name}</li>`;
          ulContent += repoContent;
        }
        ul.innerHTML = ulContent;
    })
    
}



document.querySelector('#search').addEventListener('click', repo); 