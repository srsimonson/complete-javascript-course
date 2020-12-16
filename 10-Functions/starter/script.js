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
        alert('Check In')
    } else {
        alert ('Wrong passport.')
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

