let fruits = ['apple', 'mango', 'cherry', 'grapes', 'pineapple', 'papaya'];
let numArr = [1,2,3,4,5,6];

// Filter
let evenArr = numArr.filter(num => num % 2 == 0);
let pFruits = fruits.filter(fr => fr.startsWith('p'));
console.log(pFruits);
console.log(evenArr);

//Map
let sqrArr = numArr.map(num => num * num);
console.log(sqrArr);

let evenSqrArr = numArr.filter(num => num % 2 == 0).map(num => num * num);
console.log(evenSqrArr);

//reduce

let sum = numArr.reduce((acc, num) => acc + num, 50)
console.log(sum);

let frStr = fruits.reduce((str, fr) => str.concat(', ', fr));
console.log(frStr);
// (acc, num)=> {return acc + num}