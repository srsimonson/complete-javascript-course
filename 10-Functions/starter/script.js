'use strict';

console.log(`
* * * * * * * * * *
 Default Parameters
* * * * * * * * * *`);

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //All of the below is out of date way of specifying a default parameter. Now see above:
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    // numPassengers = 1;
    // price = 199;
    // price = 199 * numPassengers;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123')
createBooking('ABC987', 2, 800)
createBooking('FEV5434', 5)
createBooking('ERE5555', undefined, 666) // Specify undefined if you want to skip and use default parameter.

console.log(`



* * * * * * * * * *
Passing Arguments: Value vs. Reference
* * * * * * * * * *`);

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 98235087209385
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 98235087209385) {
        console.log('Check In')
    } else {
        console.log('Wrong passport.')
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Problem this creates is that two functions are manipulating the same object. Correct passport, then wrong passport both get console.logged.

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(jonas)
checkIn(flight, jonas)

// Passing by value vs passing by reference.
// Javascript doesn't have passing by reference. Only by value.

console.log(`



* * * * * * * * * * * * * * * * * * * *
First Class and Higher Order Functions
* * * * * * * * * * * * * * * * * * * * `);

// First Class Functions
    // Functions are first-class citizens. Meaning that functions are simply values. THey are another type of object.
    // You can store funcstions in variables or properties.
const add = (a, b) => a + b; // <=
const counter = {
    value: 23,
    inc: function() {this.value++; } // <=
}

const greet = () => console.log('Hello World');
// btnClose.addEventListener('click', greet) // pass functions as arguments to OTHER functions
// Can return functions from other functions.
// counter.inc.bind(someOtherObject); // bind = methods on functions.


// Higher Order Functions
    // A function that receives another function as an argument, or that returns a new function, or both.
    // Only possible because of first class functions.

const greet2 = () => console.log('Hello World');
// btnClose.addEventListener('click', greet2) // <= addEventListener is a higher order function because it receives another function as an input 'greet'. greet is a callback function because it happens after the add eventListener function.

function count() { // <= Higher order function
    let counter = 0;
    return function() { // <= returned function.
        counter ++
    }
}

console.log(`



* * * * * * * * * * * * * * * * * * * *
First Class and Higher Order Functions
* * * * * * * * * * * * * * * * * * * * `);

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);


const high5 = function () {
    console.log('hi5');   
}
// Callback functions
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5) // 3x high5 in log.

console.log(`



* * * * * * * * * * * * * * * 
Functions returning functions
* * * * * * * * * * * * * * * `);

const greet3 = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}
// Same as above
const greet4 = greeting => name => console.log(`${greeting} ${name}`);       

const greeterHey = greet3 ('Hey');
greeterHey('Jonas');
greeterHey('Stephanie')
greet3('Well hey')('Jordan!')
greet4('Hey')('Jonas!')

console.log(`



* * * * * * * * * * * *
Call and Apply Methods
* * * * * * * * * * * * `);

// Setting this manually.

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}, same as below
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(654, 'Steve');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

// Call method
const book = lufthansa.book; // this is a copy of the method inside lufthansa, so the 'this' is now undefined.
// book(23, 'Sarah') Doesn't work. No this.

// First argument of the call method is the 'this.' 
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, 23, 'Jon Smith')
console.log(lufthansa);

// Apply method. 
    // Same, but doesn't receive list if arguments, but when data is array of arguments.
const flightData = [545, 'George Cooper'];
book.apply(lufthansa, flightData); // not really used anymore. just use call and spread out the array with the spread operator.
console.log(lufthansa);

// Bind method
    // Does not call function, but returns new function where 'this' keyword is bound.
book.bind(eurowings)('23', 'John Williams');
const bookEW = book.bind(eurowings);
bookEW(23, 'John Johnson');

const bookEW23 = book.bind(eurowings, 23); // partial application.
bookEW23('Mary Stanford');
bookEW23('Martha Cooper');

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log('this: ', this);
    
    this.planes++; 
    console.log('this.planes: ', this.planes);
}

// Need the bind to tell 'this' to bind to lufthansa, otherwise it won't work.
// 'this' will be the button
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

// rewrite the above with function returning other function.
const vat = function (num) {
    return function (tax) {
        console.log('num: ', num);
        console.log('tax: ', tax);
        console.log('num * tax: ', num + num*tax);
    }
}

const vat2 = num => tax => console.log('num * tax: ', num * tax);

vat(200)(.1)
vat2(123)(.456)

console.log(`



* * * * * * * * * *
Code Challenge #1
* * * * * * * * * * `);

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
}

console.log('poll: ', poll);

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
// Here are your tasks:

// [x] 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
poll.registerNewAnswer = function () {
    const vote = prompt(`What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)`);
    console.log('vote: ', vote);

    if (vote == 0 || vote == 1 || vote == 2 || vote == 3 ) {
        poll.answers[vote] ++
        return poll.displayResults(poll.answers)
    } else {
        alert('Pick 0-3')
    }
    console.log('answers:', poll.answers);
}

//  [x] 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should  //    look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//  [x] 1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

// [x] 2. Call this method whenever the user clicks the "Answer poll" button.
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer);

// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
poll.displayResults = function(type) {
    if (type.constructor === Array) {
        console.log('Results: ', poll.answers)
    } else if (type.constructor === String) {
        alert (`Poll results are: ${type}.`)
    } else {
        console.log('IDK');
    }
}
// console.log('poll: ', poll);

// [x] 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
// GOOD LUCK 😀

console.log(`



* * * * * * * * * *
Immediately Invoked Function Expressions (IIFE)
* * * * * * * * * * `);
// Functions that immediately execute, run once, then disappear.

(function() {
    console.log('This will never run again.');
})(); // Wrap the function with no name in parenthesis, then call it with empty parenthesis.

(() => console.log('This will never run again either'))();

console.log(`



* * * * * *
 Closures
* * * * * * `);
// A function has access to all the variables of its parent function, even after the parent unction has returned. The function keeps a reference to its outer scope, which preserves the scope chain through time.
// A function has access to all the variables that existed at the function's creation.

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers.`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    header.addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();
document.querySelector('h1')