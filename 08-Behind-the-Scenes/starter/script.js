'use strict';

/* * * * * 
SCOPE
* * * * */

// function calcAge(birthYear) {
//     const age = 2020 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}.`
//         console.log('output(): ', output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true; // var are function scoped, ignoring block scope.
//             const str = `Oh, and you're a millenial, ${firstName}.`
//             // console.log('str: ', str);
//             // console.log('millenial: ', millenial);

//             function add (a, b) {
//                 return a + b;
//             }

//             output = 'NEW OUTPUT!'
            
//         } // block scope
//         console.log('millenial: ', millenial);
//         //add (2, 3); // won't work in strict mode...

//         console.log('output: ', output);
        
//     } // function scope
//     printAge();
//     return age;
// }

// // global scope
// const firstName = 'Steve';
// calcAge(1983);

/* * * * * 
HOISTING
* * * * */

// console.log('var', me);
// console.log('let', job); // Temporal Dead Zone:
// console.log('const', year); // Cannot access 'year' before initialization.

// var me = 'Steve';
// let job = 'developer';
// const year = 1983;

// FUNCTIONS
// console.log('declaration: ', addDecl(2, 3)); // works because declared as function
// console.log('expression: ', addExpr(2, 3)); // error can't b4 initialized b/c it's a variable
// console.log('arrow: ', addArrow(2, 3)); // error  "   "   "   "

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;

// const arrow2 = (a, b) => {
//     return a + b;
// }

// // EXAMPLE of bad practices. Because of hoisting, delete shopping cart fires because numProducts isn't created yet.
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('all products deleted!');    
// }

// var x = 1; // create properties on the window object
// let y = 2; // do not    "  "
// const z = 3; // do not    "  "

// console.log('y === window.y ?', y === window.y);
// console.log('x === window.x ?', x === window.x);

/* * * * * 
THIS Keyword
* * * * */

// console.log('this: ', this);

// const calcAge = function(birthYear) {
//     console.log(2020 - birthYear);
//     console.log('this: ', this); // undefined in strict mode
// };

// calcAge(1983);

// const steve = {
//     year: 1983,
//     calcAge: function() {
//         console.log('this: ', this);
//     }
// }

// steve.calcAge();

// const gonxhe = {
//     year: 1984
// }

// gonxhe.calcAge = steve.calcAge;
// gonxhe.calcAge(); // method borrowing from above. shows that the THIS keyword is not referencing the method in which it's created, but the method calling the calcAge function. Gonxhe in this case.

/* THIS KEYWORD with regular and arrow functions */

// const steve = {
//     firstName: 'Steve',
//     year: 1983,
//     calcAge: function() {
//         // console.log('this: ', this);
//         console.log(2020 - this.year);
//         const isMillenial = function() {
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial()     
//     },
//     greet: () => console.log(`Hey ${this.firstName}`), // undefined because arrow function doesn't create a this
// };

// steve.greet();
// console.log(this.firstName);

/* * * * * * * * * * *
Primitives vs Objects 
* * * * * * * * * * */

// Primitives - each variable stores in it's own memory in the stack
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log('lastName: ', lastName);
console.log('oldLastName: ', oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}

// Objects - stored in the heap, and then referenced. Points to the same memory address in the heap.
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('original name: ', jessica.lastName);
console.log('married name: ', marriedJessica.lastName);

// Copying Objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({}, jessica2); // create a new object by merging objects with Object.assign
jessicaCopy.lastName = 'Davis';
console.log('original name Jessica2: ', jessica2.lastName);
console.log('married name jessicaCopy: ', jessicaCopy.lastName);

let obj1 = {
    d: 'a',
    e: 'b',
    f: 'c',
    x: [1, 2, 3]
}

let obj2 = {
    d: 'd',
    e: 'e',
    f: 'f',
}

console.log('obj1: ', obj1);
console.log('obj2: ', obj2);

// Shallow clone. Only copies surface level.
let obj3 = Object.assign(obj1, obj2);
console.log('obj3: ', obj3);

obj3.x.push(5)
console.log('obj3: ', obj3);
