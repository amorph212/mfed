//recursion, avoid infinite loops
function example() {
    console.log("line one");
    console.log("line two");
    console.log("line three");
    example(); // recursion call, this creates infinite loop
}


let counter = 3;
function exampleCounter() {
    console.log(counter);
    counter--; //decrement counter = counter - 1
    if (counter === 0) return; //stops function
    exampleCounter(); //recursion call
}

exampleCounter();




