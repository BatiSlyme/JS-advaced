function deliemter(x, y) {
    let result = '';
    if (typeof x == 'object') {
        result = x.join(y);
    } else {
        result = y.join(x);
    }
    console.log(result);
}


deliemter(['One',
    'Two',
    'Three',
    'Four',
    'Five'], '_');



function NthElement(x, y) {
    let arr = [];
    if (y > x.lenght) {
        return 1;
    } else {
        for (let i = 0; i < x.length; i++) {
            if (i % y == 0) {
                arr.push(x[i]);
            }
        }


        console.log(arr);
        return arr;
    }


}

NthElement(['5', '20', '31', '4', '20'], 2);

function addRemove(myArr) {
    let arr = [];
    let initial = 0;
    for (const i in myArr) {
        if (myArr[i] == 'add') {
            let newLenght = arr.push(Number(i) + 1);
            // console.log(arr[newLenght - 1]);

        } else if (myArr[i] == 'remove') {
            // console.log("pop is" + arr);

            if (!arr.pop()) {
                console.log('Empty');
                return;
            }

        }
    }

    arr.forEach(element => {
        console.log(element);
    });



    // console.log("arr is " + arr);

}

addRemove(['add',
    'add',
    'remove',
    'add',
    'add',
    'remove',
    'remove',
    'remove'])


function rotateArray(array, rotations) {
    let arr = array;
    for (let i = 0; i < rotations; i++) {
        // let first = arr.shift();
        // arr.push(first)
        let last = arr.pop();

        arr.unshift(last);

        // console.log(arr);

    }
    console.log(arr.join(' '));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);

function increasingSubset(arr) {
    let max = 0;
    let subset = arr.filter((x) => {
        if (max < x) {
            max = x;
        }
        return x >= max;


    });

    return subset;
}

increasingSubset([1, 3,
    8,
    4, 10,
    12,
    3,
    2,
    24])

function listOfNames(params) {
    let res = params.sort((a, b) => a.localeCompare(b));

    for (const i in res) {
        console.log((Number(i) + 1) + '.' + res[i]);
    }
}

listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"]
);

function sortingNumbers(numbers) {
    numbers.sort((a, b) => {
        return a - b;
    });
    finalArr = [];
    while (1) {
        let max = numbers.pop();
        let min = numbers.shift();

        if (!max || !min) {
            break;
        }
        finalArr.push(min, max);
    }

    return finalArr;
}


sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);


function sortBy2Criteria(arr) {
    arr.sort((a, b) => {
        a.lenght - b.lenght || a.localeCompare(b)
    })

}

sortBy2Criteria(['Isacc',
    'Theodor', 'Jack',
    'Harrison',
    'George'])