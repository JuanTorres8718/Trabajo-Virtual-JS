'use strict';

const tasks = [
    {name: 'Recoger setas en el campo', completed: false},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false},
    {name: 'Recoger los tomates papá', completed: false},
    {name: 'Recoger la cebolla cabezona', completed: false}
  ];

const list = document.querySelector('.list');
const title = document.querySelector('.title');
let workCompleted = 0;
let workIncompleted=0;
let work = 0;

for (let i = 0; i < tasks.length; i++) {
    if(tasks[i].completed === true){
        list.innerHTML += `<li>\
        <p class="pName_${i} line_through">Nombre de la Tarea: ${tasks[i].name}</p>
        <p class="pStyle pWork_${i}">Tarea: completada </p> 
        <input class="workChecked_${i}" type="checkbox" checked></li>`;
        workCompleted +=1
        
    }else{
        list.innerHTML += `<li>\
        <p class="pName_${i}" >Nombre de la Tarea: ${tasks[i].name}</p>
        <p class="pStyle pWork_${i}">Tarea: Incompleta </p><input class="workChecked_${i}" type="checkbox"> 
        </li>`;
        workIncompleted +=1;
    }
    work +=1
}

title.innerHTML = `Tiene ${work} tareas. ${workCompleted} completadas y ${workIncompleted} por realizar`;

let dato;
dato = document.querySelectorAll('input');

function strickthrough(event){
    const btnwork = event.currentTarget;

    if(btnwork.checked){
        for (let i = 0; i < tasks.length; i++) {
            if(btnwork.classList.contains(`workChecked_${i}`)){
                tasks[i].completed = true;
                document.querySelector(`.pName_${i}`).classList.add('line_through');
                document.querySelector(`.pWork_${i}`).innerHTML = 'Tarea: completada';
                workCompleted +=1;
                workIncompleted -=1;
                title.innerHTML = `Tiene ${work} tareas. ${workCompleted} completadas y ${workIncompleted} por realizar`;
            }
    
        }
        
    }else{
        for (let i = 0; i < tasks.length; i++) {
            if(btnwork.classList.contains(`workChecked_${i}`)){
                tasks[i].completed = false;
                document.querySelector(`.pName_${i}`).classList.remove('line_through');
                document.querySelector(`.pWork_${i}`).innerHTML = 'Tarea: Incompleta';
                workCompleted -=1;
                workIncompleted +=1;
                title.innerHTML = `Tiene ${work} tareas. ${workCompleted} completadas y ${workIncompleted} por realizar`;
            }
    
        }
    }
}
for (let i = 0; i < dato.length; i++){
    dato[i].addEventListener('click', strickthrough);
}

