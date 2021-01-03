class Person {
    constructor(name = 'Anon', age = 'unknown') {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, I am ${this.name}`
    }
    // Get a description of the person - name and age
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    // override the parent constructor to add in the extra properties for Students
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major
    }

    // get a description of the student
    getDescription() {

       let description = super.getDescription();
       this.hasMajor() && (description += ` majoring in ${this.major}.`);
       return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting();
        this.hasHomeLocation() && (greeting += `. I am visiting from ${this.homeLocation}.`);
        return greeting;
    }
}

const me = new Student('Gillian', 55, 'Maths')
console.log(me)
console.log('Gillian has major', me.hasMajor())
console.log('Plain student has major', new Student().hasMajor())
console.log(me.getDescription()) //Gillian is 55 year(s) oldSyntax majoring in Maths.
console.log(new Student().getDescription()) //Anon is unknown year(s) oldSyntax

const julie = new Traveller('Julie', 23, 'Derby');
const  derek = new Traveller('Derek', 68);
console.log(julie.getGreeting())
console.log(derek.getGreeting())