// In this we are going to learn about new Instance method like how we create our own prototype and how we access that prototype of Our's:

function mulby5(num) {
    return num * 5;
}
// console.log(mulby5(5))
// console.log(mulby5.power=2)// this will give 2

// console.log(mulby5.prototype) // this gives an empty object.

// so basically there is prototype of function too hence function is indrectly too an object . 

// ------------------------------- Creating a Prototype of our own and knowing more about .this() method 


const func = function (username, age) {
    this.username = username
    this.age = age
    return this
}

// creating prototype

func.prototype.increment = function () {
    this.age++
    console.log(this.age)
}
func.prototype.printMe = function (username) {
    console.log(`username is ${this.username}`)
}

//-- calling the function

// console.log(func('deepak',22))
// console.log(func('ritesh',23))

const deepak = new func('Deepak', 22)
deepak.increment();
deepak.printMe();

const ritesh= new func('Ritesh',25)
ritesh.increment();
ritesh.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/