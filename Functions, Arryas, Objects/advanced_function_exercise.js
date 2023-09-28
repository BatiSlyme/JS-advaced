// //1. Sort Array

// function sortArray(arr, order) {
//     if (order == 'asc') {
//         return arr.sort((a, b) => a - b);
//     } else {
//         return arr.sort((a, b) => b - a);

//     }

// }

// console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
// console.log(sortArray([14, 7, 17, 6, 8], 'desc'));

// // 2. Argument Info
// // Write a function that displays information about the arguments which are passed to it (type and value) and a 
// // summary about the number of each type in the following format: 
// // `{argument type}: {argument value}`
// // Print each argument description on a new line. At the end print a tally with counts for each type in descending 
// // order, each on a new line in the following format:
// // `{type} = {count}`
// // If two types have the same count, use order of appearance. 
// // Do NOT print anything for types that do not appear in the list of arguments.
// // Input
// // You will receive a series of arguments passed to your function.
// // Output
// // Print on the console the type and value of each argument passed into your function.
// // © SoftUni – https://softuni.org. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.

// // Follow us: Page 2 of 13
// // Example
// // Input
// // 'cat', 42, function () { console.log('Hello world!'); }
// // Output
// // string: cat
// // number: 42
// // function: function () { console.log('Hello world!'); }
// // string = 1
// // number = 1
// // function = 1

// function argumentInfo() {
//     // console.log(`${typeof n1} : ${n1}`);
//     // console.log(`${typeof n2} : ${n2}`);
//     // console.log(`${typeof n3} : ${n3}`);

//     let data = {};
//     console.log(arguments);
//     Array.from(arguments).forEach(x => {
//         let type = typeof x;
//         let value = x;

//         console.log(`${type} : ${value}`);

//         if (!data[type]) {
//             data[type] = 0;
//         }
//         data[type]++;


//     });

//     Object.keys(data).sort((a, b) => data[a] - data[b])
//         .forEach(key => console.log(`${key} : ${data[key]}`))

//     console.log(data);



// }

// argumentInfo('eli', 'cat', 42, function () { console.log('Hello world!'); });

// //3. Fibonacci
// function getFibonator() {
//     let n1 = 0;
//     let n2 = 1;
//     return function fib() {
//         let res = n1 + n2;
//         n1 = n2;
//         n2 = res;
//         return n1;





//     }
// }

// let fib = getFibonator();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13

//4. Breakfast Robot
function breakfastRobot() {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

    }

    let products = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    return function manager(str) {
        let x = str.split(' ');
        let result = '';
        switch (x[0]) {
            case 'restock': {
                result = 'Success';
                stock[x[1]] += Number(x[2]);
            }
                break;
            case 'prepare': {
                let productItem = x[1];
                let error = false;
                Object.keys(products[productItem])
                    .forEach((nutrient, i, arr) => {
                        if (stock[nutrient] - Number(products[productItem][nutrient] * x[2]) < 0) {
                            result = `Error: not enough ${(nutrient)} in stock`;
                            arr.length = i + 1;
                            error = true;
                        } else {


                        }

                    });

                if (!error) {
                    Object.keys(products[productItem])
                        .forEach((nutrient) => {
                            result = 'Success';
                            stock[nutrient] -= Number(products[productItem][nutrient]);

                        });
                }
            }
                break;
            case 'report': {
                result = stock;
            }
                break;
        }

        return result;
    }


}

let manager = breakfastRobot();


console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));

//5. Functional Sum
function add(num) {
    let sum = 0;
    function inner(number) {
        sum += number;
        return inner;
    }
    inner.toString = () => {
        return sum;
    }
    return inner(num)
}
console.log(add(1)(2)(-3).toString());


function calc(num) {
    console.log(num);

    let nextNum = num - 1;

    if (num > 0) {
        return calc(nextNum);
    }


}

calc(10);

