let person = {
    name: 'John',
    age: 21,
};

let internalNameProperties = Object.getOwnPropertyDescriptor(person, 'name');

//Modify internal property of existing property
Object.defineProperty(person, 'name', { enumerable: false });

//add new property and configure internal properties
Object.defineProperty(person, 'height', { value: 190, enumerable: false, writable: false, configurable: true });

for (const key in person) {
    console.log(person[key]);
}

Object.keys(person).forEach(key => console.log(key));

console.log(person);

console.log(JSON.stringify(person));

//cannot change value of non writable property
person.height = 192;//doesnt change -> writable : false 
console.log(person.height);

//define more than one property at once
//heigh can be changed thanks to configurable: true
Object.defineProperties(person, {
    name: {
        writable: true
    },
    height: {
        writable: true,
        value: 192
    },
    age: {
        value: 22,
        configurable: false,
    }
});

console.log(person);

//add getter
Object.defineProperty(person, 'info', {
    get: function () {
        return `${this.name} - ${this.age}`;
    },
    set: function (value) {
        let [name, ageText] = value.split(' - ');
        this.name = name;
        this.age = Number(ageText)
    }
});

person.info='Gosho - 32'
console.log(person.info);
console.log(person);