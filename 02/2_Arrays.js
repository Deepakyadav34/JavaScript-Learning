// MORE PROTOTYPES OF ARRAYS 

const A= ["Deepak","Ayush","Ritesh"]
const B= ["Vaibhav", 'Saurabh',"Aditya"]
// A.push(B)
// console.log(A)      
// Here it will give the arrays of array and treat the B array as a Single element and push it in array A .


// CONCAT-----------------------------------------

// const C= A.concat(B)
// console.log(C) 
// it will concat the both array and give it in single array as C


// SPREAD -------------------------------------------------
//  const D=[...A,...B]
//  console.log(D)  
 //it works similarly to concat but we can combine more than two array easily in this method 


 // FLAT METHOD ----------------------------------------------
 const arr=[1,2,3,[4,5,6],[7,[8],9],10,[11,[12,13,[14,15,[16,17]]]]]
 //here arrays are present inside the array and to solve such conflicts we can use flat method as :

//  console.log(arr.flat(4  ))


 // WE USUALLY GET DATA IN DIFFERENT FORM AND WE CAN ENQUIRE THAT IS THIS ARRRAY OR NOT AND FURTHER WE CAN CHANGE IT TO ARRAY AS:

//console.log(Array.isArray('DEEPAK'))
// console.log(Array.from('DEEPAK'))  // it will make array of every character in this name
// console.log(Array.of('DEEPAK'))    // it will make the complete array of the name


// =======================================================================================
let A1=200
let A2=100
let A3 =600
const newarr=Array.of(A1,A2,A3)
console.log(newarr)