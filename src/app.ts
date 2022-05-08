// decorators in general are all about classes

class Person {
  name = "max";

  constructor() {
    console.log("Creating person object");
  }
}

const per = new Person();
console.log("Per:", per);
