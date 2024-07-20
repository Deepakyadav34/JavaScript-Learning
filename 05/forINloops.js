// we will use for in loops for the object iteration

const obj = {
  IN: "INDIA",
  US: "UNITED STATE OF AMERICA",
  SA: "SOUTH AFRICA",
  WI: "WEST INDIES",
};

for (const keys in obj) {
  // console.log(keys)// for keys only
  // console.log(`${keys} is for: ${obj[keys]}`)// this will give the key value pair
}

// will it work on arrays also??

const arr = [1, 2, 3, 4, 5, 6];
for (const val in arr) {
  // console.log(val)// this will give the index value of the array only like 0,1,2,3...
  // so to get the value of the arrays we have to do this as:
  // console.log(arr[val])
}

// let array = [1, 2, 3, 4, 5];
// console.log(array.join(' '));// this is used to print the value of array in single line

// will it work on MAP

const map = new Map();
map.set("IN", "INDIA");
map.set("US", "UNITED STATE");
map.set("AUS", "AUSTRALIA");
map.set("SA", "SOUTH AFRICA");

for (const [key] in map) {
  console.log(key); // this will not give any output so we can use for in loops in object iteration and in array
}
