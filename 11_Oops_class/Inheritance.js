class User {
  constructor(username) {
    this.username = username;
  }
  toLog() {
    return `Username is : ${this.username}`;
  }
}

class Student extends User{
    constructor(username,email,password)
    {
        super(username)
        this.email=email;
        this.password=password

    }
    addRoll(){
        return `A new Role  is available for :${this.username.charAt(0).toUpperCase()+this.username.slice(1)}`
    }
}

const deepak= new Student('deepak','123@gm.com',123)
console.log(deepak.addRoll());


// Instance of 

const ritesh=new User('Ritesh')

console.log(ritesh.toLog())

console.log(ritesh === deepak)//false
console.log(ritesh===Student)//false
console.log( ritesh instanceof Student)//false
console.log(deepak instanceof User)//true

// so instanceof method gives the binary value that is the current method or variable is instance of a class or not ?