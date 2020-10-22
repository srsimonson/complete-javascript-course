// Remember, we're gonna use strict mode in all scripts now!
// Install LiveServer npm -i live-server -g
// Run by typing live-server in the terminal


// Find temperature amplitude. Average of highest and lowest.
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
// let tempArray = [];

// const tempAmplitude = (temps) => {
//     for (let i=0; i<temperatures.length; i++) {
//         if (typeof temperatures[i] === 'number') {
//             tempArray.push(temperatures[i])
//         }
//     }
//     return ( Math.max(...temps) + Math.min(...temps) ) / 2 
// }
// console.log(`The amplitude of the temps on that day was ${tempAmplitude(tempArray)}.`);

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         value: prompt('Degrees Celcius:')
//     }
//     console.log('measurement.value', measurement.value);
//     console.warn('measurement.value', measurement.value);
//     console.error('measurement.value', measurement.value);
//     console.log('log: measurement: ', measurement);
//     console.log('MEASUREMENT OBJECT');
//     console.table(measurement);
    
    
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }; 

// console.log('measureKelvin', measureKelvin());

const printForecast = (arr) => {
    for (let i=0; i<arr.length; i++) {
         console.log(`The temperature will be ${arr[i]} in ${ parseInt([i]) + 1} days.`);
    }
}

console.log(printForecast([17, 21, 23]))
console.log(printForecast([12, 5, -5, 0, 4]))
 