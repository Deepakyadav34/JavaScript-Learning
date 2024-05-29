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
const id=Symbol(123)
const anotherId= Symbol(123)
console.table([id==anotherId,id===anotherId])

// here in both cases it is false.



/*  *********************** (2). Non Primitive (Reference type) ****************** */

/**
 
1. Array 
2. Object 
3. Function


 */