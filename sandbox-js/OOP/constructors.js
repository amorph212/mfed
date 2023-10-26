/* built-in object types, such as:
Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON */

var date = new Date(); //constructor of date
console.log(date);

//console.log(new Error());
//console.log(new Map());
//console.log(new Promise());
//console.log(new Set());
//console.log(new WeakSet());
//console.log(new WeakMap());

console.log(Math.pow(2,5)); //no need to build an instance of the Math

//Building own constructor

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

//this is a String object
let apple = new String("apple");
apple; // --> String {'apple'}
console.log(apple);

//pear variable is a string literal a primitive Javascript value
let pear = "pear";
pear; // --> "pear"
console.log(pear);

/* Instead of using new Array, new Function, and new RegExp constructors, 
you should use their literal varieties: [], () {}, and /()/. 
Array is []
Function is ()
Object is {}
RegExp is match (pattern-match strings) */




