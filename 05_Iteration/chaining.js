// first we will learn about the map method as:

const nums=[1,2,3,4,5]

const value=nums.map( (val) => {return num+10})

console.log(value)
// we can do the same with forEach method as:

nums.forEach( (val) => {console.log(val+10)})

// Now the chaining method generally provides the details as:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = numbers
  .map((val) => val + 10)
  .map((val) => val + 1)
  .filter((val) => val >10)

console.log(newNums);
// so this is chaining method and we can add as many methods that we want in the chaining method.