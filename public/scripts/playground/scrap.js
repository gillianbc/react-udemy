'use strict';

// arguments object - no longer bound with arrow functions

//ES5
var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));
console.log(add(55, 1, 12));

//ES6
var add2 = function add2(a, b) {
    // console.log(arguments);  // would cause 'Reference error: arguments is not defined'
    return a + b;
};
// So if you need to use arguments, use an ES5 function rather than an ES6 arrow function.  This is legit.


// this keyword - no longer bound with arrow functions
var user = {
    name: 'Amanda',
    cities: ['Sheffield', 'York'],
    printPlacesLived: function printPlacesLived() {
        console.log('Name:' + this.name); // this.name is in scope
        console.log('Cities lived: ' + this.cities);

        this.cities.forEach(function (city) {
            // this.name will cause an error as we are within an anonymous function so name is not in scope
            // console.log(this.name + ' has lived in ' + city)
        });
    }
};

console.log(user.printPlacesLived());

// With arrow functions, we don't have the same problem
var person = {
    name: 'Frances',
    cities: ['Paris', 'Scunthorpe'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log('Name:' + this.name); // this.name is in scope
        console.log('Cities lived: ' + this.cities);

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has also lived in ' + city);
        });
    }
};

console.log(person.printPlacesLived());
