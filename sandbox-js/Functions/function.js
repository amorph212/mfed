
//standart declaration of function, a and b are parameters
function addTwoNums(a,b){ 
    return a + b;
}

//invoke (call) the function
console.log(addTwoNums(10,20));

//function can be stored as a variable
const add = function (a, b) {return a + b} 
let cal = add(7,3); //function can be used as values
console.log(cal);

//in JS there is constructor for functions
const div = new Function ("a", "b", "return a / b"); 
let cal1 = div(7,3); //function can be used as values
console.log(cal1);




