// Here we will learn about for each loop in javascript.
// Mainly foreach loops is used in arrays

const arr = ["deepak", "sheru", "ritesh"];

arr.forEach(function (val){
    console.log(val)
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// WE CAN USE ARROW FUNCTION AS WELL IN THIS

arr.forEach((value)=>{
    console.log(value)
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// we can also use some  external function to get the data as:

function name(value) {
  console.log(value);
}

arr.forEach(name)
// here we only have to provide the reference of the function and not fully execute the function.

//++++++++++++++++++++++++++++++++++++++++++++++

// this foreach function can have more than one values to print in the function as:

// arr.forEach( (value,index, arr) => {
// // console.log(value,index,arr)
// // })
// so this will give the value of the value in array , index of the array and the total array arr.

//+++++++++++++++++++++++++++++++++++++++++++++++++++
//  will it work for objects inside an array??

const detail = [
  {
    first_name: "Deepak",
    last_name: "Yadav",
  },
  {
    first_name: "Ayush",
    last_name: "Yadav",
  },
  {
    first_name: "Ritesh",
    last_name: "Singh",
  },
];

detail.forEach((value) => {
  // console.log(value)// here it will give all the values in the objects.

  console.log(value.first_name); // gives the first_name and similarly we can access the last_name.
});


let x=1
console.log(x--)//1
console.log(x)//0