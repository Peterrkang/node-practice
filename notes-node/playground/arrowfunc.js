var square = x => x * x;
console.log(square(8));

var user = {
  name: "peter",
  //no args binds this from parent
  sayHi: () => {
    console.log(`hi. I'm ${this.name}`);
  },
  //on object literals
  sayHiAlt() {
    console.log(`hi. I'm ${this.name}`);
  }
};

user.sayHiAlt();
