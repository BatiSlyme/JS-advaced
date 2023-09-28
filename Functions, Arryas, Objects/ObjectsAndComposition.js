let person = {
    name: "Pesho",
    age: 20,
    isMale: true,
}

let propName = 'age';
let cat = {}

cat.name = 'Navo';
cat['breed'] = 'persian';
cat['fur-color'] = 'yellow';
cat[propName] = 7;

//object destructuring assingment
let { age, breed, ...rest } = cat;
console.log(age);
console.log(breed);
console.log(rest);

let otherCat = cat;
otherCat.name = 'Garry'; // променя и obj cat
console.log(otherCat.name);
console.log(cat.name);
console.log(otherCat == cat);//true


//1st way to clone object 
//not a reference to cat
let { ...clonedCat } = cat;
clonedCat.name = 'Garrty';
console.log(clonedCat == cat);//false
console.log(cat);

//comparting objects
let person1 = { name: 'Pesho' };
let person2 = { name: 'Pesho' };
console.log(person1 == person2);//false different reference
console.log(person1.name == person2.name);//true -> primitives 

//associative arrays
let phoneBook = {
    'Ivan Petrov': '123123123',
    'Georgi Georgiev': '223123123',
    'Peter Petrov': '12312312',

}

// Iteration
for (const key in phoneBook) {
    console.log(`${key} - ${phoneBook[key]}`);
}


//iteration methods
let names = Object.keys(phoneBook);
let phones = Object.values(phoneBook);
console.log(names);
console.log(phones);

Object.keys(phoneBook).forEach(x => {
    console.log(`${x} - ${phoneBook[x]}`);
})

//used for sorting objects
let entries = Object.entries(phoneBook);//nested arrays
// console.log(JSON.stringify(entries));
for (const prop of entries) {
    console.log(prop);


}

for (const [key, value] of entries) {
    console.log(key);
    console.log(value);
}



function townPopulation(input) {
    let towns = {};

    for (const info of input) {

        // let infoArray = info.split(' <-> ');
        // let town = infoArray[0];
        // let population = Number(infoArray[1]);
        let [town, populationText] = info.split(' <-> ');
        let population = Number(populationText);


        if (!towns[town]) {
            towns[town] = 0;
        }
        towns[town] += population;

    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);

    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);


const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

function factory(library, orders) {

    let output = [];

    for (const order of orders) {
        let product = order.template;

        for (const part of order.parts) {
            product[part] = library[part]
        }
        products.push(product);

    }

    console.log(products);
}

const products = factory(library, orders);
