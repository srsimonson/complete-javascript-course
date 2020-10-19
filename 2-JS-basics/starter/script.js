console.log('Hello World!');
/************************************************************************************
Variables and Data Types

var firstName = 'John';
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log('full age', fullAge);

var job; // declare variable without assigning value

job = 'teacher';
console.log('job', job);
 */

/************************************************************************************
Variable Mutation and Type Coersion

var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age); // Type coersion turned age into a string

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

age = 'twenty-eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?');
console.log(firstName + lastName);
*/

/************************************************************************************
Basic Operators

let year, yearJohn, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;
console.log('yearJohn', ageJohn);
console.log('yearMark', ageMark);

console.log(year + 1);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log('', johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
*/

/************************************************************************************
Operator Precedence

var now = 2018;
var yearJohn = 1989;

var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log('', isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = ( ageJohn + ageMark ) / 2;
console.log('average', average);

// Multiple Assignments
var x, y;
x = y = (3+5) * 4-6;
console.log('x and y', x, y);

// More Operators
x += 2;
console.log('x', x);
x ++;
console.log('x', x);
x --;
console.log('x', x);
*/

/************************************************************************************
Code Challenge #1

let markMass = 200;
let markHeight = 6;
let johnMass = 180;
let johnHeight = 5;

const markBMI = markMass / ( markHeight * markHeight) ;
const johnBMI = johnMass / ( johnHeight * johnHeight );
console.log('markBMI', markBMI);
console.log('johnBMI', johnBMI);

console.log('Is Mark\'s BMI higher than John\'s?', markBMI > johnBMI);
*/

/************************************************************************************
If / Else Statements

var firstName = 'John';
var civilStatus = 'single';

if ( civilStatus === 'married' ) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}

var isMarried = true;

if (isMarried) {
    console.log('is married');
} else {
    console.log('is not married');   
}

let markMass = 200;
let markHeight = 6;
let johnMass = 180;
let johnHeight = 5;

const markBMI = markMass / ( markHeight * markHeight) ;
const johnBMI = johnMass / ( johnHeight * johnHeight );
console.log('markBMI', markBMI);
console.log('johnBMI', johnBMI);


if (markBMI > johnBMI) {
    console.log('Mark is fatter.');
} else {
    console.log('John is fatter.');
}
*/

/************************************************************************************
Boolean Logic

var firstName = 'John';
var age = 16;

if ( age < 13 ) {
    console.log(firstName + ' is a boy.');
} else if ( age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/************************************************************************************
Ternary Operator and Switch Statements

//Ternary Operator or Conditional
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log('drink', drink);

// Switch Statements
var job = 'cop';
switch ( job ) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives Uber.');
        break; 
    case 'designer':
        console.log(firstName + ' makes websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    default:
        console.log(firstName + ' is a man.')
}

*/

/************************************************************************************
Truthy and Falsy Values and Equality Operators

// FALSY values (will be called false in evaluated in an if/else): undefined, null, 0, '', NaN

var height = 0;

if ( height || height === 0 ) {
    console.log('variable has been defined.');
} else {
    console.log('variable has not been defined.');
}

// Equality Operator (Type coersion)

if (height == '0') {
    console.log('The == operator does type coersion.');
} else {
    console.log('cheese');
}


*/

/************************************************************************************
Code Challenge #2

let johnScore = (89+120+103) / 3;
let mikeScore = (116+94+123) / 3;
let maryScore = (97+134+105) / 3;

johnScore = 4;
mikeScore = 5;
maryScore = 5;

console.log('john:' + johnScore, 'mike:' + mikeScore, 'mary:' + maryScore);

switch ( true ) {
    case johnScore > mikeScore && johnScore > maryScore :
        console.log('john wins');
        break;
    case mikeScore > johnScore && mikeScore > maryScore :
        console.log('mike wins');
        break;
    case maryScore > johnScore && maryScore > mikeScore :
        console.log('mary wins');
        break;
    default :
        console.log('tie');
}

*/

/************************************************************************************
Functions

function calculateAge( birthYear ) {
    return 2018 - birthYear;
}

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1948);
let ageJane = calculateAge(1960);
console.log(ageJohn, ageMike, ageJane);

// Calculate years until retirement.
function yearsUntilRetirement ( year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    if (retirement > 0 ) {
    console.log(firstName + " retires in " + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement( 1983, 'Steve');
yearsUntilRetirement( 1990, 'John');
yearsUntilRetirement( 1948, 'Mike');
/*

/************************************************************************************
Function Statements and Expressions


// Function Declaration
// function whatDoYouDo ( job, firstName ) {

// }

// Function Expression - if it returns something, it's an expression. It's returning an expression.
let whatDoYouDo = function ( job, firstName ) {
    switch ( job ) { // What are we switching? We want to "switch" the "job."
        case 'teacher' :
            return firstName + ' teaches kids how to code.'
        case 'driver' :
            return firstName + ' drives Uber.'
        case 'designer' :
            return firstName + ' makes websites.'
        default :
            return firstName + ' is unemployed.'
    }
}

console.log( whatDoYouDo( 'applies for jobs', 'Steve') );

/*

/************************************************************************************
Arrays

let names = [ 'John', 'Mark', 'Jane' ];
var years = new Array( 1990, 1969, 1948 ); // Not used really anymore.

console.log(names, names[0], names.length);

names[1] = 'Ben'; // mutate array
console.log(names);

names[5] = 'Mary';
names[names.length] = 'Steve' // Adds to the last element of the array.
console.log(names);

// Different data types

let john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue'); // add to last element of the array.
john.unshift('Mr.') // add to beginning of array.
console.log(john);

john.pop() // Removed from end.
john.shift(); // Remove from beginning.
console.log(john);

john.indexOf(1990);
console.log(john.indexOf(1990));
console.log('not in array?', john.indexOf('asdf'));

// Return index of -1 if false. Below is a way to check if a value is in an array or not.
let isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer.'
console.log('isDesigner', isDesigner);

/*

/************************************************************************************
Code Challenge #3

let bills = [ 124, 48, 268 ];
let tips = [];
let finalPaidAmounts = [];

function tipCalculator( bill ) {
    if ( bill < 50) {
        tip = 0.2;
    } else if ( bill >= 50 && bill <= 200 ) {
        tip = 0.15;
    } else {
        tip = 0.10;
    }
    tips.push(tip * bill);
    finalPaidAmounts.push(tip * bill + bill);
}

tipCalculator ( bills[0] );
tipCalculator ( bills[1] );
tipCalculator ( bills[2] );
console.log('tips: ', tips, 'final paid amounts: ',finalPaidAmounts);
/*

/************************************************************************************
Objects and Properties

// Object Literal
let john = { // firstName is a property of the john object
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log('john', john.lastName); // dot notation

let x = 'birthYear';
console.log('john', john['job']);
console.log('john', john[x]); // bracket notation. use key name instead, or a variable like here.

// Mutate the object like such.
john.job = 'designer';
john['isMarried'] = true;
console.log('john', john);

// Not used as much, but this works as well.
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith'
console.log('jane', jane);


/************************************************************************************
Objects and Methods

let john = { // firstName is a property of the john object
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age =  2018 - this.birthYear; // this basically points to itself.
    }
};

john.calcAge();
console.log('john', john);
*/

/************************************************************************************
Code Challenge #4

let john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 190,
    height: 6,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    }
}

let mark = {
    firstName: 'Mark',
    lastName: 'Johnson',
    mass: 181,
    height: 5,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    }
}

// You don't have to call the function first. Since they return this.BMI, you can call the function inside this IF/ELSE statement. 
if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.firstName + ' is fatter.');
} else if (mark.BMI > john.BMI ){
    console.log(mark.firstName + ' is fatter.');
} else {
    console.log('they\'re the same fattness.');   
}

*/

/************************************************************************************
Loops

// For Loop
for ( i = 0; i < 10; i++ ) {
    console.log('i =', i);
}

let john = ['John', 'Smith', 1990, 'designer', false];

for (i=0; i<john.length; i++) {
    console.log('john[i]: ', john[i]);
}

// While Loop
let j = 0;
while ( j < john.length) {
    console.log(john[j]);
    j++
}

// Continue and Break Statements
//let john = ['John', 'Smith', 1990, 'designer', false];

for (i=0; i<john.length; i++) {
    if( typeof john[i] !== 'string' ) {
        continue; // 1990 is not a string, so don't continue on to the next task, but the loop continues.
    }
    console.log('john[i]: ', john[i]);
}

// Break breaks out of the loop entirely when the condition is met.
for (i=0; i<john.length; i++) {
    if( typeof john[i] !== 'string' ) {
        break;
    }
    console.log('john[i]: ', john[i]);
}

// Loop through john array backwards:
for (i = john.length-1; i >= 0; i-- ) {
    console.log(john[i]);
}

*/

/************************************************************************************
Code Challenge #5
*/

let customer1 = {
    firstName: 'John',
    lastName: 'Smith',
    billValues: [124, 48, 268, 180, 42],
    tipCalc: function () {
        this.allTips = [];
        this.finalPaidAmounts = [];

        for (let i=0; i<this.billValues.length; i++) {
            let tip;
            let bill = this.billValues[i];
            if ( bill < 50) {
                tip = 0.2
            } else if (bill >= 50 && bill < 200 ) {
                tip = 0.15
            } else {
                tip = 0.1
            }
            this.allTips.push (bill * tip); // either of these work to push.
            this.finalPaidAmounts[i] = bill + bill * tip; // I get it now.
        }
    }
}

let customer2 = {
    firstName: 'Mark',
    lastName: 'Johnson',
    billValues: [77, 375, 110, 45],
    tipCalc: function () {
        this.allTips = [];
        this.finalPaidAmounts = [];

        for (let i=0; i<this.billValues.length; i++) {
            let tip;
            let bill = this.billValues[i];
            if ( bill < 100) {
                tip = 0.20
            } else if ( bill >= 100 && bill < 300 ) {
                tip = 0.10
            } else {
                tip = 0.25
            }
            this.allTips.push( bill * tip ); // either of these work to push.
            this.finalPaidAmounts.push( bill + bill * tip ); // I get it now.
        }
    }
}

function tipAverage (cheese) {
    let sum = 0;
    for (let i=0; i<cheese.length; i++) {
        sum = sum + cheese[i];
    }
    return sum / cheese.length;
}

// Call the function inside the object.
customer1.tipCalc();
customer2.tipCalc();

// Create a new key value pair inside the customer objects. Call the tipAverage function, passing the allTips array through cheese. The method creates new keys and values. You don't have to do hardcore digging into arrays inside objects inside arrays, etc. You apparently can just access it.
customer1.average = tipAverage(customer1.allTips)
customer2.average = tipAverage(customer2.allTips)

console.log('Customer 1:', customer1);
console.log('Customer 2:', customer2);
// Dumb loop
if (customer1.average > customer2.average) {
    console.log(customer1.firstName + ' tips better.');
} else {
    console.log(customer2.firstName + ' tips better.');
}