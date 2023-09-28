//object and array destructuruing

employees = [
    { name: 'John', position: 'worker' },
    { name: 'Jane', position: 'secretary' },
];

const [{ name }] = employees;
console.log(name);//John

const company = {
    employees: [
        { empName: 'John', position: 'worker' },
        { empName: 'Jane', position: 'secretary' },
    ], name: 'Quick sda',
}

const { employees: [empName] } = company;
console.log(empName);//става обект

console.log(empName['empName']);

//Factory Functions
function createRect(width, height) {
    const rect = { width, height }
    rect.getArea = () => {
        return rect.width * rect.height;
    }
    return rect;
}
