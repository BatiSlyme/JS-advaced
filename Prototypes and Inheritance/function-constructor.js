// function constructor syntax
function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    //this will create a fuction for each instance
    //incorrect way to set function in the class obj -> uses more memory
    // this.greet = function () {
    //     console.log(`Hello ${this.name} ${this.age} ${this.height}`);
    // }
};

//the correct way to add a method to the obj class -> memory efficient
Person.prototype.greet = function () {
    console.log(`Hello ${this.name} ${this.age} ${this.height}`);
};

//class syntax
// class Person {
//     constructor(name, age, height) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//         //this will create a fuction for each instance
//         //incorrect way to set function in the class obj -> uses more memory
//         // this.greet = function () {
//         //     console.log(`Hello ${this.name} ${this.age} ${this.height}`);
//         // }
//     }
//     //the correct way to add a method to the obj class -> memory efficient
//     greet() {
//         console.log(`Hello ${this.name} ${this.age} ${this.height}`);
//     }
// };




let person = new Person('Slavi', 20, 183);
let person2 = new Person('Gosho', 32, 190);
console.log(person);
console.log(person instanceof Person);

person.greet();
person2.greet();

console.log(person.greet == person2.greet);//false -> declared at different places in the memory