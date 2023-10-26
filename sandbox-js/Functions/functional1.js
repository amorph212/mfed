const add = (a, b) => a + b;
console.log(add(2,4));

const SECRET = 42;
console.log(SECRET);

const getId = (a) => SECRET * a; //definion of fucntion in different way
console.log(getId(2));

function calculate (a) { //definion of same function as above
    console.log(getId(2));
    console.log(SECRET * a);
}

calculate(2);