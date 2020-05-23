'use strict';

let counter = 0;
let temp;

const incrementAndShowGrapes = () => {
  if(counter<12){
    counter++;
    const time = document.querySelector('.timeClear');
    time.innerHTML = `<p>El contador de uvas va en: ${counter}</p>`;

  }else{
      clearInterval(temp);
  }
}

 temp = setInterval(incrementAndShowGrapes, 1000);