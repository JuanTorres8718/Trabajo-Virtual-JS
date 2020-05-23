'use strict';

const array = [
    {
        name:'Carlos',
        surname:'Perez',
        phone:3228888,
    },
    {
        name:'Luisa',
        surname:'Sanla',
        phone:3228822,
    },
    {
        name:'Hugo',
        surname:'Ares',
        phone:3228800,
    }
];

const fun = () =>{
    const click = document.querySelector('#name').value;
    if(click === 'carlos'){
        document.querySelector('#surname').value = array[0].surname;
        document.querySelector('#phone').value = array[0].phone;
    }else if(click === 'luisa'){
        document.querySelector('#surname').value = array[1].surname;
        document.querySelector('#phone').value = array[1].phone;
    }else if(click === 'hugo'){
        document.querySelector('#surname').value = array[2].surname;
        document.querySelector('#phone').value = array[2].phone;
    }else {
        document.querySelector('#surname').value = '';
        document.querySelector('#phone').value = '';
    }
}



document.querySelector('#name').addEventListener('click', fun)
