'use strict';

const year = 2020;


if(year%4 === 0){
    console.log(year+4);
}else if(year%4 === 1){
    console.log(year+3);
}else if(year%4 === 2){
    console.log(year+2);
}else if(year%4 === 3){
    console.log(year+1);
}