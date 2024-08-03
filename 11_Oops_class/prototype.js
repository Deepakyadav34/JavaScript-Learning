// const name='Deepak       '
// console.log(name.length)

// we have to add our own method like truelength which gives the actual length and not the spaces and all:








//---- Objects Prototype--------------------------------------------

Array.prototype.sayMyName=function(){
    console.log('Deepak Yadav is the Boss!!!!!!!!!!!!!!!!!!!!!!!!!')
}


arr1=[1,2,3,4]

// arr1.sayMyName()
// here it is the prototype which we can access in any of the Arrays . For Example:

arr2=['c','y','t']
// arr2.sayMyName()

// here it is only applicable for the Arays only now if you consider to define a prototype and it works for each and everything like string , arrays , function then it can be done by defining the prototype of an Object.

const obj={
    name:'Ritesh',
    class:'BA',
}

Object.prototype.deepak = function(){
    console.log('Hii Deepak , Welcome to the code !!!')

}


// arr1.deepak()
// arr2.deepak();
// obj.deepak()
// so we defined the prototype only for the Object but it can be accessible for all the functions, arrays, strings and objects so by this we can conclude that everything in javaScript is object or the super prototype of every thing in js is Object.


// now working for the truelength we have to define the prototype as ;

String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`The true Length is:${this.trim().length}`)
}

// name.truelength()
// 'Ayushh                    '.truelength()


// Inheritance

const user={
    name:'Deepakk',
    email:'deepak@gmail.com'
}

const teacher={
    availability:true
}
const TS ={
    fulltime:true,
    __proto__:teacher,
   
}
// user.__proto__=teacher

// console.log(user.availability)
// console.log(user.fulltime)

// it is traditioal ,method  and it can access only one prototype at a time so to do more than one prototype at a time we need to use :

// Modern Syntax:

Object.setPrototypeOf(user,teacher)

console.log(user.availability)