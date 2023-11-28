/*
//Rounding
const num = 2.557262;
const roundedNUm = Math.round(num * 1000) / 1000;

console.log(roundedNUm);

//Rounding Up or Down
const num2 = 2.557262;
const roundedNum2 = Math.floor(num2);

console.log(roundedNum2);

const num3 = 2.2;
const roundedNum3 = Math.ceil(num);
console.log(roundedNum3);
*/
//Maximum or Mininum Value
/*
const x = 10;
const y = 20;

const max = Math.max(x, y);
console.log(max);

const x2 = 30;
const y2 = 15;

const min = Math.min(x2, y2);
console.log(min);
*/
const arr = [1, 3, 4, 5, 2, 1, 2];

const min = Math.max(...arr);
console.log(min);

//Absolute Value
const abs = Math.abs(-9);
console.log(abs);

//Natural Log (base E)
const log = Math.log(9)
console.log(log);

//Log^2
const log2 = Math.log2(9)
console.log(log2);

//Infinity
const x = -Infinity; //Usuallly needed to know for algorithims