//1 even postion

function evenPosition(input) {
    let newArr = '';

    for (const i in input) {
        if (i % 2 == 0) {
            newArr += input[i] + " ";
        }
    }
    console.log(newArr);



}

evenPosition(['20', '30', '40', '50', '60']);


function sumFirstLast(input) {
    let firstNumber = Number(input.shift());
    let lastNumber = Number(input.pop()) || 0;

    return firstNumber + lastNumber;
}

console.log(sumFirstLast(['20']));
