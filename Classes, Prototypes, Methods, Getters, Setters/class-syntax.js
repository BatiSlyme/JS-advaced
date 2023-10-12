class Cat {
    //default values
    isHungry = true;

    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name}: Meow!`);
    }
}

let firstCat = new Cat('Slavi');
let secondCat = new Cat('Garry');
firstCat.makeSound();

console.log(firstCat instanceof Cat);//true
console.log(firstCat instanceof Object);//true

console.log(firstCat);
console.log(secondCat);

//change properties runtime
secondCat.name = 'Mishi';
console.log(secondCat);

//second example
let catNames = ['Slavi', 'Mishi', 'Zuza', 'Tom', 'Sisi'];

let cats = catNames.map(x => new Cat(x));
console.log(cats);

cats.forEach(f => f.makeSound());

class Dog {

}

let dog = new Dog();
console.log(dog instanceof Cat);//false