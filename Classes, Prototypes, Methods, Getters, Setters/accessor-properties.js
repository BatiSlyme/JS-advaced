class Circle {
    //private property
    #pi = Math.PI;
    #perimeter = 0;

    constructor(radius) {
        this.radius = radius;
        this.#perimeter = 2 * Math.PI * radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (value < 0) {
            throw new Error('Diameter cannot be < 0 ');
        }
        this.radius = value / 2;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    get perimeter() {
        return this.#perimeter;
    }

    set perimeter(value) {
        if (value < 0) {
            throw new Error('Perimeter cannot be < 0 ');
        }

        this.#perimeter = value;
    }

    #privateMethod() {

    }

}

let circle = new Circle(2);

circle.radius = 3;
console.log(circle.area);

circle.diameter = 10;
console.log(circle.area);
console.log(circle.radius);

console.log(Object.values(circle));

circle.diameter = 20;
console.log(circle.area);
console.log(circle.radius);

//using private property
console.log(circle.perimeter);
circle.perimeter = 10;
console.log(circle.perimeter);