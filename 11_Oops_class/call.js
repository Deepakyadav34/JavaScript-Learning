// what if er have to call a function inside other function and every function is using its own .this() so which this will be considered

function userDetail(username){
this.username=username;
}

function details(username,password,email){
// userDetail(username)
// so this method will not call userDetails function so to call that we have to use .call() method as:

userDetail.call(this,username)
// so this() which is used in this parameter states that what we have to use in this segment is that we have to use this() of this existing parameter and not the one in above function.

this.password=password
this.email=email

}

const deepak= new details('Deepak',123,'deepak@v.com')
console.log(deepak)