'use strict';

const image = 'http://placehold.it/300x300';

let variable = '';
// let variable = 'http://www.fillmurray.com/300/300';

const content = document.querySelector('.content-image');

content.innerHTML =`<img src="${(variable || image)}">`;