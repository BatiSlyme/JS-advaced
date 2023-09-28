let cars = ['BMW', 'Audi', 'Opel'];

//pop -> Removes the last element from an array and returns it
//
let lastElement = cars.pop();

console.log(lastElement);
console.log(cars);

//push Appends new elements to the end of an array, and returns the new length of the array
let newLenght = cars.push('Mercedess', 'Honda');
console.log("newLenght = " + newLenght);

//shift
let firstElement = cars.shift();
console.log(firstElement);
console.log(cars);

//unshift
let newShiftedLenght = cars.unshift('Honda');
console.log(newShiftedLenght);
console.log(cars);

//splice
cars.splice(1, 0, 'BMW', 'Hundai');// position, delete, add new elements
console.log(cars);

//delete
let deletedCars = cars.splice(2, 2);
console.log("deletedCars = " + deletedCars);
console.log(cars);

cars.splice(2, 1, 'Hundai');

//fill
cars.fill('trabant', 2, 5);
console.log(cars);

//reverse 
let reversedCars = cars.reverse();
console.log(reversedCars);

//sort -> sort by ascii
let sortedCars = cars.sort();
console.log("sortedCars = " + sortedCars);
console.log("cars = " + cars);

let numbers = [9, 10, 6, 3];
console.log(numbers.sort());//[10, 3, 6, 9] 

//number sort
// numbers.sort(function (a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

console.log(numbers);

//same logic as above
numbers.sort((a, b) => {
    return a - b;
});

console.log(numbers);

//alphabetical sort
cars.sort((a, b) => a.localeCompare(b));
console.log(cars);
