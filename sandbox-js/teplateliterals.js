/**Traditional ES5, use of single or double quotes
'Hello, World!'
"Hello, World!" **/

/** Template string from ES6, use of backtick
`Hello, World!` 
**/


//Use of traditonal way

/** var greet1 = "Hello";
var place1 = "World";
console.log(greet1 + " " + place1 + "!"); **/

//Use of template literals

let greet2 = "Hello";
let place2 = "World";
console.log(`${greet2} ${place2} !`);

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`); 

//it can span multiple lines
`Hello,
World
!
`

