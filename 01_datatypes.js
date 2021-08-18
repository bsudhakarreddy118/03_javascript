//hoisting
var test;

var num1 = 10;

console.log(typeof num1);
num1 = 'ten';
console.log(typeof num1);
var name = 'hello';
var valid = true;
console.log(typeof valid);

if(valid){

    let num1 = 20;
    console.log('num1',num1);

}

console.log('num1',num1);

var num2;
console.log(typeof num2);

var arr = [];
var obj = {};

console.log(typeof arr);
console.log(typeof obj);

console.log(Array.isArray(arr));
const PI = 3.14;

// hoisting
console.log(test);
var test = 'hello';
