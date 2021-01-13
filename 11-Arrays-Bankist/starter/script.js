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


const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
}
calcDisplayBalance(account1.movements);

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
// console.log(accounts);







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
  console.log('bothTheirDogs', bothTheirDogs);

  // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  for (const [i, dog] of bothTheirDogs.entries()) {
    dog < 3 ? 
      console.log(`Dog number ${i+1} still a puppy.`) : 
      console.log(`Dog number ${i+1} is an adult, and is ${dog} years old.`); 
  }
  bothTheirDogs.forEach( (dog, i) => dog < 3 ? 
    console.log(`Dog number ${i+1} still a puppy.`) : 
    console.log(`Dog number ${i+1} is an adult, and is ${dog} years old.`));
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

// console.log(movements);
// console.log('map: ', movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd)
}

// console.log(movementsUSDfor);

const movementsDescriptions = movements.map( (mov, i) => {
  return mov > 0 ? `Movement ${i+1}: You deposited ${mov}.` : `Movement ${i+1}: You withdrew ${mov}.`
})

// console.log('movementsDescriptions: ', movementsDescriptions);

// Filter
const deposits = movements.filter(mov => mov > 0);

// console.log('movements: ', movements);
// console.log('deposits:', deposits);

const withdrawals = movements.filter(mov => mov < 0);
// console.log('withdrawals: ', withdrawals);


// Reduce
  // Reduce an array into a single value. The accumulator (sum), highest value, etc.
console.log(movements);

// Accumulator is like a snowball.
const balance = movements.reduce( function(acc, cur, i, arr) {
  console.log('iterator: ', i);
  console.log('accumulator: ', acc);
  console.log('current: ', cur);
  // console.log('array: ', arr);
  
  
  return acc + cur
}, 0) // <- 0 is the initial value of the accumulator.

console.log('balance: ', balance);

// Max value of array with reduce();
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov
  }
}, movements[0]) // <- always go with first value of array

console.log('max: ', max);

///////////////////////////////////////
// Coding Challenge #2

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (dogAges) => {
  let humanYears = dogAges.map((age) => {
    if (age <=2 ) {
      return age*2;
    } else {
      return 16 + age *4
    }
  })
  // 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
  humanYears = humanYears.filter( age => age > 18 );
  return humanYears;
}

console.log(calcAverageHumanAge(dogAges1));
console.log(calcAverageHumanAge(dogAges2));



// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

// 4. Run the function for both test datasets
// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];
// GOOD LUCK 😀















///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/