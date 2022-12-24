class Person {
  constructor(name, lastName, age, email) {
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person.toString());
console.log(person);
let person1 = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(person1.toString());
let myData = new Person("Ivaylo", "Tsarov", 28, "tsarov25@gmail.com");
console.log(myData);
