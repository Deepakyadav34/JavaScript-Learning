const obj = {
  _email: 'Deepak@gmail.com',
  _pass: 1234,

  get email() {
    return this._email.toLocaleLowerCase()
  },
  set email(value) {
    this._email = value;
  },
};

const deep=Object.create(obj);
console.log(deep.email)