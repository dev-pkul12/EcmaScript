/* Destructring in Ecma Script */

// Array in JavaScript

const firstArray = ["JavaScript", "Python", "Go"];

const secondArray = new Array(3);
secondArray[0] = "JavaScript";
secondArray[1] = "Python";
secondArray[2] = "Go";

// Object in JavaScript 
const car = {
    name: "Toyota",
    color: "Black",
    year: 2022,
    engineType: "Automatic",
};

// Assign Variables With Destructuring
const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

const [first, second] = colorArr;
console.log(first, second);

// red, yellow


// Destructuring in Objects

const stack = {
    frontend: "React",
    backend: "Node",
    database: "MongoDB",
};

const { frontend, backend } = stack;
console.log(frontend, backend);

  // React, Node