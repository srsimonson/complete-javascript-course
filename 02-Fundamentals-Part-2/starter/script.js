console.log('hi');

// Arrow functions!

const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}
// Arrow function is a function expression. Return of 2020-birthYear is implicit. Don't need to specify it.
const calcAge3 = birthYear => 2020 - birthYear;

console.log( calcAge3(1983) );

// How many years until retirement.

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    // return retirement; // can only omit return if a 1 line function.
    return `${firstName} will retire in ${retirement} years.`
}

console.log( yearsUntilRetirement(1983, 'Steve') )