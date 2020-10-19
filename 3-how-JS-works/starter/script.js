// ///////////////////////////////////////
// // Lecture: Hoisting


// // Call a function before it's declared.
// calculateAge(1983)
// function calculateAge(year) {
//     console.log(2016 - year);
// }

// // Doesn't work with function expression though.
// // retirement(1983);
// var retirement = function(year) {
//     console.log(65-(2020-year));   
// }

// // Doesn't work with variables.
// console.log('age1', age);
// var age = 23;
// function foo() {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

// ///////////////////////////////////////
// // Lecture: Scoping

