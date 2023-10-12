const expect = require('chai').expect;
const solve = require('./Unit Testing and Error Handling/lection');
const assert = require('assert').strict;

// describe('Sub sum calculation', () => {
//     it('should Return Sub Sum When End Index > length', () => {

//     let expectedSum = 50;
//     let numbers = [10, 20, 30, 40, 50, 60];
//     let startIndex = 1;
//     let endIndex = 3;

//     //Act
//     //call function 
//     let actualSum = solve(numbers, startIndex, endIndex);

//     //Assert
//     assert.equal(actualSum, expectedSum);
// });

// it('should Return Sub Sum When start Index < 0', () => {
//     let expectedSum = 50;
//     let numbers = [10, 20, 30, 40, 50, 60];
//     let startIndex = -100;
//     let endIndex = 2;

//     //Act
//     //call function 
//     let actualSum = solve(numbers, startIndex, endIndex);

//     //Assert
//     assert.equal(actualSum, expectedSum);
//     expect(actualSum).to.equal(expectedSum);

// });

// it('should return nan when non array is provided for first arg', () => {
//     assert.equal(solve({}, 0, 1), NaN);
// })


// });

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

describe('sum of numbers', () => {
    it('should return the sum of numbers in the array', () => {
        let numbers = [1, 2, 3, 4, 5];
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(15);
    });
    it('should return the sum with negative numbers in the array', () => {
        let numbers = [1, 2, 3, -4, -5];
        let actualSum = sum(numbers);
        expect(actualSum).to.equal(-3);
    });
    
});