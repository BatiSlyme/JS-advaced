class Animal {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} - nom nom`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super('Cat', name, age);
    }

    purrr() {
        console.log(`${this.name} - purrrrr`);
    }

    //Override
    eat() {
        console.log(`${this.name} - nqm nqm`);
    }
}

let navcho = new Cat('navcho', 7);
navcho.eat();
navcho.purrr();

navcho.__proto__.purrr();//undefined - purrrrr
navcho.__proto__.__proto__.eat();//undefined -nom nom