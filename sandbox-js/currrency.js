/** Functional programming
 * In functional programming, data and functions that operate 
 * on it are clearly separated, not combined inside objects. 
 * Opposite is OOP**/

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);