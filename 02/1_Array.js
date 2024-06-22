// const arr =[1,2,3,4,5]
// console.log(arr)

const arr1=['deepak','ayush','aditya']
console.log(arr1)

const arr2 = new Array(1,2,3)
console.log(typeof arr2)  // object 

arr2.length=5
console.log(arr2)



// ====================== Arrray Methods ====================

const arr= [1,2,34.5,6]
console.log(arr)


// PUSH OPERATION -------------------------------------
arr.push(9)
console.log(arr)

// POP OPERATION --------------------------

arr.pop()
console.log(arr)

// SLICE OPERATION----------------------------------

console.log(arr.slice(1,3)) 
console.log(arr)   //Here , there will be no changes in original array

// SPLICE OPERATION---------------------------------

console.log(arr.splice(0,1,9,8,7,6))
console.log(arr) 
// here it changes the array completely by adding the elements that are given and deleting the oringinal array's element

// SHIFT AND UNSHIFT OPERATION ---------------------------------

// UNSHIFT operation is used to insert the element from the starting and the elements index shift from one place  

arr.unshift(8)
console.log(arr)

// SHIFT operation is used to delete the element from starting

arr.shift()
console.log(arr)


// INCLUDES AND  INDEXOF METHOD ------------------------------

console.log(arr.includes(9))
console.log(arr.indexOf(2))


// JOIN OPERATION------------------------------------------------

const newarr=arr.join()
console.log(arr)
console.log(newarr)
console.log(typeof newarr)
console.log(typeof arr)