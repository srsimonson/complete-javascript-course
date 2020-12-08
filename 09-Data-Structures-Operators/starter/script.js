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