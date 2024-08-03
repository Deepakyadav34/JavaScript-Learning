// console.log(Math.PI)
// Math.PI=5;
// console.log(Math.PI)
// so the fact is that we cant change the value of pi in js let's find out why ?

const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descriptor)
/* This is what we get as its output so the fact is that PI is not writable , not enumerable, not configurable
so for that reason value of PI cannot be changed.

{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
*/

// Nows let's find out can we make some of our defined Objects  to be like that :

const deepak={
    name:'deepak',
    last_name:'Yadav',
    class:'B.tech'
}
console.log(deepak)
// const detail=Object.getOwnPropertyDescriptor(deepak,'name')
// console.log(detail)
/*so by default the value is writable , enumerable and configurable so we have to change it's property to make it not numerable and so on ....

{
  value: 'deepak',
  writable: true,
  enumerable: true,
  configurable: true
}
  
*/

Object.defineProperty(deepak,'name',{
    writable: false,
    // enumerable: false,
    configurable: false
})

const detail=Object.getOwnPropertyDescriptor(deepak,'name')
console.log(detail)
/* so all the factors becomes false and noone can change this property from now on if they permit in this local method only .
{
  value: 'deepak',
  writable: false,
  enumerable: false,
  configurable: false
} */

// Now let's learn about the property enumerable:

for (const [key,value] of Object.entries(deepak)) {
    console.log(`${key} : ${value}`)
}

// so this is the method by which we can get the enumerable concept of the object
