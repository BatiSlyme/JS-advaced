class Pet {
    constructor(owner, name, comments) {
        this.owner = owner;
        this.name = name;
        if (!comments) {
            this.comments = [];
        } else {
            this.comments = comments;
        }

    }
    addComment(comment) {
        if (this.comments && (this.comments).includes(comment)) {
            console.log('This comment is already added!');
        } else {
            this.comments.push(comment);
            console.log('Comment is added.');
        }
    }
    feed() {
        return this.name + ' is fed';
    }
    toString() {
        return `Here is  ${this.owner}'s pet ${this.name}. ${this.comments ? `\n special requerements: ${this.comments}. ` : ''}`;
    }
}

// let pet = new Pet('Simo', 'Slavi', ['UwU', 'Prrr']);
// pet.feed();
// pet.toString();
// pet.addComment('Eli');
// pet.toString();

class Cat extends Pet {
    constructor(owner, name, insideHabits, scratching) {
        super(owner, name);
        this.insideHabits = insideHabits;
        this.scratching = scratching;
    }

    feed() {
        let fed = super.feed();
        return fed + ' , happy and purring.';
    }

    toString() {
        return `${this.name} is a cat with ${this.insideHabits} ${this.scratching ? ', but beware of scratches' : ''}`;
    }

}


let cat = new Cat('moni', 'slavi', 'rappping and crying', true);
console.log(cat.addComment('likes to be brushed'));
console.log(cat.addComment('sleeps a lot'));

cat.toString();
console.log(cat.feed());

class Dog extends Pet {
    constructor(owner, name, runningNeeds, trainability) {
        super(owner, name);
        this.runningNeeds = runningNeeds;
        this.trainability = trainability;
    }

    feed() {
        let fed = super.feed();
        return fed + ' , happy and wigging tail.';
    }

    toString() {
        return super.toString() + `Main information: ${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`;
    }
}

let dog = new Dog('Susan', 'Max', 5, 'good');
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());
