'use strict';

let counterS = 0;
let counterM =0;
let temp;

const cronometro = () => {
  if(counterM>=0 && counterS<59){
    counterS++;
    const time = document.querySelector('.nCronometro');
    if(counterS<=9 && counterM<9){
        time.innerHTML = `<h1>00:0${counterM}:0${counterS}</h1>`;
    }else if(counterS>9 && counterM<9){
        time.innerHTML = `<h1>00:0${counterM}:${counterS}</h1>`;
    }else if(counterS>9 && counterM>9){
        time.innerHTML = `<h1>00:${counterM}:${counterS}</h1>`;
    }
  }else if(counterS===59){
    counterM++;
    counterS=0;
    const time = document.querySelector('.nCronometro');
    if(counterM>9){
        time.innerHTML = `<h1>00:${counterM}:0${counterS}</h1>`;
    }else{
        time.innerHTML = `<h1>00:0${counterM}:0${counterS}</h1>`;
    }
  }
}

temp = setInterval(cronometro, 1000);

const fun = (e) =>{
    if(e.target.id === 'empezar'){
        counterS=0;
        counterM=0;
        clearInterval(temp)
        temp = setInterval(cronometro, 1000);
    }else if(e.target.id === 'parar'){
        clearInterval(temp)
    }else if(e.target.id === 'continuar'){
        clearInterval(temp)
        temp = setInterval(cronometro, 1000);
    }
}


const btns = document.querySelectorAll('button');

btns.forEach(element => {
    element.addEventListener('click',fun);
});


