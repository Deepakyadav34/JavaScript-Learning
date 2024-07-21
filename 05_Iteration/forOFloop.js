// there are many loops in js, we are going to study some of them as:

// 1. FOR OF LOOPS

// on arrays

// const arr=[1,2,3,4,5]

// for(const value of arr)
// {
//     console.log(value);
// }

// ON STRINGS

// const str="Hello Deepak!"

// for( const val of str)
// { if(val==" "){continue}
//     console.log(val)
// }

// MAP : MAP is an object which is used to store key value pair and also the MAP is used to store the unique key value pair and key values cannnot be provided double time.
// MAP remembers the original order of the entries.

const map = new Map();
map.set("IN", "INDIA");
map.set("US", "UNITED STATE");
map.set("AUS", "AUSTRALIA");
map.set("SA", "SOUTH AFRICA");

// there is slight change in the syntax of this as we have to write it as:
for (const [key, val] of map) {
  console.log(key + ":-" + val);
}

// so we have to add a square bracket[] to get the key value pair in for of loops in map.

// objects are not iterable in for of loops so for that we will use another loop.
