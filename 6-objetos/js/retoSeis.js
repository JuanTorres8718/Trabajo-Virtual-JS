'use strict';

const accountant = {
    maxValue: 15000,
    minValue: 3000,
    currentValue: 4500,
    initialValue: 4000,
    increaseValue: (value)=>{
        let totalValue = accountant.currentValue+value;
        if(totalValue<=15000){
            accountant.currentValue +=value;
            console.log(`El valor actual es de ${accountant.currentValue}`);
        }else{
            console.log(`Lo siento usted solo puede tener un valor maximo de  ${accountant.maxValue}`);
        }
    },
    decreseValue: (value)=>{
        let totalValue = accountant.currentValue-value;
        if(totalValue>=3000){
            accountant.currentValue -=value;
            console.log(`El valor actual es de ${accountant.currentValue}`);
        }else{
            console.log(`Lo siento usted solo puede tener un valor minimo de  ${accountant.minValue}`);
        }
    },
    restoreValue: ()=>{
        accountant.currentValue = accountant.initialValue;
        console.log(`El valor se restablecio en  ${accountant.currentValue}`);
    }
}