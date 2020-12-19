class Person {
    constructor(age = 'unknown',name = 'Anon') {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi ${this.name}`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}

const me = new Person('Gillian', 55)
console.log(me)

const andrew = new Person()
console.log(andrew)

console.log(me.getGreeting())
console.log(andrew.getGreeting())

console.log(me.getDescription())
console.log(andrew.getDescription())