// Object literals: Object literals are the simple object definition used in the program.
// Object literal defines the basics of the elemental definition of the objects creation and its execution.

const details = {
  first_name: "Deepak",
  last_name: "Yadav",
  class: "B.tech",

  // we have to use .this method to access the details outside the scope.
  getDetails: function () {
    // console.log(`Hii ${this.first_name} , Welcome to the CodeSpace!!!!`);
    console.log(this); // this will give all the elements detail available in the object
  },
};
// console.log(details); // this will give complete object detail.
// details.getDetails();
// console.log(this); // this will give an empty object .

//----------------------------------------------------------------------------------------------------------------
// New Instance Method in JavaScript:


function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// const users =  user("deepak", "yadav", 22);
// users.greeting()
// const user2=user('ritesh','Singh',21)
// console.log(users);// so this basically overwrite the element and we can use new instance to solve this issue which provides new instance of every possible details.

const user1=new user('Deepak','Yadav',22)
const user2=new user('Ritesh','Singh',24)
console.log(user1)
console.log(user2)// so this will give us the object of all the user details.



