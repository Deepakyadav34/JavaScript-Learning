// -- Creating promises:

// ----- First Method -----------------------------

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
    // console.log("Promises is Created");
  }, 1000);
});

promiseOne.then(function () {
  //   console.log("promises is utilized");
}); // so this includes the creation and method of execution using .then() . .then() is affiliated with resolve method and .catch is affiliated with reject method.

//-- Second Method ---------------------------------------------

new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("Promises");
    resolve();
  }, 1000);
}).then(() => {
  //   console.log("utilized");
}); // so we can directly create it without storing it in any other variable.

//-- Third Method  -- Getting data through resolve method

const promiseThird = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "Deepak", last_name: "Yadav" });
  }, 1000);
});

promiseThird.then((user) => {
  //   console.log(user); // so reolve method can directly be accessed through .then method
});

//--- Fourth Method--- Errors and Chaining method

const promiseFourth = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ first_name: "Ritesh", last_name: "Singh" });
    } else {
      reject("Something Went Wrong!!!!!!");
    }
  }, 1000);
});

promiseFourth
  .then((user) => {
    console.log(user);
    return user.first_name;
  }) // the return statement of first .then will give the parameter to the second .then() method
  .then((first_name) => {
    console.log(first_name);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("This promises is finally complete");
  });
// this finally method will execute after all the execution .
// if  the error is  true then we will get error in the .catch method else we will get the chaining method
// .then().then()

//-- using Async And Await----------------------

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ first_name: "Deeeepakkkkkk", last_name: "Yadavvvvvvvvvvvvvv" });
    } else {
      reject("Deepakkkkkkkkkkkkkkkkkkkkk Went Wrong!!!!!!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  //   const response = await promiseFive;
  //   console.log(response);

  // other than that to catch the error we can use try catch method to do so because async await cannot directly handle the error so for that reason we can use try catch method

  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive();
