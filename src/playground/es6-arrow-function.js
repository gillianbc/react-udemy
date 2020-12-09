// ES5 function
const square = function (x) {
    return x * x;
}

console.log(square(8))

// ES6 fat arrow function with a body - verbose
const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(9))

// ES6 function expression as body above is only a single line
const sqrArrow = (x) => x * x;

// Challenge - Get first name
// getFirstName('Mike Smith') -> 'Mike'
// Create verbose function with body
// Create function expression
const getFirstNameVerbose = (fullname) => {
    return fullname.split(' ')[0];
}

console.log(getFirstNameVerbose('Mike Smith'));

const getFirstName = (fullname) => fullname.split(' ')[0];

console.log(getFirstName('James Treacle'));