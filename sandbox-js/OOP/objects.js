//creating object usual way
var person = {
    firstName: "Andrea",
    lastName: "Kubcova",
    age: 41,
}

console.log(person)

//creating object thru dot notation
var female = {};
female.firstName = "Andrea";
female.lastName = "Kubcova";
female.age = 41;

console.log(female);

//object are mutable, they are adressed by reference

var newFemale = female; //It is NOT a copy of female object it is female object itself
console.log(newFemale);

//change thru reference variable newFemale will change female
newFemale.age = 30;
console.log(female);
console.log(newFemale);

console.log(female.age);

//alternative to dot notation is bracket notation [""]
//property key as a string, so I can use name of property with space or as a number
var house = {};
house["number of rooms"] = 7;
house["price in dollars"] = 15000;
house["outside walls color"] = "green";
house["2023"] = 1993;

console.log(house);

//Bracket notation can evaluate expressions

var listOfSpecs = ["speed", "altitude", "color"]; //array of specifications of drone
var drone = { //object drone, specs are the same as in the array above
    speed: 100,
    altitude: 200,
    color: "red"
}

for (var i = 0; i < listOfSpecs.length; i++) { //loop over each of the values stored inside the drone object, based on each of its specifications in listOfSpecs
    console.log(drone[listOfSpecs[i]])
}



//Object methods

//We can add to object property function!
var car = {};
car.mileage = 101258;
car.color = "red";
console.log(car);

car.turnKey = function() { //function as a property of object, reffered as a method, accessible only in object
    console.log("engine running");
}

car.lightsOn = function() {
    console.log("lights on")
}

console.log(car);
car.turnKey();
car.lightsOn()




