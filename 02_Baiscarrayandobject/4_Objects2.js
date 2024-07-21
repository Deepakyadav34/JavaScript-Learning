//Here we will learn more about the Objects.
// we wil learn the singleton method of object creation
const deepak = {
  name: "Deepak",
  last_name: "Yadav",
  age: 22,
};
const newObject=Object.create(deepak);
console.log(newObject.name)
console.log(newObject)

// There maybe N number of nested objects in an object

const newName = {
  email: "deepak@gmail.com",
  fullname: {
    first_name: "Deepak",
    last_name: "Yadav",

    details: {
      address: {
        pincode: 273303,
      },
    },
  },
};

// console.log(newName.fullname.details.address.pincode)

//++++++++++++++++++++ Merging two or more Objects ++++++++++++++++++++++++++++++

obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
obj2 = { 4: "d", 5: "e", 6: "f" };
// obj3={obj1,obj2} // we can use this method as this method indicates that there is object inside a object.

//we can use one more method which is defined as :

// const obj3=Object.assign({},obj1,obj2) 

// here the starting parenthesis indicates that there is an empty object which carries  the obj1 and obj2 as its elements

//++There is one more method which can be used to merge the two objects which is defined as :SPREAD OPERATOR as:
const obj3={...obj1,...obj2}//it is easy to use 

console.log(obj3);


//+++++++++++==== METHODS IN JS +++++++++++++++++++++===

console.log(Object.keys(deepak))
console.log(Object.values(deepak))
console.log(Object.entries(deepak)) // this will return the key value pair

console.log(deepak.hasOwnProperty('age'))
// this returns the value as true if the key is present in the object and false if it is not present.
// There are many more such properties and methods in js objects

//++++++++++++++++++++=OBJECT DESTRUCTURE +++++++++++++++++++++++++++=

// we can destructure objest using :

const  myDetails={
  name:"Deepak",
  last_name:"Yadav",
  Roll_no:34

}
//if we have to use the same name multiple time then we can use destructure as:

const {name:d}=myDetails

console.log(d)
// here we can use soome short form of the large name to be defined.