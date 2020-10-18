/************* 
Variables and data types
*/
/*
var firstName ='John';
console.log(firstName);

var last = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark'
var _23 = 23;

/***************
 * Variable mutation and type coercion
 */



 /*
 var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old' + job + '. Is he married?' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);



//Basic operators
var year, yearJohn, yearMark
now = 2018;
ageJohn = 28;
ageMark = 33;


// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logic Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//typeof operator
console.log(typeof johnOlder); 
console.log(typeof 'Mark is older than John');
var x;
console.log (typeof x);











//Operator Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn  = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x, y;
x = y = (3+5) * 4 - 6; //8*4-6 //32-6 //26
console.log(x, y);


// More Operators
x *=2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);


/*
//Coding Challenge 1
// Mark and John are trying to compare their BMI (Body 
Mass Index), which is calculated using the formula: 
BMI=mass/height^2=mass/(height*height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate bothe their BMI's
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "is Mark's BMI higher than John's? true")

//1
var massMark, heightMark, massJohn, heightJohn;
massMark=78;
heightMark=1.69;
massJohn=92;
heightJohn=1.95;

//2
bmiMark = massMark / (heightMark*heightMark);
bmiJohn = massJohn / (heightJohn*heightJohn);

//3
var johnFatter = (bmiMark > bmiJohn);
console.log(johnFatter);

//4
var markFatter = (bmiMark > bmiJohn);
console.log('Is Mark\'s BMI higher than John\'s?' + markFatter);
var markFatter = (bmiMark > bmiJohn);
console.log(markFatter);



// If / Else Statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark, heightMark, massJohn, heightJohn;
massMark=78;
heightMark=1.69;
massJohn=92;
heightJohn=1.95;
bmiMark = massMark / (heightMark*heightMark);
bmiJohn = massJohn / (heightJohn*heightJohn);
var johnFatter = (bmiMark > bmiJohn);
console.log(johnFatter);
var markFatter = (bmiMark > bmiJohn);
console.log('Is Mark\'s BMI higher than John\'s?' + markFatter);
var markFatter = (bmiMark > bmiJohn);
console.log(markFatter);


if(bmiMark > bmiJohn){
    console.log('mark bmi is higher than johns');
} else {console.log('john bmi is higher than marks')}




var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
     console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else 
    console.log(firstName + ' is a man.');

*/





// The Ternary Operator and Switch Statements
/*
var firstName = 'John';
var age = 14;

//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
}   else {
        var drink = 'juice';
}

//Switch Statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
            console.log(firstName + ' does something else.');
}

age = 98;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

//Truthy and Falsy Values and Equality Operators

//falsy values: undefined, null, 0, '', NaN
// truthy values: not falsy values

var height;
height = 0;

if (height || height === 0){
    console.log('variable is defined');
} else {
    console.log('variable has not been defined.');
}

*/

/*Coding Challenge 2

John and Mike both play basketball on different teams. In the last 3 games, John's team scored 89, 120, 103 points. Mike's team scored 116, 94, 123.

1. What's the average score for each team?

2. Which team has the highest average score, and print the winner to the console. Also inclued the average score in the input.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score.)

4. Mary 97, 134, 105. Log average winner to console. Hint: use && operator to make the decision.

5. Change the scores to generate different winners, keep in mind ties.


//1
var avgScrJohn, avgScrMike, avgScrMary;
avgScrJohn = (( 89 + 120 + 103 ) / 3);
avgScrMike = (( 116 + 94 + 123) / 3);
avgScrMary =(( 97 + 134 + 105 ) / 3);

console.log('John scores ' + (avgScrJohn) + (', Mike scores ') + (avgScrMike) + (', and Mary scores ' + (avgScrMary)))

if (avgScrJohn > avgScrMike && avgScrJohn > avgScrMary){
    console.log('john is the winner')
 } else if (avgScrMike > avgScrJohn && avgScrMike > avgScrMary){
     console.log('mike wins')
 } else if (avgScrMary > avgScrJohn && avgScrMary > avgScrMike){
     console.log('mary wins')
 } else{
     console.log("tie")
 }
 
























 //FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS a functions are like containers and we can pass arguments into them and they return us a result.


 function calculateAge (birthYear) {
     return 2018 - birthYear;
 }

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log (ageJohn, ageMike, ageJane)

// Years until Retirement
function yearsUntilRetirement (year, firstName) {   
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/


// Function Statements and Function Expressions (different way of writing functions)

// Function Declaration
/*
function whatDoYouDo(job, firstName) {

}
*/
// Function Expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo( 'teacher', 'John'));
console.log(whatDoYouDo( 'designer', 'Jane'));
console.log(whatDoYouDo( 'retired', 'Mark'));




*///ARRAYS
/*

//Initialize New Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

//Mutate Array Data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different Data Types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); 
john.unshift('Mr.');
console.log(john);

john.pop()
john.pop()
john.shift()
console.log(john)

console.log(john.indexOf(1990));
//Ternary operator
var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John IS a designer';
console.log(isDesigner);


*/ //Coding Challenge 3

/*
3x restaurant bills are $124, $48, $268.

Create a tip calculator (as a function):
- 20% if bill < $50
- 15% if bill > $50 < $200
- 10% if bill > $200

Create 2 arrays:
- Containing all 3 tips (one for each bill)
- Containing all 3 final paid amounts (bill + tip)



function tipCalculator(bill) {
    var percentage;
    if (bill < 50){
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
            percentage = 0.15;
        } else if (bill > 200){
                percentage = 0.1;
            }
            return percentage * bill;
        }

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
tipCalculator(bills[1]),
tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
bills[1] + tips[1],
bills[2] + tips[2],]

console.log(tips, finalValues);








//Objects and Properties

//Objects are the single most important feature of Javascript. Fuck. Access an element of the array not by its index, but by it's name. Naming each value. We define key value pairs. each value has a name, which is called the key. We can use objects to group together different variables that have no particular order. The properties of John for example. Arrays order matters a lot, Objects not matter at all.

//Object literal (way of defining object - with curly braces)
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john)

//new Object Syntax way of defining an object
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/

/*
//Object Methods - when you attach FUNCTIONS to objects.

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
}

john.calcAge();
console.log(john);

//Coding Challenge 4
/*
var massMark, heightMark, massJohn, heightJohn;
massMark=78;
heightMark=1.69;
massJohn=92;
heightJohn=1.95;

//2
bmiMark = massMark / (heightMark*heightMark);
bmiJohn = massJohn / (heightJohn*heightJohn);

//3
var johnFatter = (bmiMark > bmiJohn);
console.log(johnFatter);

//4
var markFatter = (bmiMark > bmiJohn);
console.log('Is Mark\'s BMI higher than John\'s?' + markFatter);
var markFatter = (bmiMark > bmiJohn);
console.log(markFatter);


var mark = {
    fullName: 'Mark Wahlberg',
    mass: 78,
    height: 1.69,
    calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

var john = {
    fullName: 'John Leguizamo',
    mass: 12,
    height: 1.95,
    calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi ) {
    console.log(john.fullName + ' is fatter because his BMI is ' + john.bmi); 
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' is fatter because his BMI is ' + mark.bmi); 
} else {
    console.log('I give up')
}
*/
//LOOPS and ITERATION - Automate repetitive tasks. There are several types of loops.

// FOR LOOP
/*
for (var i = 1; i < 20; i+= 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//WHILE LOOP
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;

}

// CONTINUE and BREAK statements

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
console.log('-------');

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

console.log('-------');
//Looping Backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
_________

    calcTip: function tipCalculator(bill){
        if (bill < 50) {
            percentage = 0.2;
        } else if (bill >= 50 && bill < 200) {
            percentage = 0.15;
        } else {
            percentage = 0.1,
        }
    }
}
                        or
calcBMI : function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;



        for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
_______________________________


*/
//Coding Challenge 5

var john = {
    fullName: 'John Leguizamo',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Wahlberg',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .10;
            } else {
                percentage = .25
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}



john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);