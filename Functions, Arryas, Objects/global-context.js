//gobal context
function random() {
    console.log(this);//window BOM -> Window -> golbal context // не работи под nodejs
    return Math.random();
}

random();//gobal invocation

let math = {
    random: random
}
math.random();// method invocation

//object context
let obj = {
    name: 'Peter',
    greet() {
        console.log(this);
        console.log(`Hello! My name is ${this.name}`);
    }
}

obj.greet(); // method invocation
let greet = obj.greet; // copy fn by ref
greet()//global invocation

//DOM Element -> muest execute in browser
// document.addEventListener('clock',function(){log(this);});


//Arrow function

const person = {
    firstName: 'John',
    lastName: 'Elui',
    introduce() {
        // let that = this;//old way

        // const getFullName = function () {
        //     //return this.firstName + ' ' + this.lastName;

        //     return that.firstName + ' ' + that.lastName;
        // }
        // console.log(`Hello my name is  ${getFullName()}`); //global invocation

        const getFullName = () => {
            return this.firstName + ' ' + this.lastName;//this gets parent reference
        }
        console.log(`Hello my name is  ${getFullName()}`); //global invocation
    },
}

person.introduce();//undefined


//Call
function introduce(to) {
    console.log(`Hello ${to} my name is ${this.name}`);
}

introduce('Gosho');//global invocation

let objContext = {
    name: 'Pesho',
}

introduce.call(objContext, 'Gosho');// invoce using call 

introduce.apply(objContext, ['Gosho']);// invoce using apply 

//bind 
let superHuman = {
    name: 'Superman',
}

let superIntroDuction =  introduce.bind(superHuman,'Mariyka');// 
superIntroDuction();