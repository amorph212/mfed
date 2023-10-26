
//Implementation of console.log with return value (no undefined)

function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog("Hello");

function doubleIt(num) {
    return num * 2
}

console.log(doubleIt(10));
doubleIt(10).toString();

//object maker

function objectMaker(val1, val2) {
    return {
        prop: val1,
        prop2: val2
    }
}

console.log(objectMaker(20,40));

//return value from doubleIt used in objectMaker

console.log(objectMaker(doubleIt(100), 300));