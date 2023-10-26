//Functional programming

var shoesPrice = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoesPrice, stateTax);

console.log(toPay);

//OOP

var purchase1 = {
    shoesPrice: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var toPay = this.shoesPrice * this.stateTax;
        console.log(toPay);
    }
}

purchase1.totalPrice();

var purchase2 = {
    shoesPrice: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var toPay = this.shoesPrice * this.stateTax;
        console.log(toPay);
    }
}

purchase2.totalPrice();
