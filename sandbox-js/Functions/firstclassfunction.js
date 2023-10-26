/* function in JavaScript is just a value, almost no different then a string or a number.
we can:
pass to other functions
save in a variable
return from other functions
*/

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1); //random number between 0 - 10, rounded down by floor
}

function specificNum() { 
    return 42; 
}

var useRandom = false;
var getNumber;

if(useRandom) {
    getNumber = randomNum;
} else {
    getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber())