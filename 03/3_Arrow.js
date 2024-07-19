//++++++++++++++++++++++++++++ THIS METHOD +++++++++++++++++++++

const details = {
  name: "Deepak",
  last_name: "Yadav",
  mydetails: function () {
    console.log(`${this.name} ${this.last_name} , Welcome to the website`);
    console.log(this);
  },
};
details.mydetails()
console.log(this)
details.name="Ritesh"
details.mydetails()

//++++++++++++++++++++ARROW FUNCTION ++++++++++++++++++++++++++++++++++

function detail(){
console.log(this)
}
detail() // it will give many parameters and informations like fetch , object , global,etc

function detail(){
  const username="deepak"
  console.log(this)
  }
  detail()
// this will give undefined becuase the this.username does not return any value as this method does not work in function.

 const detail= function(){
    const username="deepak"
    console.log(this.username)
    }
    detail()
// this will also give the undefined value as there will be no return statement to this.username

// Now we will declare the arrow function as:\

const detail = () => {
  console.log(this);
};
detail();
// this is syntax of arrow function declaration and using this method in arrow function will give an empty object.

// const add =(num1,num2) =>{
// return num1+ num2
// }
// console.log(add(3,5)) // this  is a basic arrow function

//IMPLICIT RETURN

const add = (num1, num2) => num1 + num2; // or (num1 + num2)
// HERE WE WILL NOT NEED THE CURLY BRACES AND OTHER THINGS IF OUR FUNCTION IS SMALL ALSO WE CAN CARRY IT IN
// PARENTHESIS SO WE DO NOT NEED TO MAKE A RETURN STATEMENT.
// console.log(add(3, 5));


// we can return objects in same manner by wrapping it in parenthesis

const addd =(num1,num2) => ({username:"Deepak", last_name:"Yadav"})
  
console.log(addd().username)
  