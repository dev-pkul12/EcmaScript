/* Arrow Function in Ecma Script */

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

// using arrow functions
let x = (x, y) => x * y;

// Arrow Function with No Argument
let greet = () => console.log('Hello');
greet(); // Hello

// Arrow Function as an Expression

let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby

// Multiline Arrow Functions 

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12

// the spread syntax
let a = (...n) => {
    console.log(n);
}

a(4,6,7); // [4, 6, 7]