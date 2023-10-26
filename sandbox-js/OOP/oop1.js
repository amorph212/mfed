//this is object
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() { //this is method of object
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total price: ", calculation);
    }
}

purchase1.totalPrice(); //calling method of object, dot notation
console.log(purchase1.shoes); //calling data of object,  dot notation

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = this.shoes * this.stateTax; //this for data in THIS object purchase2
        console.log("Total price: ", calculation);
    }
}

purchase2.totalPrice(); //calling method of object, dot notation