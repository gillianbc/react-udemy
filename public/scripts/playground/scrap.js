'use strict';

// ES5 function
var square = function square(x) {
    return x * x;
};

console.log(square(8));

// ES6 fat arrow function with a body - verbose
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(9));

// ES6 function expression as body above is only a single line
var sqrArrow = function sqrArrow(x) {
    return x * x;
};

// Challenge - Get first name
// getFirstName('Mike Smith') -> 'Mike'
// Create verbose function with body
// Create function expression
var getFirstNameVerbose = function getFirstNameVerbose(fullname) {
    return fullname.split(' ')[0];
};

console.log(getFirstNameVerbose('Mike Smith'));

var getFirstName = function getFirstName(fullname) {
    return fullname.split(' ')[0];
};

console.log(getFirstName('James Treacle'));
