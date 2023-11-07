function Animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
}

Animal.prototype.makeSound = function () {
    console.log(`${this.name} - meow..`);
}


let cat = new Animal('Cat', 'Gari', 4);
console.log(cat);

//cat inherits from Animal
function Cat(name, age) {
    Animal.call(this, 'Cat', name, age);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.purrr = function () { console.log(`${this.name} - purrr`); };
let navcho = new Cat('novohodosor', 7);
navcho.makeSound();
navcho.purrr();
navcho.weigth = 12;

console.log(navcho);

let slavcho = new Cat('Slavcho', 12);
console.log(slavcho);
