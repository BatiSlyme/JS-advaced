function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let coordinates = JSON.parse(input);
    let result = [];
    for (const points of coordinates) {
        result.push({
            area: area.call(points),
            volume: vol.call(points),
        });

    }
    return JSON.stringify(result);

}

function facncySolve(area, vol, input) {
    return JSON.parse(input).map(x => {
        return {
            area: area.call(x),
            volume: vol.call(x),
        }
    });
    ;
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));

console.log(facncySolve(area, vol, `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        ]`));


//closure
function counterBuilder(initialValue) {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}

let counter = counterBuilder();
let counter2 = counterBuilder();
//higher order function
counter();
//impure function -> returns different values
counter();
counter();
counter();

counter2();

//2 Add 

function solution(number) {
    function add(a, b) {
        return a + b;
    }

    return add.bind(this, number);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(8));


//5 Command Processor
// Write a program that keeps a string inside its context and can execute different commands that modify or print the 
// string on the console.
// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console

function solution5() {
    //closure
    let result = '';

    return {
        append(str) {
            result += str;
        },

        removeStart(num) {
            result = result.substring(num);

        },

        removeEnd(num) {
            result = result.substring(0, result.length - num);

        },
        print() {
            console.log(result);
        }
    };

}

let secondZeroTest = solution5();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

//3. Currency Format
// Write a higher-order function createFormatter that fixes some of the parameters of another function. Your 
// program will receive four parameters: three values and a function that takes 4 parameters and returns a 
// formatted string (a monetary value with currency symbol). 
// Your task is to return a partially applied function, based on the input function that has its first three parameters 
// fixed and only takes one parameter.
// You will receive the following function: 
// currencyFormatter
// function currencyFormatter(separator, symbol, symbolFirst, value) {
//  let result = Math.trunc(value) + separator;
//  result += value.toFixed(2).substr(-2,2);
//  if (symbolFirst) return symbol + ' ' + result;
//  else return result + ' ' + symbol;
// }
// Receive and set the following parameters to fixed values:
// separator
// symbol
// symbolFirst
// The final parameter value is the one that the returned function must receive.
function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    return currencyFormatter.bind(this, separator, symbol, symbolFirst)
    // return (value)=>currencyFormatter(eparator, symbol, symbolFirst, value); 2nd way
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}


//  separator (string);
//  symbol (string);
//  symbolFirst (Boolean);
//  formatter (function);

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71


//currying 
function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

const arrowSum = a => b => c => a + b + c;

console.log(sum3(5)(8)(6));

console.log(arrowSum(5)(8)(6));

let sum5 = sum3(5);
let sum5and8 = sum5(8)
let totalSum = sum5and8(6);
console.log(totalSum);

//4 filter employees

function solve4(input, criteria) {
    // console.log(input);
    let employees = JSON.parse(input);
    let [prop, value] = criteria.split('-');

    employees
        .filter(x => {
            return x[prop] === value;
        })
        .map((x, i) => {
            return `${i}. ${x.first_name} ${x.last_name} - ${x.email}`
        })
        .forEach(x => {
            console.log(x);
        });
}

solve4(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    }, 
   {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female');