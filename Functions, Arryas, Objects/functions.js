//functions declaration
function printFullName(fname, lname) {
    console.log(fname + " " + lname);

}


//function invocation
printFullName('eli', 'salvatore');

//function expression
let countDown = function (number) {
    console.log("countDown called");
    for (let index = 0; index < number; index++) {
        console.log(index);
    }

}

countDown(10);

//arrow function ,, default for max = 10

let countUp = (max = 10) => {
    for (let index = 0; index < max; index++) {
        console.log(index);
    }
}

countUp(5);

//Return value
function sum(a, b) {
    return a + b;
}

//returns a+b
let sumArrow = (a, b) => a + b;

//Method 
console.log('asdasd'.toUpperCase());