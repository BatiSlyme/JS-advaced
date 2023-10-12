//1 person
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;


    }

    toString() { return `${this.firstName}, ${this.lastName} ${this.age} ${this.email}`; }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

//4 Point Distance
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        let a = Math.abs(firstPoint.x - secondPoint.x);
        let b = Math.abs(firstPoint.y - secondPoint.y);
        return Math.sqrt(a ** 2 + b ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);


console.log(Point.distance(p1, p2));