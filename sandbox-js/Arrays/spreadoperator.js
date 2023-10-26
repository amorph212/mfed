//Spread operator ... allows to pass all array elements into a function without having to type them all individually
//not only as a parametres of functions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
];

console.log("\nTop 3 places in Rome: ")

function showItinerary3(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " +place2);
    console.log("Finish with a visit to " +place3);
}

showItinerary3(top3[0], top3[1], top3[2]); //this is individual listing of array
showItinerary3(...top3); //this is the same result using spread operator


let top7 = [
    "The Colosseum",
    "Trevi Fountain",
    "Pantheon",
    "Forum Romanum",
    "St. Peter's Basilica",
    "Vatican Museums with Sistine Chapel",
    "Castel Sant’Angelo"
];

console.log("\nTop 7 places in Rome: ")

function showItinerary7(place1, place2, place3, place4, place5, place6, place7) {
    console.log("Visit " + place1);
    console.log("Then visit " +place2);
    console.log("After that visit " +place3);
    console.log("Then visit " +place4);
    console.log("After that visit " +place5);
    console.log("Then visit " +place6);
    console.log("Finish with a visit to " +place7);
}

showItinerary7(...top7);

//Convert a string to an array using spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

//Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};
car1.speed = 201;
console.log(car1.speed, car2.speed);

//Copy an array into a completely separate array
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);