//Rest operator - allows to take items from an array and use them to create a separate sub-array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

const top7 = [
    "The Colosseum",
    "Trevi Fountain",
    "Pantheon",
    "Forum Romanum",
    "St. Peter's Basilica",
    "Vatican Museums with Sistine Chapel",
    "Castel Sant Angelo"
];

const [] = top7;
const [first, second, third, ...secondVisit] = top7; //four variables The Colosseum, Trevi Fountain, Pantheon and secondVisit (array of leftovers)

function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item) //map each array item over to another array's item
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart);

//Join arrays using the rest operator
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

//Join object using the rest operator
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//Add a new member like push()
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);