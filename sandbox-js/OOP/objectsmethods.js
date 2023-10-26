//Convert an object to an array

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(drone);
console.log(result);

//Object.keys() -  returns an array listing keys
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));


//Object.values() - returns an array listing values
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

//Object.entries() - returns an array listing both the keys and the values
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));