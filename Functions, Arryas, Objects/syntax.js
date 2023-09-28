let names = ['pesho', 'gosho', 'eli'];
console.log(names);

names.length = 10;
console.log(names);
console.log(names.length);

//undefined
console.log(names[11]);

names[10] = 'lili';//lenght = 11
names[names.length] = 'Stamat';//lenght = 12;


//undefined
console.log(names[-1]);

//length of array doesnt change, hacker is part of the object of the array
names[-1] = 'Hacker';

console.log(names);

//destructuring Assignment Syntax
//not an array
//aray doesnt change
// _ -> empty 
let [firstName, secondName, lastName, _, ...others] = names;

console.log(firstName);
console.log(secondName);
console.log(lastName);

console.log("others = " + others);
