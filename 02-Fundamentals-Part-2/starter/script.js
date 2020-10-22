console.log('hi');

// Arrow functions!

const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}
// Arrow function is a function expression. Return of 2020-birthYear is implicit. Don't need to specify it.
const calcAge3 = birthYear => 2020 - birthYear;

console.log( calcAge3(1983) );

// How many years until retirement.

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     // return retirement; // can only omit return if a 1 line function.
//     return `${firstName} will retire in ${retirement} years.`
// }

// console.log( yearsUntilRetirement(1983, 'Steve') )


function cutFruitPieces(fruit) {
    return fruit * 4;
}

// Calling functions inside of functions.
function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3))

const calcAge = function(birthYear) {
    return 2020-birthYear
} // the BIRTH YEAR paramaters above and below are unrelated. A local variable to each function.

let yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // return retirement; // can only omit return if a 1 line function.
    return `${firstName} will retire in ${retirement} years.`
}

console.log(yearsUntilRetirement(1983, 'Steve'))
console.log('----------------------');

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dAvg1 = calcAverage(44, 23, 71);
let kAvg1 = calcAverage(65, 54, 49);
let dAvg2 = calcAverage(85, 54, 41);
let kAvg2 = calcAverage(23, 34, 27);

let checkWinner = (dolphins, koalas) => {
    if (dolphins >= koalas) {
        console.log(`Dolphins win with ${dolphins} points over the Koalas ${koalas} points.`);
    } else if (koalas >= dolphins) {
        console.log(`Koalas win with ${koalas} points over the Dolphins ${dolphins} points.`);
    } else {
        console.log('they tied');
    }
}

checkWinner(dAvg1, kAvg1);
checkWinner(dAvg2, kAvg2);
