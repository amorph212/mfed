//run this in devtools in browser

const jsonStr = '{"greeting":"hello"}'; //JSON object
jsonStr;
jsonStr.greeting = "howdy"; // It does not work!!! JSON must be parsed to boject to change the values of properities
JSON.parse(jsonStr); //convert JSON object to a regular JS object
const aPlainObject = JSON.parse(jsonStr);
aPlainObject;
aPlainObject.greeting = "hi"; // changing the value of property of regular JS object
aPlainObject;

const data = {
    firstName: "John",
    secondName: "Doe",
    greeting: "Hello"
};

const jsonData = JSON.stringify(data); //convert regular JS object to JSON object