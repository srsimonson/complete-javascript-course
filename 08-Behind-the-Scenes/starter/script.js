'use strict';

function calcAge(birthYear) {
    const age = 2020 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}.`
        console.log('output(): ', output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; // var are function scoped, ignoring block scope.
            const str = `Oh, and you're a millenial, ${firstName}.`
            // console.log('str: ', str);
            // console.log('millenial: ', millenial);

            function add (a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT!'
            
        } // block scope
        console.log('millenial: ', millenial);
        //add (2, 3); // won't work in strict mode...

        console.log('output: ', output);
        
    } // function scope
    printAge();
    return age;
}

// global scope
const firstName = 'Steve';
calcAge(1983);