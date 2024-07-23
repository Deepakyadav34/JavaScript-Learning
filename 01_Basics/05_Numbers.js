// we can declare the number simply like we declare all the other variable

const num=100
// console.log(num)

// one of the method to declare the number is that we can use Number() method 

const balance=new Number(120)
// console.log(balance) // this will show the output as the [Number:120]

/* +++++++++++++++++++++++++++++++++  we can use various prototype which is available for the numbers and we can still use it for enhancing the property like precision and other     ++++++++++++++++++++++++++++++++++++++++ */

// 1. To convert it into String

// console.log(balance.toString().length)

// 2. Use Precision

// console.log(balance.toPrecision(5))
// it is used to make the precision and roundoff the digits upto which it is provided


// 3.Use Fixed method 
// console.log(balance.toFixed(3))  // it is used to give fixed amount of number of zeros after the number 

// 4. To make it LocaleString

const newNum= 1000000
// console.log(newNum.toLocaleString('en-IN'))
// using 'en-IN' make it to indian counting system and without using it, it will make use of the british standard system

// ========================================= Maths ======================================//

/* We can use various Maths in Numbers as : */

// 1. using the abs method  to find the absolute value of the number 
// console.log(Math)
const a=-11
// console.log(Math.abs(a))

// 2. Round method 

// console.log(Math.round(3.77))

// 3. Using ceil and floor method to find the upper and lower round off value
// console.log(Math.ceil(1.25))  // output will be 2 
// console.log(Math.floor(2.67)) // output will be 2 

// 4. Finding Maximum and Minimum

// console.log(Math.max(1,2,3,4,5))
// console.log(Math.min(1,2,3,4,5))



// 5. Generating random value
const min=1
const max=6
// console.log(Math.floor(Math.random()* (max-min+1))+min)

// let ab="5"
// let c=10
// console.log(ab+c)

// let x=10
// if(true){
//     let x=20
//     // console.log(x)
// }
// // console.log(x)

let cc=1
console.log(++cc + cc++)