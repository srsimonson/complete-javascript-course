'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
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
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(
      `order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}.`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
    
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



console.log(`/* * * * * * * * * * 
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
} = openingHours

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

