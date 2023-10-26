//truthy

if (true) {
    console.log("true");
}
if (false) {
    console.log("true");
}

if ({}) {
    console.log("true");
}
if ([]) {}
{
    console.log("true");
}
if (42) {
    console.log("true");
}
if ("0") {
    console.log("true");
}
if (new Date()) {
    console.log("true");
}
if (-42) {
    console.log("true");
}
if (12n) {
    console.log("true");
}
if (3.14) {
    console.log("true");
}
if (-3.14) {
    console.log("true");
}
if (Infinity) {
    console.log("true");
}
if (-Infinity) {
    console.log("true");
}
if (true && "dog") {
    console.log("true");
}
if ([] && "dog") {
    console.log("true");
}

//falsy
if (null){
    console.log("true");
} else {
    console.log("false")
}
if (undefined){
    console.log("true");
} else {
    console.log("false")
}
if (0){
    console.log("true");
} else {
    console.log("false")
}
if (-0){
    console.log("true");
} else {
    console.log("false")
}
if (0n){
    console.log("true");
} else {
    console.log("false")
}
if (NaN){
    console.log("true");
} else {
    console.log("false")
}
if (""){
    console.log("true");
} else {
    console.log("false")
}

console.log(false && "dog");
