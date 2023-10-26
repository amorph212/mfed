//For error handling

try {

    console.log(c+d); //here is ReferenceError

} catch(err){
    console.log(err);
}

console.log("This line runs"); //this runs after all


try {

    throw new ReferenceError();

} catch(error){
    console.log(error);
}

console.log("This line runs"); //this runs after all

