//Strings are array-like but not array, not possible to use array method like push or pop
var letters = "Howdy";
for (var i = 0; i < letters.length; i++) { //looping thru string
    console.log(letters[i]);
}

var greet = "Hello ";
var user = "Andy";

//Array methods
console.log(greet.length); //length of string
console.log(greet.concat(user)); //joins strings
console.log(greet.charAt(4)); //reads character at index
console.log("this is string".indexOf("s")); //index of first position of character
console.log("this is string".lastIndexOf("s")); //index of last position of character
console.log("this-is-string".split("-")); //split into sub-strings into array
console.log(user.toUpperCase()); //uppercase string
console.log(user.toLowerCase()); //lowercase string


