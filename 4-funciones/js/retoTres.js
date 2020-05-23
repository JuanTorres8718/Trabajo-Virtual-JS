'use strict';

function ticketIva(price){
    let iva = price*0.21;
    let totalAndIva = price+iva;
    return(`El precio sin iva: ${price}, con un iva de: ${iva}, y un total con iva de: ${totalAndIva}.`);
}

console.log(ticketIva(100));
console.log(ticketIva(10));
