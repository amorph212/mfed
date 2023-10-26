function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();


class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);

const  [a, b]  =  [1,2,3,4];
console.log(a);
console.log(b);


