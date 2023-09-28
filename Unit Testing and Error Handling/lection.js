//1
function solve(numbers, startIndex, endIndex) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let start = Math.max(startIndex, 0);
    let end = Math.min(endIndex, numbers.length - 1);

    let subNumbers = numbers.slice(startIndex, endIndex);
    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
    console.log(sum);
}

solve([10, 20, 30, 40, 50, 60], 1, 3);


function getNumber(x) {
    let randomNumber = Math.random();

    if (randomNumber < 0.5) {
        throw new Error("Your number is too small");
        // throw 'your number is too small';
        // throw {
        //     message: 'your number is too small',
        //     type: 'Some_error_type'
        // }//{message: 'your number is too small', type: 'Some_error_type'}
    }

    return Math.floor(randomNumber * 100);

}


function start() {
    let number
    try {
        number = getNumber();
    } catch (error) {
        console.log(error);
    }
    console.log(number);
}

start();