
let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honk: function () {
        //this -> function context -> car 
        console.log(`${this.model}:  beep beep!`);
    },
    honk2: () => { //method witha arrow fn
        console.log('beep beep 2!');
    },
    honk3() {//object method notation
        console.log('beep beep 3!');

    },
}

car.honk();
car.model = 'Mercedes';
car.honk();


function division(a, b) {
    return a / b;
}
//object as function library 
let calc = {
    sum: function (a, b) {
        return a + b;
    },
    multiplication: (a, b) => a * b,
    subraction(a, b) {
        return a - b;
    },
    division,
}

console.log(calc.sum(10, 15));


//change excecution context
let singleHonk = car.honk;//copy function reference

singleHonk();//this -> undefined

let russianCar = {
    model: 'Lada'
}

russianCar.bibitka = car.honk;

russianCar.bibitka();