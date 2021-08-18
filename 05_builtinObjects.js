let sentence = 'hello1world2new,test';

let words = sentence.split(/[0-9,]/);
console.log(words);

let strNum = '101';
let strNum2 = '100.25';

console.log('Is it a number',Number.isNaN(strNum));

// ----------------------------------

let num1 = Number.parseInt(strNum);
let num2 = Number.parseFloat(strNum2);

console.log(Number.isInteger(num1));

let sum = num1 + num2;
let sumStr = strNum + strNum2;

console.log(sum);
console.log(sumStr);

//----------------------------

console.log(Math.pow(2,3));
console.log(Math.PI * Math.pow(5,2));