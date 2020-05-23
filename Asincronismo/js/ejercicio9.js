'use strict';

'use strict';

let counter = 0;
let temp;


const btn = document.querySelector('button');


const btnAlert = () => {
    counter++;
  if(counter===10){
    clearInterval(temp)
    btn.innerHTML = `¿te has dormido?`;
    btn.classList.add('btnAlert');
  }
}

temp =setInterval(btnAlert, 1000);


const fun = () =>{
    clearInterval(temp)
    temp =setInterval(btnAlert, 1000);
    btn.innerHTML = `Has Click aqui`;
    btn.classList.remove('btnAlert');
    counter=0;
}

btn.addEventListener('click', fun);