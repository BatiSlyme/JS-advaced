class Cat {
    isHungry = true;
    static legNumber = 4;
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name}: Meow!`);
    }

    static vetCheck(cat) {
        if (cat.isHungry) {
            console.log(`this cat must be fed!`);
        } else {
            console.log(`the cat is fine`);
        }
    }
}

let cat = new Cat('Navi');
cat.makeSound();
console.log(cat);


// cat.vetCheck(); will not work -> TypeError: cat.vetCheck is not a function
//static metod
Cat.vetCheck(cat);

//static property
console.log(Cat.legNumber);