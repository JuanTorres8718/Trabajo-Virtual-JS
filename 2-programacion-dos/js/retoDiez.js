'use strict';

const age = document.querySelector('.ageHours').value;
const days = parseInt(age)*365;
const hours = days*24;

const message = document.querySelector('.retirement');

message.innerHTML = `Usted lleva viviendo en total ${hours} horas`;
