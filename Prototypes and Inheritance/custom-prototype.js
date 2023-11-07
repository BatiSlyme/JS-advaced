let cat = {
    name: 'Generic cat name',
    makeSound() {
        console.log(`${this.name} - meow..`);
    }
}

let myCat = Object.create(cat);//takes the prototype of cat, but the object cat is empty
// let myCat2 = Object.assign({}, myCat);//shallow copy console.log(myCat2);

console.log(myCat);
myCat.makeSound();

myCat.name = 'navcho';
// myCat.makeSound = function () { console.log(`${this.name} - baubau`); }
myCat.makeSound();

console.log(cat == myCat.__proto__);//true

console.log(myCat.__proto__.__proto__);//prototype chain

//check if property is in the object and not prototype
console.log(myCat.hasOwnProperty('name')/*true*/, myCat.hasOwnProperty('makeSound')/*false*/);

console.log(myCat.__proto__.__proto__.hasOwnProperty('hasOwnProperty'));

//retruns all properties
for (const key in myCat) {
    console.log(key);
}

//only hasOwnProperty-> name  = navcho
for (const key in myCat) {
    if (myCat.hasOwnProperty(key)) {
        const element = myCat[key];
        console.log(element);
    }
}