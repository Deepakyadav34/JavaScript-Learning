// class Details{
//     constructor(username,password){
//         this.username=username;
//         this.password=password;
//     }
// }
// const deepak=new Details('deepak','abc')
// console.log(deepak.password)

//--Get and Set Method

class Details {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get password() {
    return `password is :${this._password}`;
  }

  set password(value) {
    this._password = value;
  }
}

const deepak = new Details("deepak", "abc");
console.log(deepak.password);

//so this is correct method of using getter and setter in a class.