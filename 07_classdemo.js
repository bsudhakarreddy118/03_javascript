class Product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    static getCountry(){
        return 'India';
    }

    getName(){
        return this.name;
    }

    calcNetPrice(vatPercentage){
        return this.price *(1 + vatPercentage/100.0);
    }
}


console.log(Product.getCountry());

const prod1 = new Product('asus', 10000);
prod1.test = 100;

console.log(prod1.calcNetPrice(12));
console.log(prod1.test);