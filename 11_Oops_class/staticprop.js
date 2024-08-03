class User {
    constructor(username) {
        this.username = username;
    }

    // Static method to print username
    // Static methods do not have access to instance properties directly
    static printUsername(username) {
        console.log(username);
    }

    // Another static method
    static createID() {
        console.log('123');
    }
}

class Details extends User {
    constructor(username, email) {
        super(username); // Call the parent constructor
        this.email = email;
    }

    // Instance method to use the static method
    displayUsername() {
        // Pass the instance's username to the static method
        User.printUsername(this.username);
    }
}

// Create an instance of Details
const deepak = new Details('deepak', 'abc');

// Call the static methods from the class itself
User.createID(); // Output: 123
Details.createID(); // Output: 123

// Call the instance method which uses the static method
deepak.displayUsername(); // Output: deepak

// Static methods cannot be called on instances
// deepak.createID(); // This will result in an error: deepak.createID is not a function
// deepak.printUsername(); // This will result in an error: deepak.printUsername is not a function
