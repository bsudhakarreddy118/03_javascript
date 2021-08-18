function add(n1, n2=1){
    return n1 + n2;
} 

console.log(add(10,5));
console.log(add(10));

// Rest operator
function addAll(...numbers){
    let sum = 0;
    for (let num of numbers){
        sum += num;
    }
    return sum;   
}

console.log(addAll(1));
console.log(addAll(1,2,3));
console.log(addAll(1,4));
console.log(addAll(1,5,6,7));

//Spread operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [...arr1,...arr2]
console.log(arr3);

console.log(addAll(...arr3));


//Object Literals

let name = 'samsung';
let prodProperty = 'category';

let product = {
    name,
    price: 10000,
    [prodProperty]: 'electronics'
}

console.log(product);


//Destructuring
let customer = {
    name: 'mike',
    mobile: '989888982',
    city: 'blore'
}

let {mobile,city} = customer;

console.log(mobile, city);















