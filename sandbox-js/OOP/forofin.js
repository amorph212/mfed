// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDiary() {
    for (prop of dairy) { // loop of for array
    console.log(prop);
    }
}

logDiary();

// Task 2

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
   for (prop of Object.keys(bird)) { // loop of for object only not prototyte
    console.log(prop + ": " + bird[prop]);
    }
}

birdCan();

// Task 3

function animalCan() { 
   for (prop in bird) { // loop in for prototype and object
    console.log(prop + ": " + bird[prop]);
    }
}

animalCan();

