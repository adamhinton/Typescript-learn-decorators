// decorators in general are all about classes

// Decorators are just a fxn in the end, which you apply to something (like a class) in a certain way.
//They start with capital character by convention.

function Logger();

class Person {
  name = "max";

  constructor() {
    console.log("Creating person object");
  }
}

const per = new Person();
console.log("Per:", per);
