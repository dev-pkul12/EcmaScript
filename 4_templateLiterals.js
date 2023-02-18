/* Template Literals in Ecma Script */

// Template literals are a new feature introduced in ECMAScript 2015/ ES6. It provides an easy way to create multiline strings and perform string interpolation. Template literals are the string literals and allow embedded expressions.

// Simple String =>
var str = `string value`;

// Multiline Strings =>

// Without template literal   
console.log('Without template literal \n multiline string');   
    
// With template literal => 
console.log(`Using template literal  
multiline string`);  

// String Interpolation =>
var fName = 'FirstName';
var lName = 'LastName';

console.log(`Hello, this is${fName}!
and this is ${lName}`);

var x = 10;  
var y = 20;  
console.log(`The product of the variables ${x} 
and ${y} is: ${x*y}`);

// Tagged templates are one of the more advanced form of template literals. Tagged template literals allow us to parse template literals with a function.

function TaggedLiteral(str) {   
    console.log(str);   
}   
    
TaggedLiteral `Hello World`;

// We can also pass the values in a tagged literal. The value can be the result of some expression or the value fetched from the variable =>

function TaggedLiteral(str, val1, val2) {   
    console.log(str);   
    console.log(val1+"    "+val2);   
}   
    
let text = 'Hello World';   
TaggedLiteral`Colors ${text} ${10+30}`; 