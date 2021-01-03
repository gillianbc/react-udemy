// To run this example:
// make sure entry in webpack.config.js is pointing to this file and output is bundle.js
// make sure index.html is using script bundle.js (bundle.js is in memory only, not on disk)
// make sure .babelrc has "plugins": [ "transform-class-properties"]
// run the build script i.e. "build": "webpack"
// run the server i.e. "dev-server": "webpack-dev-server"

console.log('Demonstrates what we can do with the .babelrc plugin transform-class-properties')

// To define an instance property, we had to create a constructor
class OldSyntax {
    constructor() {
        this.name = 'Mike'
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
         return `Hi, old name is ${this.name}`
    }
}

const oldSyntax = new OldSyntax()
console.log(oldSyntax)
console.log(oldSyntax.getGreeting())  // This works fine as we're calling the instance method directly
const greet = oldSyntax.getGreeting;
console.log(greet()) // This only works because we have bound 'this' to getGreeting() in the constructor

// Now with the plugin, we can just define the instance property, similar to how we do it in java
class NewSyntax {
    name = 'Ann';
    getGreeting = () => {
        return `Hi, new name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax()

console.log(newSyntax)
console.log(newSyntax.getGreeting())  // This works fine as we're calling the instance method directly
const greet2 = newSyntax.getGreeting;
console.log(greet2)
console.log(greet2()) // This works too - we've used an arrow function which has no 'this' of it's own so it uses the instance's 'this'


