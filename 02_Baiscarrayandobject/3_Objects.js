//Objects can be created by two ways:
// 1. By Constructor method in which singleton is formed.  (Object.create is used in constructor method)
// 2. By literal method in which singleton is not formed.

// we will learn about the literal method in this :
 const mySym=Symbol("key1")

const myDetails={
    first_name:"Deepak",
    last_Name:"Yadav",
    mySym :"myKey1",
    [mySym] :"myKey1",
    email:"deepak@gmail.com",
    location:"Gorakhpur"

}
// Now objects can be accessed by two methods :
// 1. By Dot(.) method 
// console.log(myDetails.first_name) // here it will give the first name as output.

// 2. By using Square brackets[]

// console.log(myDetails["email"]) // here it will give my email id as output

// Basically the key in objects are String in nature hence we can access those string only by putting the "" in square brackets.

// This method is more useful as if we will use the square brackets then it will make the access of key more easier and precise.

// we can declare symbols in Object and access it as:
// we have declare the mySym above and now we can use it as :

// console.log( myDetails[mySym])  // here it will give the output as myKey1
// console.log(typeof myDetails[mySym])  // here the type of the mySym is String and not Symbol .

// So to get the symbol as typeof mySym we will havw to declare the mySym in object as: [mySym] :"myKey1"

// hence by declaring so we will get :

// console.log(myDetails[mySym])
// console.log(typeof myDetails[mySym])
// console.log(myDetails)


// ++++++++++++++++++++++++++++++++++++++++++++++  Changing Values in Object++++++++++++++++++++++++++++++++++

myDetails.email="deepak74@it.com"
// console.log(myDetails['email']) // here the email id is change

// we can also freeze the email id or any details 
// Object.freeze(myDetails)   // here the email id is freezed and we cant change it now

myDetails.email="deepak99999@gmail.com"
// console.log(myDetails['email']) 
// here the email id or any details cant be changed because the details are freezed now.

// +++++++++++++++++++= Functions ++++++++++++++++++++++++++========

// console.log(myDetails[mySym])
// console.log( typeof [mySym])
// console.log(myDetails)


// +++++++++++++++++++++++++++ Greetings +++++++++++++++++++++++++++++++++++++

myDetails.greetings =function(){
// console.log("Hello User")
console.log(`hello User,${this.first_name} ${this.last_Name}`) // this method is used to get the data of the function or object.
}
// console.log(myDetails.greetings())
// here it will give the Hello User as well as Undefined (undefined is the return value of the function)
// to get the data without undefined we have to directly access the code as it is like myDetails.greetings().

myDetails.greetings()
