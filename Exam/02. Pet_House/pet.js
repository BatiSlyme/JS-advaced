class Pet {
    constructor(owner, name, comments) {
        this.owner = owner;
        this.name = name;
        this.comments = comments;
    }
    addComment(comment) {
        if ((this.comments).includes(comment)) {
            console.log('This comment is already added!');
        } else {
            this.comments.push(comment);
            console.log('Comment is added.');
        }
    }
    feed() {
        console.log(this.name + ' is fed');
    }
    toString() {
        console.log(`Here is  ${this.owner} 's pet ${this.name}.`);
        if (this.comments) {
            console.log(`special requerements: ${this.comments}`);
        }
    }
}

let pet = new Pet('Simo', 'Slavi', ['UwU', 'Prrr']);
pet.feed();
pet.toString();
pet.addComment('Eli');
pet.toString();