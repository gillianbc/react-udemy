// arguments object - no longer bound with arrow functions

//ES5
const add = function ( a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(55, 1))
console.log(add(55, 1, 12))

//ES6
const add2 = (a, b) => {
    // console.log(arguments);  // would cause 'Reference error: arguments is not defined'
    return a + b;
}
// So if you need to use arguments, use an ES5 function rather than an ES6 arrow function.  This is legit.


// this keyword - no longer bound with arrow functions
const user = {
    name: 'Amanda',
    cities: ['Sheffield', 'York'],
    printPlacesLived: function () {
        console.log('Name:' + this.name);  // this.name is in scope
        console.log('Cities lived: ' + this.cities);

        this.cities.forEach(function (city){
            // this.name will cause an error as we are within an anonymous function so name is not in scope
            // console.log(this.name + ' has lived in ' + city)
        })
    }
}

console.log(user.printPlacesLived());

// With arrow functions, we don't have the same problem
const person = {
    name: 'Frances',
    cities: ['Paris', 'Scunthorpe'],
    printPlacesLived: function () {
    console.log('Name:' + this.name);  // this.name is in scope
    console.log('Cities lived: ' + this.cities);

    this.cities.forEach((city) =>{
        console.log(this.name + ' has also lived in ' + city)
    })
}
}

console.log(person.printPlacesLived());

