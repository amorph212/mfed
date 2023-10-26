//For of loop cannot work on a object directly, since object is not iterable, we need special methods
//Object.keys(), Object.values(), and Object.entries() which can transform keyes and values to an array

//Arrays are itereable
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

//Object itself is not iterable
const car = {
    engine: true,
    steering: true,
    color: "red",
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
sportsCar.color = "yellow";
console.log("The sportscCar object: ", sportsCar);

//For in loop, for in for prototype and object
console.log("---- for in is unreliable ----");
for (prop in sportsCar) {
    console.log(prop);
}

console.log("Iterating over object AND its prototype!");

//For of loop
console.log("---- for of is reliable ----");
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}

console.log("Iterating over object's OWN PROPERTIES only!");





