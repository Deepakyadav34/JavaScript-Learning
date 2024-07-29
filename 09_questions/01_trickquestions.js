// // // // // // // console.log(typeof (null === undefined)); // boolean

// // // // // // // console.log(typeof('5'-3)) //number

// // // // // // // console.log(2**3**2); 512

// // // // // // // console.log(typeof []) // object

// // // // // // // console.log(typeof(1 + '2' + 3)) // value is 123 and type is string

// // // // // // // let e = '2'*'3';
// // // // // // // console.log(e) // 6
// // // // // // // console.log(typeof e) // number

// // // // // // // console.log(!!{})  // true

// // // // // // // console.log(typeof typeof 1) // string

// // // // // // // console.log(typeof null) // object

// // // // // // // console.log([] == ![]) // true

// // // // // // // console.log(0.1+0.2==0.3); // false

// // // // // // // console.log(typeof NaN) // number

// // // // // // // console.log([1,2] +[3,4]); // 1,23,4

// // // // // // console.log(typeof (1+'1')); // string

// // // // // // // let x=10;
// // // // // // // (function(){
// // // // // // //     console.log(x);
// // // // // // //     var x=20;
// // // // // // // })(); // undefined

// // // // // const arr=[1,2,3,4,5]
// // // // // console.log(arr.slice(-2,-1)); // [4]

// // // // console.log([]==0); // true
// // // // console.log([]=='0'); // false
// // // // console.log([] === 0)// always false because in js we compare objects with reference not value

// // // let a=3
// // // let b = new Number(3);
// // // console.log(a==b);//true
// // //  console.log(a===b); // false

// // function foo(){
// //     return {
// //         bar:'hello'
// //     };
// // }
// // console.log(typeof foo()) // object

// console.log(1 + - + + + - + 1)//2

// console.log( +4 + + + 5)

const fun = function () {};
console.log(typeof (() => {}));//function
console.log(typeof fun)//function
