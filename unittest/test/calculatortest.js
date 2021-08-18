
var expect = require('chai').expect;

var calc = require('../calculator')

describe('Test Calculator', function(){

    let arr;

    before(function(){
        console.log("before executed");
    })
    
    beforeEach(function(){
        console.log("before each executed");
        arr = [1,2] 
    })


    it.only('array size should be correct', function(){
        
        expect(arr.length).to.equal(2);
        // console.log('test add executed');

    })

    it('add should return correct sum', function(){
        let result = calc.add(5,6);
        expect(result).to.be.equal(11);
    })

    it('multiply  should return correct product', function(){
        expect(calc.multiply(5,6)).to.be.equal(30);
    })

})