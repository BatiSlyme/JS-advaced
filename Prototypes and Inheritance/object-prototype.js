let person = {
    name: 'John',
    age: 21,
};

let personPrototype = Object.getPrototypeOf(person);
personPrototype.weight = 80;
console.log(personPrototype);
console.log(person);//{name: 'John', age: 21}
console.log(person.weight);//80 dynamically gets prop weight from personPrototype

//different object with different references
console.log(person == personPrototype);//false

console.log(person.__proto__ == personPrototype);//true