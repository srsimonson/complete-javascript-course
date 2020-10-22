// Remember, we're gonna use strict mode in all scripts now!
// Install LiveServer npm -i live-server -g
// Run by typing live-server in the terminal


// Find temperature amplitude. Average of highest and lowest.
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
let tempArray = [];

const tempAmplitude = (temps) => {
    for (let i=0; i<temperatures.length; i++) {
        if (typeof temperatures[i] == 'number') {
        tempArray.push(temperatures[i])
        }
    }
    return ( Math.max(...temps) + Math.min(...temps) ) / 2 
}
console.log(`The amplitude of the temps on that day was ${tempAmplitude(tempArray)}.`);
