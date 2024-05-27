let num=33

console.log(typeof num)
// here type of num is Number 

let strNum=String(num)

console.log(typeof strNum)
console.log(strNum)
//here it will conver the number to string and its value is 33.

// now if we conver the string to number we will get the number and NaN(Not a number as value) only if the string has some number plus string like 333abcd here it wil provide NaN.

let num1='22abc'
console.log(typeof num1)
let Numofnum1=Number(num1)
console.log( typeof Numofnum1)
console.log(Numofnum1)

//here the value of Numofnum1 is NaN because the string contain both the value of number and string and can be converted into number but the value remains the NaN.
