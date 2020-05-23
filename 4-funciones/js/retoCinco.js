'use strict';

const multiplication = (num1,num2)=>(num1*num2);
console.log(multiplication(8,2));

const media = (param1,param2,param3,param4) => (param1+param2+param3+param4)/4;
console.log(media(4,8,8,4));

const ticketIva= price =>{
    let iva = price*0.21;
    let totalAndIva = price+iva;
    return(`El precio sin iva: ${price}, con un iva de: ${iva}, y un total con iva de: ${totalAndIva}.`);
}
console.log(ticketIva(100));
console.log(ticketIva(10));