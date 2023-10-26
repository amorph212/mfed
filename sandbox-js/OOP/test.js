class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
}

var result = new Cake(1);
console.log(result.layers);

class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow"; //not thru parametre
  }
}

var result = new Animal();
console.log(result.noise);


class Person {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();