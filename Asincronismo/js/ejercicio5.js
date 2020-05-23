'use strict';

let counterS = 0;
let counterM =0;
const incrementAndShowPublic = () => {
  if(counterM>0 && counterS<59){
    counterS++;
    const time = document.querySelector('.timeMessage');
    time.innerHTML = `Esta imagen fue publicada hace ${counterM} min con ${counterS} segundos`;
  }else if(counterS===59){
    counterM++;
    counterS=0;
    const time = document.querySelector('.timeMessage');
    time.innerHTML = `Esta imagen fue publicada hace ${counterM} minutos`;
  }else if(counterS<59){
    counterS++;
    const time = document.querySelector('.timeMessage');
    time.innerHTML = `Esta imagen fue publicada hace ${counterS} segundos`;
  }
}

setInterval(incrementAndShowPublic, 1000);