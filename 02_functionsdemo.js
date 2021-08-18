function max(num1, num2){
    return num1 > num2 ? num1 : num2;
}

let min = function (num1, num2){
    return num1 < num2 ? num1 : num2;
}

let sum = (num1, num2) => num1 + num2;
let total = sum(10,20,30);

console.log('total',total);
console.log(max(10,20));
console.log(min(10,20));
console.log(sum(10,30));


function sumMaxMin(num1, num2, callback1, callback2){
//    ......
    let max = callback1(num1, num2);
    let min = callback2(num1, num2);
    return max + min;
}

console.log(sumMaxMin(10,20, max, min));