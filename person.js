// const person = {
//     name: 'Rafi',
//     age: 30
// }

// module.exports = person;

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log(`My name is ${this.name} & My age is ${this.age}`);
    }
}

module.exports = Person; 
