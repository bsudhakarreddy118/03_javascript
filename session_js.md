    
    Javascript
    -----------
     - Multiparadigm programming language
        - object based language
        - functional programming
      
      functions are first class citizens
    
      
     - interpreted language  
     - scripting language
     - Dynamically typed language
        - No need specify datatypes
    
    
    Where is it used/Why
        - animation
        - Form validation, client side validation
        - To make pages interactive/dynamic
        - Event handling
        - DOM Manipulation
        - Send Http requests to servers/api thru asynchronous call
        - Develop a Single page application
        
        
        AJAX 
        
        
      ECMAScript Specification
      
      ES5, ES6 (ES2015) 
    
    
    
    Client as well as server side
    
    
    Runtime
    -------
    Browser
    NodeJS
    
    MEA/RN Stack
    ------------
    MongoDB
    ExpressJS
    Angular/React
    NodeJS
    
    
   Ways to code/invoke JS
   ------------------------
   
   - Script (internal or external)
   - Developer tools 
   - NodeJS
   
   
   Datatypes
   ----------
   Number, string, symbol, boolean, undefined, null, array, object
   
   
   Variables
   ----------
   var, let and const 
   
   ES6(let and const)
   
   
   Loops
   ------
    while, dowhile, for
    for-of - looping thru arrays 
    for-in - looping thru properties of Object
    
    
    JS boolean check
    - 1 or 0
    - true and false
    - undefined and null are treated as false 
    
    
    for comparison
    --------------
    == and ===
    
    ==  - content should be same
    === - strict comparison - both type and content should be same
   
        var num1 = 10;
        var num2 = '10';
        
        num1 == num2   -- true
        num1 === num2  -- false
   
   
   Hoisting
   ---------
   all variable/function declarations are taken to the top of the file by JS engine
   
   
   
   Functions in javascript
   -----------------------
   
   Function with a name
   -----------------------
   function sum(n1, n2){
      return n1 + n2;
   } 
   
   let total = sum(10,20);
   
   
   function assigned to a variable
   --------------------------------
   let divide =  function(n1, n2){
                      return n1 / n2;
                   } 
                   
     
   let quotient = divide(10,2);
   
   
   Arrow function (ES6)  (parameters) => {body of function}
   ---------------
   
   let multiply = (n1, n2) => {return n1 * n2} ;   
   
   
   (n1, n2) => {return n1 * n2};
   
   (n1,n2) => n1 * n2;
   
   num => num * num;
   
   
   
   Callback function
   -----------------
   
   - function gets triggered based on an event
   - function passed as a parameter to another function which gets execution at later point of time
   
 
 
 Builtin Objects:
 ----------------  
   
   Array Object in JS
   ------------------
   functions is Array - push, pop, shift, unshift, splice, slice, includes, join........
   
   filter, map, reduce
   --------------------
   
   filter - get elements matching a condition
   
   map - tranforming the elements 
   
   reduce - aggregating the data in an array
   
   
   
   String:
    - concat, substr, indexof, includes, split ......
    
    
   Regex:
        used to search/validate patterns in text
        
        ABCPX1456X
        
   [A-Za-z] - one character which is a letter
   [0-9]
   
   [0-9]* - 0 or more times    
   
   
   
   Number
   --------
   isInteger, parseInt, parseFloat ......
   
       
        
        
   NAN
   isNAN()
   Math
   JSON
        stringify()
        parse(str)



json - javascript object notation 
---------------------------------        
 
 
why use json
    - String format to store data as key and value pairs
    - transfer data from server to client or vice versa 
    
    
    {
        "prodCode":101,
        "name":"samsunggalaxy",
        "seller":[
                   "ABC tech","PQR tech","XYZ tech"
                 ],
        "manufacturer":{
                             "name":"samsung",
                             "country":"India"
                        }
         ,"price":10000
    }
   
   -----------------------------------
   
   DOM Manipulation
   ----------------
   
   - responding to events on a page
   - adding/ changing element in a web page dynamically
   - Add/change styles of existing elements
   - add attributes to elements in a page
   
   
   DOM
    - Document Object model 
    
    
    
    querySelector('a') - Return the the first anchor tag in the document
    querySelector('.text') - Returns the first element which has a class named text
    querySelector('#one') - Returns the element which has id one
    
    querySelectorAll('a') - Returns a HTML collections which contains all the anchor tags 
    
    older methods
    -------------
    getElementByID()
    getElementsByTagName()
    getElementsByClass()
    
    
    ES6
    ----
    - let, const
    - template strings
    - for of loop
    - class
    - rest and spread operators
    - parameter default values
    - object literals
    - Destructuring of Objects/Arrays
    - promises (async programming)
    
    
    
    Testing in Javascript
    ----------------------
    mocha
        - Testing framework for Javascript
        - provides test runners
        - provide lifecycle hooks
            before(), after(), beforeEach(), afterEach()
        - provides functions for test suite creation and test creation
                - it() - defining test case
                - describe() - defining test suite
                
        assert(expect, actual)
        
        
   chai
   -----
   - assertion library
    
    TDD - assert functions
    BDD - expect/should 
    
    
    
    To setup a project for Testing using npm
    -----------------------------------------
    
    NPM - Node Package Manager
    ---------------------------
    
    npm install <packagename> // to install the package in the current folder
    
    node_modules
        - mocha
        - chai
        
        
    npm install -g <packagename>
    
    
    package.json
        - contains the dependencies that you have installed
           scripts, project name .......
    
    install dev dependencies
    ------------------------       
    npm i --save-dev chai
    
    
    
    Default module system used by Nodejs
    -------------------------------------
    
    Commonjs
    
    
    calc.js
        module.exports = {add, multiply....}
        
    calcTest.js
        var calc = require(../calc.js)
        calc.add()
        
        
        
  asynchronous programming
  -------------------------
  
  - achieved through callback function
  - program doesnt block until a long running task is completed
  
   
  
  javascript engine runs in a single thread
  
  
  Promises
  --------
  
  - are objects which represent a eventual response in future. response could be a success value or a failure
  - attach callback functions to either sucessful response or failure 
  
  promise has 3 states
  
    - pending
    - fulfilled
    - rejected
    
    
 Fetch API
    sending requests to rest api
        
        
        
        
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
   
        
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
