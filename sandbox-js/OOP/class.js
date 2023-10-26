//Making a Class

class Car { //capital letter in the name of class
    constructor(color, speed) { //pass in parametres
        this.color = color;
        this.speed = speed;
    }

    turboOn() { //method, no function keyword!!!
        console.log("turbo is on!");
    }
}

const car1 = new Car("red", 120); //new instance of class Car
//var car1 = Object.create(Car)  //this is instance made of using super class Object, objects exist in a hierarchal structure supec class for everything.
car1.turboOn();
console.log(car1.color);
console.log(car1.speed);

//The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism

//INHERITANCE
class Animal { /* ...class code here... */ } //super class
class Bird extends Animal { /* ...class code here... */ } //class Bird inherits from Animal
class Eagle extends Bird { /* ...class code here... */ } //class Eagle inherits from Bird which inherits from Animal

//ENCAPSULATION / making a code implementation "hidden"
"abc".toUpperCase();
console.log("abc".toUpperCase()); //I don´t know how toUpperCase Cmethods work, it's implemented in the code of JS

//ABSTRACTION is all about writing code in a way that will make it more generalized


//POLYMORPHISM something that can take on many shapes

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell());
}

ringTheBell(bicycle); //same function producing different results, based on the context 
ringTheBell(door); //same function producing different results, based on the context 

//If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator. 
console.log("abc".concat("def"));
console.log("abc"+"def");

//But not the same, if i use it on arrays, polymorfism it is
console.log(["abc"].concat(["def"])); // ['abc', 'def']
console.log(["abc"] + ["def"]); // ["abcdef"])