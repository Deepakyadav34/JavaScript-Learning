// Basically the scope is defined as the area or property of function or conditional statements in which the
// variables can be accessed or not.
// For example: if a varibale is defined with the let keyword in a function and it is accessed globally then it
// will show error , same happens with the const but when it is declared with var keyword then it can be
// accessed anywhere that's where the concept of hoisting came .

if (true) {
  const a = 20;
  let b = 40;
  var c = 30;
  // here only this will give the output and the rest two will give the error this is why there is need of
  // scope to maintain the accessibility of the code
}
// console.log(a)
// console.log(b)
// console.log(c)

// there are two types of scopes i.e:
// 1. LOCAL SCOPE: The accessibilty of any variable is within the function or loop only and not outside that
// 2. GLOBAL SCOPE: The accessibility is globally and the variables can be accessed globally.

// we declare the variable globally outside the function
var a = 300;

if (true) {
  const a = 20;
  let b = 40;
  var c = 30;
}
// console.log(a)// here it will give the value of a=300.

// +++++++++++++++++==Scopes description / Nested Scopes ++++++++++++++++++++++++++++++++

// function one() {
//   const name = "deepak";

//   function two() {
//     const name2 = "Aditya";
//     console.log(name);
//   }
//   console.log(name2);// it will throw reference error.
//   two();
// }
// one()

if (true) {
  const username = "deepak";
  if (username === "deepak") {
    const website = " Yadav";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

//++++++++++++++++++==Hoisting+++++++++++++++++++++++++++++++==

// here if we use this function add() above the declaration of function then it will work

console.log(add(1));
function add(number) {
  return number + 1;
}
// console.log(add(4))

// here if we declare the function above the declaration it will not work because the function is also known as expression and it is not purely function
console.log(addtwo(3)); // this will throw error..[here it dont use the concept of hoisting]
const addtwo = function (num) {
  return num + 2;
};

// console.log(addtwo(4))
