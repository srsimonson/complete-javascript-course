'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
  containerMovements.innerHTML = ''; // setter
  
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  }) 
}

displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);


const user = 'Steven Thomas Williams'; // stw

const createUsernames = function (accts) {
  accts.forEach(function(acct) {
    acct.username = acct.owner
    .toLowerCase()
    .split(' ')
    .map(name=> name[0])
    .join('')
  })
}
createUsernames(accounts)
console.log(accounts);







/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e']

// // SLICE - does not change original array. Creates a new array.
// console.log(arr.slice(2)); // ['c', 'd', 'e']
// console.log(arr.slice(2, 4)); // ['c', 'd'] - length will be end param minus beginning (4-2)
// console.log(arr.slice(-2)); // ['d', 'e']
// console.log(arr.slice(-1)); // ['e'] - always the last element of an array
// console.log(arr.slice(1, -2)); // ['b', 'c']
// console.log(arr.slice()); // creates a shallow copy
// console.log([...arr]); // also creates a shallow copy

// //SPLICE - DOES mutate original array.
// console.log(arr.splice(-1));
// console.log(arr.splice(1, 2)); // start at postion 1, delete 2 elements
// console.log(arr);

// //REVERSE - DOES mutate original array
// arr = ['a', 'b', 'c', 'd', 'e']
// let arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse());

// //CONCAT
// const letters = arr.concat(arr2);
// const spreadLetters = ([...arr, ...arr2])
// console.log(letters);
// console.log(spreadLetters);

// // JOIN
// console.log(letters.join(' + '));


// ////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}.`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}.`);
//   }
// }
// console.log('=====FOR EACH======');

// // forEach - executes a callback function for each element of the array
// movements.forEach( function (movement, index, arr) { 
//   movement > 0 ? console.log(`Index ${index}: You deposited ${movement}... 
//   ARR: ${arr}`) : 
//   console.log(`You withdrew ${Math.abs(movement)}.`
//   )
// }
// )

// // forEach with maps and sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies);
// currencies.forEach((value, key, map) => console.log(value, ": ", key))

// // Works the same with sets, but since there is no key-value pair or index, you don't need them.

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  // 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
  let shallowCopy = [...dogsJulia]
  const removedCats = shallowCopy.splice(1, 2);
  console.log('removedCats', removedCats);
  

  // 2. Create an array with both Julia's (corrected) and Kate's data
  const bothTheirDogs = [...removedCats, ...dogsKate];
  console.log('bothTHeirDogs', bothTheirDogs);

  // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  for (const [i, dog] of bothTheirDogs.entries()) {
    dog < 3 ? console.log(`Dog number ${i+1} still a puppy.`) : console.log(`Dog number ${i+1} is an adult, and is ${dog} years old.`); 
  }
  bothTheirDogs.forEach( (dog, i) => dog < 3 ? console.log(`Dog number ${i+1} still a puppy.`) : console.log(`Dog number ${i+1} is an adult, and is ${dog} years old.`));
}
// checkDogs(julia1, kate1);
// checkDogs(julia2, kate2);

// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉
// TEST DATA 1: 

// GOOD LUCK 😀

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const movementsUSD = movements.map( mov => mov * euroToUsd );

console.log(movements);
console.log('map: ', movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd)
}

console.log(movementsUSDfor);

const movementsDescriptions = movements.map( (mov, i) => {
  return mov > 0 ? `Movement ${i+1}: You deposited ${mov}.` : `Movement ${i+1}: You withdrew ${mov}.`
})

console.log('movementsDescriptions: ', movementsDescriptions);
