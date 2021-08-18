let obj = {};
let obj1 = new Object();

let product = {
    prodCode: 101,
    name: 'samsunggalaxy',
    seller: ['ABC tech', 'PQR tech'],
    manufacturer: {
            name: 'samsung',
            country: 'India'
        },
    getSellers: function (){
                    return this.seller;
                }

}

console.log(product.getSellers());

product.getSellers().push('XYZ tech');

console.log(product.name);
console.log(product['name']);

console.log(product.manufacturer.country);
console.log(product['manufacturer']['country']);

product.price = 10000;

console.log(product);


for( let prop in product.manufacturer){
    console.log(product.manufacturer[prop]);
}


//Convert to JSON

let prodJson = JSON.stringify(product);

console.log(prodJson);


//Convert JSON to javascript object
let parsedProduct = JSON.parse(prodJson);