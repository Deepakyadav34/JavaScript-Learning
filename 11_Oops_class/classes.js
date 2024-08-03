//ES 6 

class Details{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPass(){
      return(`${this.password}abc`)
    }// this is basically called as a method which is defined inside a class 

    changeUserName(){
 return `${this.username.toUpperCase()}`
    }
}
const deepak= new Details('deepak','deepak@gmail.com',123)
 console.log(deepak.encryptPass())
 console.log(deepak.changeUserName())
 // this same execution can be done using making function and then building a prototype of encryptPass and changeUserName.
 