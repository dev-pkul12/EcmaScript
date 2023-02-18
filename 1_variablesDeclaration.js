/* Variables declaration in Ecma Script*/

// Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

// Const =>

// Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable. 

const greetingOne = "say Hi";
const greetingTwo = "say Hello instead";// error: Identifier 'greeting' has already been declared


// Let =>

// A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

let greeting1 = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined


// Var =>

// var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

var greeter = "hey hi";

function newFunction() {
    var hello = "hello";
}