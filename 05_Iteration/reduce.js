// we can add reduce methods in array to add up the elements of array

const arr = [1, 2, 3, 4];

// const sum=arr.reduce(function(accumulator,currentval)
// { console.log(`accumulator is:${accumulator} and current value is: ${currentval}`)
//     return accumulator+currentval

// },0)
// console.log(sum)

// we can use arrow function for the same as well

// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// we can use the reduce method for the objects inside an array as well

const pricedetails = [
    {
        course:"js",
        price:1000

    }, 
    {
        course:"python",
        price:1000
    }, 
    {
        course:"java",
        price:1000
    }, 
    {
        course:"c++",
        price:1000
    }
];

const totalPrice= pricedetails.reduce((acc,curr)=>{return acc+curr.price},0)
console.log(totalPrice)

// so this method is much easier than other methods
