// Basically forEach method  never returns any value so if we used to store the forEach method in some new variable then we can not access the value of that variable further on.

// const arr=["deepak" , 'sheru','ritesh']

//  const detail=arr.forEach( (value) =>
// {
//     console.log(value)
// return value
// })

// console.log(detail)// here it will give undefined

//Hence , we use some other method to store and retrieve the value of this functions as:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// nums.filter( (value) => value>4)
// here it will give no output for now because it is only returning the value and to get the value we have to store this values in a variable and get the data from that variable only.

// const numbers=nums.filter((value)=>value>4)
// console.log(numbers)// here it will give [5,6,7,8,9,10].

// we can also use forEach  method for doing so but we get more complexity like:

// const newNums=[]
// nums.forEach( (val) =>{
// if(val>4){
//     newNums.push(val)
// }
// })
// console.log(newNums)// this will give the same output as [5,6,7,8,9,10]

// We can pactice more in the .filter() method as:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // here it provides the details of the books like title and all we can use filter to get the desired data.

//   const details=books.filter( (value) =>value.genre==='Science' 
//     )
//   console.log(details) // this will return the objects of books having the genre Science


// similarly we can perform more operations on this as:

const details=books.filter( (value) =>value.publish>1990
)
console.log(details)