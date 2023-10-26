//JSON is just a string, but it must be a properly-formatted string
/* 
primitive values: strings, numbers, bolleans, null
complex values: objects and arrays (no functions!)
objects have double-quoted strings for all keys
properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code
*/

//String properties must be surrounded in double quotes.
"fruits",
"vegetables"

//Number properties are represented using the regular JavaScript number syntax
5
5.2

//Boolean properties are represented using the regular JavaScript boolean syntax
true
false

//Null as a property is the same as in regular JavaScrip
null

//JSON object, with single key-value pair
'{"color":"red"}' 

//JSON object, with key-value pair, nested oject, two preperties
'{"color":"red", "nestedObject": { "color": "blue" } }' 


//JSON array
'["one", "two", "three"]'

//JSON array with objects
'[{ "color": "blue" }, {"color: "red"}]'




