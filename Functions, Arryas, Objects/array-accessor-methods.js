let cars = ['BMW', 'Audi', 'Opel'];
let oldCars = ['Lada', 'Moskvich', 'Volga']
//join
let strinResult = cars.join(',');
console.log(strinResult);

//concat
let allCars = cars.concat(oldCars);
console.log(allCars);
console.log(cars);
console.log(oldCars);

//slice
let slicedCars = allCars.slice(2, 4);
console.log("slicedCars = " + slicedCars);

//от 2ри елемент клонирай
slicedCars = allCars.slice(1);
console.log(slicedCars);

//клонирай масива
slicedCars = allCars.slice();
console.log(slicedCars);

console.log(slicedCars == allCars);

//includes 
let isInCars = allCars.includes('Lada', 4); // look for lada after index 4
console.log(isInCars);

//indexOf
let ladaIndex = allCars.indexOf('Lada');
console.log(ladaIndex);

console.log(allCars.indexOf('trabant'));// -1 => no such element in array

//Iteration Methods
//for of loop
for (const car of cars) {
    console.log(car);
}

//foreach Method!
cars.forEach((car) => {
    car += "z";
    console.log(car);
});

console.log(cars);

//some contains a letter Determines whether the specified callback function returns true for any element of an array.
let hasV = cars.some((car) => {
    return car[0] == 'V'; ``
});

console.log(hasV);


//find -> find 1st element and return
let longNameCar = allCars.find((car) => {
    return car.length > 4;
});

console.log("longNameCar is " + longNameCar);

//filter -> find all elements and return
let fourLetterCars = allCars.filter((car) => { // car => car.length == 4 съкратен синтаксис
    return car.length == 4;
});
console.log("fourLetterCars = " + fourLetterCars);

//map -> same size as numbers and returns *2 the value of every element in the array
let numbers = [1, 2, 3, 4, 5, 6];
let doubledNums = numbers.map(num => num * 2);
console.log("doubledNums is " + doubledNums);

let toUpperCaseCars = allCars.map(car => car.toLocaleUpperCase());
console.log("toUpperCaseCars is " + toUpperCaseCars);

//reduce ->accumulator callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number
let sum = numbers.reduce((acc, num) => {
    return acc + num;
}, 0)
console.log("sum is " + sum);

//nested arrays
let arr = [
    [1, 2, 3],
    [2, 3, 4],
    [4, 5, 6, 7]
]
let element =  arr[1][1] // 3