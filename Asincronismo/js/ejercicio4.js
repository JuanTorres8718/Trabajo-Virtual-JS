'use strict';

let counter = 0;

const incrementAndShowGrapes = () => {
  if(counter<12){
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = `<p>El contador de uvas va en: ${counter}</p>`;
  }
}

setInterval(incrementAndShowGrapes, 1000);