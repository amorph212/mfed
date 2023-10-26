//ES5 Strings

let noMultiLine = "No multi-line strings in ES5";
console.log("Do you know? " + noMultiLine);

//ES6 Template Strings

let multiLine =`
    Using ES6
    backticks,
    multi-line
    strings are
    possible"
`;
 console.log(multiLine);

 //Combination with special characters which are used by escape seqm like single or double quutation or curly braces

 let first = `He said, "Do you know? ES6 got some great features!"`;
 let second = `"Wouldn't you want to learn more?", he asked.`;
 console.log(`${first} - and I got curious. ${second}}`);