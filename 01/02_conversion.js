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


// Similarly of we convert the striing to boolean then only the string havoing value will be true and if the string is empty then the boolean value will be false.

let number11=''
console.log(typeof number11)

let booleanNumber=Boolean(number11)

console.log(typeof booleanNumber)
console.log(booleanNumber)

//here the value is false because the string is empty and if there is any value present in string like deepak or anything then its boolean value will be true .
//similarly we can convert the string to boolean and boolean to string.