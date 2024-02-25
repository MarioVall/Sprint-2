//Exercise 1


add = (a,b) => a + b;

console.log(add(3,5));




//Exercise 2


randomNumber = () => Math.floor(Math.random() * 100);

console.log(randomNumber());



//Exercise 3


class Person {
    constructor (name) {
        this.name = name;
    }
    greet = () => {console.log(`Hola, ${this.name}!!!`)};
}


const person1 = new Person("Mario");
const person2 = new Person("Dani");


person1.greet();
person2.greet();