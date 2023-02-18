/* map in Ecma Script */


// Instead of manually iterating over the array using a loop, you can simply use the built-in Array.map() method.

let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" }
];

let userFullnames = users.map(function (element) {
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames);
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]