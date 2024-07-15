// IIFE or immediately invoked function expression is used for faster execution of the code .
// When there is so much code components and variables (global pollutants) then we will use the IIFE for faster 
// execution of the code.

// (function add(num1,num2){
//     console.log(num1+ num2)
//     }
// // )(3,4);
// here ; is must to stop the execution of  IIFE because IIFE knows about the initiation but dont know when and where to stop.

// we can use arrow function in this too as :

( () => {
console.log("hiii Deepak")
})();

