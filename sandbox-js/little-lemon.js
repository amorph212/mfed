// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let val of Object.values(dishData)) {
        let finalPrice;
        if (taxBoolean == true) {
            finalPrice = val.price * tax;
        } else if (taxBoolean == false) {
            finalPrice = val.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log("Dish: " + val.name + " Price: $" + finalPrice);
    }  
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    let guestsType = typeof(guests) == "number";
    let guestsRange = guests > 0  && guests < 30 ;
        if (guestsType && guestsRange) {
            let discount = 0;
                if (guests < 5) {
                    discount = 5;
                } else if (guests >= 5) {
                    discount = 10;
                } 
            console.log('Discount is: $' + discount);
        } else {
            console.log("The second argument must be a number between 0 and 30");
        }   
}

// Call getDiscount()
getDiscount(true, 4);
getDiscount(false, 10);
getDiscount(true, 40);
getDiscount(false, 50);