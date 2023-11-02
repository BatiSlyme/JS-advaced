// 'use strict';

let person = {
    name: 'John',
    age: 21,
    height: 170,
};
// let clonedPerson = { ...person };//shallow copy
let clonedPerson = Object.assign({}, person/*, otherObject*/);

//freeze
Object.freeze(person);
person.name = 'John123123';
console.log(person);

//seal
Object.seal(clonedPerson);//we can edit exisiting properties
clonedPerson.newProp = '123123';//can't add/delete properties

//Object with const
const constantObject = {
    prop: 'value'
}

constantObject.prop = 'newValue';
console.log(constantObject);

// constantObject = { prop: 'new ref' };//this will throw a TypeError: Assignment to constant variable. 