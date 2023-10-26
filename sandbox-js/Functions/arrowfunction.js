// Arrow function expression is a compact alternative to a traditional function expression
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));

/*
(param1, paramN) => expression

(param1, paramN) => {
  statements
} 
 */


//arrow function on one line
const myArrFunction = (a, b) => a + b + 100;
const a = 4;
const b = 5;
console.log(myArrFunction(a,b));

//arrow function using block
const myArrBlockFunction = (a, b) => {
    return a + b + 100;
}
console.log(myArrBlockFunction(a,b));



