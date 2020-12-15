'use strict';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];


const hoursOfOperation = {
  [days[3]]: { // Compute property names of objects: [days[3]] for example.
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  hoursOfOperation,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(
      `order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`); 
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    
  } 

};

restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});



console.log(`

/* * * * * * * * * * 
OBJECT DESTRUCTURING 
* * * * * * * * * */`);

const { name, openingHours, categories } = restaurant;
console.log('name, openingHours, categories: ', name, openingHours, categories);

const { 
  name: restaurantName, 
  openingHours: hours, 
  categories: tags 
} = restaurant;

console.log('restaurantName, openingHours, tags: ', restaurantName, openingHours, tags);

// Default Values. If undefined, will define as [ ], if defined, will override the [ ] and be the data
const { menu = [], starterMenu: starters = [] } = restaurant
console.log('menu, starters: ', menu, starters);

// Mutating variables.
let aa = 111;
let bb = 999
const obj = { aa: 23, bb: 7, cc: 14 };

// You can not use let, because it's already been declared. You can't do { a, b } = obj, because only curly braces will be interpreted as the start of a function. you need to wrap the whole expression in ( ) and then you can mutate the variables.
({ aa, bb } = obj);
console.log('aa, bb: ', aa, bb);

// Nested object destructuring.

const { 
  fri: { open: op, close: cl} 
} = hoursOfOperation

// console.log('fri: ', fri);
console.log('open: ', op);
console.log('close: ', cl);

console.log(`




/* * * * * * * * * * 
ARRAY DESTRUCTURING 
* * * * * * * * * */`);

// Array destructuring: break down complex data to simple vars.

const arr = [2, 3, 4]

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log('a, b, c: ', a, b, c);
console.log('x, y, z: ', x, y, z);

let [mainCourse, , secondCourse] = restaurant.categories; // Skip one of the iterants.
console.log('mainCourse, secondCourse: ', mainCourse, secondCourse);

// let temp = mainCourse;
// mainCourse = secondCourse;
// secondCourse = temp;

// Below line works same as above.
[mainCourse, secondCourse] = [secondCourse, mainCourse]
console.log('mainCourse, secondCourse: ', mainCourse, secondCourse);

console.log( restaurant.order(2, 0));
const [asdf, fdsa] = restaurant.order(2, 0);
console.log('asdf, fdsa: ', asdf, fdsa); // Garlic Bread, Pizza

// Nested Destructuring
const nested = [2, 4, [5, 6] ];

// const [ /*2*/ , /*4*/ , j] = nested;
// console.log('j: ', j);
// const [k, l] = j;
// console.log('k, l', k, l); // double nested destructuring.

const [ /*2*/ , /*4*/ , [k, l] ] = nested; // simpler double nested destructuring

console.log('k, l', k, l);

// Default values

const [ p=1, q=1, r=1 ] = [8, 9]
console.log('p, q, r', p, q, r);
console.log(`



* * * * * * * * * 
Spread Operator
* * * * * * * * *`)
// Expand an array into all it's elements. Unpacking an array all at once.

const arr2 = [ 7, 8, 9 ];
const badNewArr = [ 1, 2, arr2[0], arr2[1], arr2[2]]
console.log('badNewArr', badNewArr);

const newArr = [1, 2, ...arr2];
const newerArr = [1, 2, arr2];
console.log('newArr, newerArr', newArr, newerArr);
console.log('arr2 || ...arr2: ', arr2, ...arr2);

console.log('... newArr', ...newArr);
console.log('... newerArr', newerArr[2]);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'] //take all of mainMenu, pull it apart, add gnocchi.
console.log('newMenu: ', newMenu);

// Copy array
const mainMenuCopy = [ ...restaurant.mainMenu ];

// Join 2 arrays or more
const fullMenu = [ ...restaurant.starterMenu, ...restaurant.mainMenu ];
console.log('fullMenu: ', fullMenu);

// Iterables: arrays, strings, maps, sets (NOT objects)
const str = 'Steve';
const letters = [...str, ' ', 'X']
console.log('letters: ', letters);
console.log(...str);

// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1? '),
//   prompt('Let\'s make pasta! Ingredient 2? '),
//   prompt('Let\'s make pasta! Ingredient 3? ')
// ]

  // console.log('ingredients: ', ingredients);
  
// Both the same
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients);

// Object spread operator
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Yeezy' };
console.log('newRestaurant: ', newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Little Cesars';
console.log(restaurantCopy.name);
console.log(restaurant.name);

console.log(`



* * * * * * * * * * * * * * * * *
 Rest Pattern and Rest Parameters
* * * * * * * * * * * * * * * * * `)

// The opposite of spread operator, but uses the same syntax??
// Spread, because on the right side of the = assignment operator
// Where we would write variables separated by commas. (Whereas spread operator is values separated by commas.)
const arrr = [ 1, 2, ...[3, 4] ]; 

// REST, because on the left side of the = | it takes "the rest" of the values and combines them
const [aaa, bbb, ...others] = [1, 2, 3, 4, 5]

console.log(aaa, bbb, others);

const [pizza,, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);


// Object REST
const { sat, ...weekdays } = restaurant.hoursOfOperation;
console.log(weekdays);

//Functions - REST parameters
const add = function(...numbers) {
  let sum = 0
  for (let i=0; i<numbers.length; i++) {
    sum = sum + numbers[i]
  }
  return sum;
};

console.log('sum: ', add(2, 3) )
console.log('sum: ', add(5, 3, 7, 2))
console.log('sum: ', add (8, 2, 5, 3, 2, 1, 4))

const xab = [23, 5, 7];
add(...xab);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

console.log(`



* * * * * * * * * * * * * * * * *
 Short Circuiting with && and ||
* * * * * * * * * * * * * * * * * `)

// Logical operators an use or return any data type, and can do short-circuiting or short-circuit evaluation.

// If first value is true, then the 2nd will not even render.
console.log('----||----');

console.log ( 3 || 'Steve' );
console.log ('nothing: ', '' || '' );
console.log ( true || 0 );
console.log ( undefined || null );
console.log('Hello? ', undefined || 0 || '' || null || 'Yes, Hello!' || 23);

restaurant.numGuests = 23
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guests1 = restaurant.numGuests || 10
console.log('guests1: ', guests1);

console.log(`
----&&----`);
// Short circuits when the first value is falsy, returns that value and doesn't evaluate further.
// If the first one is true, then continue evaluating the other operands.
console.log(0 && 'Steve'); // 0
console.log(1 && 'Steve'); // Steve

console.log('Hello' && 23 && 'Steve' && null && 'sup' && 66); // short circuits at null and returns null.

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('cheese', 'pepperoni');



console.log(`



* * * * * * * * * * * * * * * * *
 Nullish Coalescing Operator ??
* * * * * * * * * * * * * * * * * `)

// When falsy, return the default, which is the second.
restaurant.numGuests = 0;
const guest3 = restaurant.numGuests || 10;
console.log('guest3: ', guest3);

// Nullish values: null and undefined (does not include 0 or '' )
const guest4 = restaurant.numGuests ?? 10;
console.log('guest4', guest4); // returns 0

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #1

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// [x] 1. Create one player array for each team (variables 'players1' and 'players2')
const [ players1, players2 ]  = game.players
console.log(players1, players2);

// [x] 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers ] = players1;
console.log('gk: ', gk);
console.log('fieldPlayers: ', fieldPlayers);

// [x] 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log('allPlayers: ', allPlayers);

// [x] 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic' ]
console.log('players1Final: ', players1Final);

// [x] 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { 
  odds: { team1, x: draw, team2 },  
} = game;
console.log(team1, draw, team2);

// [x] 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// GOOD LUCK 😀
function printGoals(...players) {
  console.log(`Players who scored goals: ${players}... Total Goals: ${players.length}`); 
}
printGoals('Steve', ' Gonxhe', ' Liz');
printGoals(...game.scored)

// [x] 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

console.log(`



* * * * * * * * * * * * * *
 Looping Arrays with For-Of
* * * * * * * * * * * * * * * * * `)

const menuX = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log('menuX: ', menuX);

for (const item of menuX) {
  console.log('item: ', item);
}

// Get index of for/of
for (const [i, el] of menuX.entries()) { // [ i, el ] is the destructuring of the iterator variable
    console.log(`${i +1 }: ${el}`);
}

console.log(`



* * * * * * * * * *
 Optional Chaining
* * * * * * * * * *`)

// console.log(restaurant.hoursOfOperation.fri.open);

if (restaurant.hoursOfOperation && restaurant.hoursOfOperation.mon ) console.log (restaurant.openingHours.mon.open)
//Optional Chaining
if (restaurant.hoursOfOperation.mon?.open) console.log('hi');

// Can have multiple
if (restaurant.hoursOfOperation?.fri?.open) console.log(restaurant.hoursOfOperation.fri.open);

const dias = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

for (const dia of dias) {
  const open = restaurant.hoursOfOperation[dia]?.open ?? 'closed';
  console.log(`On ${dia}, we are open at ${open}.`); 
}

// on methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist' );
console.log(restaurant.complain?.(0, 1) ?? 'Method does not exist' );

// on arrays
const users = [ { name: 'Steve', faveNumber: 7} ]

console.log(users[1]?.name ?? 'User does not exist');

console.log(`



* * * * * * * * * *
 Looping Objects
* * * * * * * * * *`)

const properties = Object.keys(hoursOfOperation);
console.log(properties);
const values = Object.values(hoursOfOperation);
console.log(values);
const entries = Object.entries(hoursOfOperation);
console.log(entries);

let openString = `We are open on ${properties.length} days: `

for (const day of properties) {
  openString += `${day}, `
}

console.log(openString);

for (const [day, {open, close}] of entries) { // destructuring array and the object inside the array inside the loop.
  console.log(x);
  console.log(`On ${day} we open at ${open} and close at ${close}`);
  
}

console.log(`



* * * * * * * * * *
 Code Challenge 2
* * * * * * * * * *`)

// Let's continue with our football betting app!

// [x] 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal +1} scored by player ${player}.`);
}

// [x] 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let  newOdd = 0;

for (const odd of odds) {
  newOdd += odd;
  // console.log(odds.entries().length);
  console.log(newOdd / odds.length); 
}

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? `draw` : `victory`
  console.log(`Odd of ${game[team]} ${teamString}: ${odd}`); 
}

// [ ] BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }


console.log(`



* * * *
 SETS 
* * * *`)
// A collection of uniqueValues. No dupliates. Must be iterable. Order doesn't matter. If there are any duplicates, it removes them kinda. No indexes. Can't get data out of a set.

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
  console.log(orderSet);
const steve = new Set('Steve Simonson');
steve.clear();
  console.log(steve);
  console.log(orderSet.size);
  console.log( orderSet.has('Pizza'));
  console.log( orderSet.has('Bread'))
orderSet.add('Bread'); // Add to Set
  console.log(orderSet);
orderSet.delete('Bread');
  console.log(orderSet);

for (const order of orderSet) console.log(order);

// Main use case if Sets is to remove duplicates of arrays.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Turn it back into an object.
  console.log(staffUnique);
  console.log( new Set ('Steve Simonson').size);

  console.log(`



* * * *
  MAPS
* * * *`)
// A data structure we can use to map values to keys. Data stored in key value pairs. In maps, the keys can have any type. In objects, the keys are strings only. In maps, the keys can be anything.

const rest = new Map();
  // console.log(rest);
rest.set('name', 'Classico Italiano');
  // console.log(rest);
rest.set(1, 'Italy');
rest.set(2, 'Portugal');
  // console.log(rest);
rest.set('categories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic']).set('open', 11).set('closed', 23);
  // console.log(rest); 
rest.set(true, 'We Are Open').set(false, 'We Are Closed');
  // console.log(rest);
  // console.log(rest.get(true)) // 'We Are Open'

const time = 22;
  // console.log( rest.get(time > rest.get('open') && time < rest.get('close')))

  // console.log(rest.has('categories'));
rest.delete(2);
// console.log(rest)

const testArr = [1, 2]
rest.set(testArr, 'test')
// console.log(rest.get(testArr)) // the above and below are not the same object in the heap
rest.set(document.querySelector('h1'), 'Heading') // the actual h1 of the page?!?!
// console.log(rest.get('h1'));
console.log(rest);

// creating a new map without all the sets.
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
]);

console.log(question);
console.log(Object.entries(hoursOfOperation)); // Exact same structure as the new Map, so you can easily convert to the Map data structure.
const hoursMap = new Map (Object.entries(hoursOfOperation));
console.log(hoursMap);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// let answer = Number(prompt('Your answer'))
// console.log(answer);
// if (answer === question.get('correct')) {
//   console.log(question.get(true))
// } else {
//   console.log(false);
// }

// Convert map back to array
console.log( [...question]  );


console.log(`



* * * * * * * *
 Challenge #3
* * * * * * * *`)

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// console.log('OG Game Events: ', gameEvents);


// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const newArray = [ ...gameEvents];
let events = [];
for (const [i, [min, evnt]] of newArray.entries()) {
  events.push(evnt)
}
events = [...new Set(events)]
console.log(events);

const betterSoln = [...new Set(gameEvents.values())]
console.log("Better Soln: ", betterSoln);


// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log('new gameEvents: ', gameEvents);
const newerArray = [...gameEvents]

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const timez = [...gameEvents.keys()].pop()
// console.log('TIMEz', timez);

const avg = timez / gameEvents.size;
console.log(`An event happened, on average, every ${avg} minutes.`);

// let avg = 0;
// for (const [i, [min, evnt]] of newerArray.entries()) {
//   console.log(min);
  
//   avg = (min) / ( avg + min )
// }
// console.log(`An event happened, on average, every ${avg} minutes.`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [i, [min, evnt]] of newerArray.entries()) {
  const desc = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${desc} HALF] ${min}: ${evnt}`);
}


// GOOD LUCK 😀

console.log(`



* * * * *
 STRINGS
* * * * *`)

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(Number(plane[1])); // 3
console.log(plane[2]); // 2

console.log('B737'.length);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.lastIndexOf('r'));
console.log(airline.slice(4)); // Air Portugal. the 4 is the index that the slice starts.
// Impossible to mutate strings. Need to store this into a new variable.
console.log(airline.slice(4, 7)); // Beginning and ending values. Start at 4, stop before 7.

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // loops, the last 2 letters of Portugal // al
console.log(airline.slice(1, -1)); // removes the first and last letter //

// Check whether a seat in the plane is a middle seat (ABC , DEF)
const checkMiddleSeat = seat => {
  let seatLetter = seat.slice(-1);
  seatLetter === 'B' || seatLetter === 'E' ?
  console.log('MIDDLE') : 
  console.log('NOT MIDDLE');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in passenger name;
let passName = 'sTeVe';
console.log(passName);

passName = passName.toLowerCase()
passName = passName[0].toUpperCase() + passName.slice(1)
console.log(passName);

// Comparing emails
let email = 'hello@jonas.io';
let loginEmail = ' Hello@Jonas.Io \n';

loginEmail = loginEmail.toLocaleLowerCase().trim()
// loginEmail = loginEmail.trim();
console.log(loginEmail);

let compareEmails = (x, y) => x === y ? console.log('same') : console.log('different');

compareEmails(email, loginEmail);

// Replace parts of strings
const priceGB = '288,97£';
let priceUS = priceGB.replace(',', '.').replace('£', '$')
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23.'
console.log(announcement.replace(/door/g, 'gate'));
// Regular expression. Write string between slashes. Then the g flag = 'global' or all.

// Booleans
// includes, startWith, endsWith

const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.startsWith('Airb'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the new Airbus family');  
}

const checkBaggage = (items) => {
  const baggage = items.toLowerCase();
  baggage.includes('gun') || baggage.includes('knife') ? console.log('You can\'t board.') : console.log('You can board.');
  // Rule of thumb, always make inputs lowercase.
}

checkBaggage('I have a laptop, some food, and a pocket Knife.');
checkBaggage(' Socks and a camera');
checkBaggage(' Got some snacks and a gun for protection.');
console.log(`



* * * * * * * * *
 Split and Join
* * * * * * * * *`)

//Split and Join. Split splits a sentence into an array split on a specified character. Join joins an array into a string, separated by a specified character.

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Steve Simonson'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const newerPassenger = 'jessica ann smith davis';
const capitalizeName = name => {
  let nameCapd = name.split(' ');
  let newName = [];
  console.log(nameCapd);
  for (name of nameCapd) {
    nameCapd = name[0].toUpperCase() + name.slice(1);
   newName.push(nameCapd);
  }
  console.log(newName.join(' '));
  
}

capitalizeName('steve simonson')
capitalizeName(newerPassenger)

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, 'x')); // adds a bunch of x's until the whole length is 25 characters.
console.log('HI'.padStart(25, 'x')); // adds a bunch of x's until the whole length is 25 characters.
console.log(message.padEnd(25, 'x')); // adds a bunch of x's until the whole length is 25 characters.
console.log('HI'.padEnd(25, 'xoxoxoxoxoxoxox')); // adds a bunch of x's until the whole length is 25 characters.
console.log('HI'.padStart(10, 'x').padEnd(20, 'o')); // add x's til 10, add o's til 20;

const maskCardNum = (num) => {
  const str = num + ''; // turns to string
  const last = str.slice(str.length-4, str.length)
  let maskedNum = last.padStart(str.length, '*')
  console.log(maskedNum);
  
}

maskCardNum(1234567890);
maskCardNum(9573659458123456);

// Repeat
const message2 = 'Bad weather... all departures delayed... ';
console.log(message2.repeat(5)); // Number of times repeated.

const planesInLine = num => {
  console.log(`There are ${num} planes in line. ${`✈️ `.repeat(num)}`);
}

planesInLine(8);
planesInLine(100);


console.log(`



* * * * * * * * * *
 Code Challenge #4
* * * * * * * * * *`)

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').onclick = () => {
  let checkBox = '';
  let arrayOfInputs;
  arrayOfInputs = document.querySelector('textarea').value.split('\n')
  for (const x of arrayOfInputs) {
    checkBox = checkBox + '✅';
    let lowerCaseSplit = x.toLowerCase().trim().split('_')
    let firstWord = lowerCaseSplit[0];
    let secondWord = lowerCaseSplit[1];
    secondWord = ('secondWord', secondWord[0].toUpperCase() + secondWord.slice(1));
    console.log((firstWord+secondWord).padEnd(20, ' ') + `${checkBox}`);
  }
  checkBox = checkBox + '✅';
}