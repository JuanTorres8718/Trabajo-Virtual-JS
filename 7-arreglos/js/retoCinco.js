'use strict';
let acc = 0;

const score = [
    4.5,
    3.2,
    4,
    5,
    2.5,
    4
]

const score2 = [
    4.5,
    3.2,
]

const score3 = [
    3.2,
    4,
    5,
    2.5
]

for (let i = 0; i < score.length; i++) {
    acc += score[i];
}
// console.log(`La media es ${acc /= 5}`)
console.log(`La media es ${acc /= 6}`)

acc = 0;
const average = (numbers) =>{
    for (let i = 0; i < numbers.length; i++) {
        acc += numbers[i];
    }
    console.log(`La media es ${acc /= numbers.length}`)
    acc=0;
}

console.log(average(score));
console.log(average(score2));
console.log(average(score3));
