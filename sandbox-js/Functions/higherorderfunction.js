/*A higher-order function is a function that has either one or both of the following characteristics:
It accepts other functions as arguments
It returns functions when invoked
*/

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}