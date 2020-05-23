'use strict';

const fun = () =>{
    const array=[];
    const name = document.querySelector('#name').value;
    const url =`https://swapi.dev/api/people/?search=${name}`;
    
    function getPage(apiURL) {
        fetch(apiURL)
        .then(response => response.json())
        .then(data => {
           showDetail(data)
        });
    }
      
      function showDetail(data) {
        for (let i = 0; i < data.results.length; i++) {
          array.push(data.results[i].name);

        }
        if (data.next) {
          getPage(data.next);
        } else {
            const ul = document.querySelector('ul');
            let ulContent = '';
        
            for (let i=0; i<array.length; i++) {
            const repoContent = `<li>${array[i]}</li>`;
            ulContent += repoContent;
            }
            ul.innerHTML = ulContent;
          
        }
    }
    
    getPage(url);

    
}



const btn = document.querySelector('#search')

btn.addEventListener('click',fun)