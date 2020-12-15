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

