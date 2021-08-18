let numArr = [1,2,3,4];

let fruits = ['apple', 'mango', 'cherry', 'grapes'];

console.log(typeof fruits);
console.log(Array.isArray(fruits));

console.log(fruits.length);
console.log(fruits[1]);


fruits.push('banana');
console.log(fruits);

fruits.shift();

fruits.unshift('pineapple');
console.log(fruits);


let slicedArr1 = fruits.slice(2);
console.log(slicedArr1);

let slicedArr2 = fruits.slice(2,4);
console.log(slicedArr2);


let removedElements = fruits.splice(2, 1, 'papaya');
console.log(fruits);
console.log(removedElements);

console.log("***for of");
for(let fruit of fruits){
    console.log(fruit);
}

console.log("***foreach");

fruits.forEach( function(fruit){
    console.log(fruit);
} );


fruits.forEach( fruit => console.log(fruit.length));

let foundFruit = fruits.find(fruit => fruit.startsWith('g'));
let foundFruitIndex = fruits.findIndex(fruit => fruit.startsWith('g'));
console.log(foundFruit, foundFruitIndex);

console.log(fruits.join(';'));
