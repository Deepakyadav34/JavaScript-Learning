/* *************** Types of Datatypes ********************** */

// Generally there are two types of Datatypes 

/* *********************  (1). Primitive Datatype   ****************  */

/* 
1. String 
2. Boolean
3. Numbers 
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

// Symbol is used to make any value Unique

//For two same symbol having same value , there will be diffrent symbol for both i.e. they will not be equal.
// const id=Symbol(123)
// const anotherId= Symbol(123)
// console.table([id==anotherId,id===anotherId])

// here in both cases it is false.



/*  *********************** (2). Non Primitive (Reference type) ****************** */

/**
 
1. Array 
2. Object 
3. Function


 */


/* ****************** Memory ***************************************  */

// Stack and Heap type of memory are used in Javascript .

// Stack is used for all the Primitive datatypes .
// Heap is used for all the Non-Primitive datatypes.

// stack is implemented as the copy is provided for the new variables and if any changes occues to that variable then the original variable is not changed.

// whereas in Heap memory allocation for non-primitive datatypes , the reference of the value of object is provided  so the chnages made in new variables also reflects in the original value.

//  STACK ALLOCATION EXAMPLE
// let MyName="Deepak Yadav"
// let NewName=MyName
// console.log(NewName)
// console.log(MyName)

// NewName="Ritesh Singh"

// console.log(NewName)
// console.log(MyName)

// Here in Myname the value will be same and in NewName the value is changed .

// HEAP ALLOCATION EXAMPLE

let user1={
    email:"Deepak@gmail.com",
    id:1996

}
let user2=user1
console.log(user1.email)
console.log(user2.email)

user2.email="ritesh@gmail.com"

console.log(user1.email)
console.log(user2.email)
// Here the email id of both the user is changed as we pass the reference in Heap memory allocation.