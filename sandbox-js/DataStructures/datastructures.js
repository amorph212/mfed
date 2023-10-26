//https://data-flair.training/blogs/javascript-data-structures/
//Array, itereble, ordered values with index

const gradesA = [75, 95, 90, 85, 80, 85];
let gradesAsum = 0;

for (var i = 0; i < gradesA.length; i++) {
    gradesAsum += gradesA[i];
}

console.log(gradesAsum / gradesA.length); // avarage of grades


//Object, non-iterable, collection of key-value pairs
const car = {
    owner: "John",
    color: "red",
    fuel: "gas",
    engineOn: function() {
        console.log("engine is on");
    },
    engineOff: function() {
        console.log("engine is off");
    }
} 

//Map, iterable, key-value pairs
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//get method - to get specific value
console.log(bestBoxers.get(1));


//Set, values must be unique
const house1 = "red";
const house2 = "blue";
const house3 = "red"

const houses = new Set();
houses.add(house1).add(house2).add(house3);
console.log(houses); //misses house3, it is not unique

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits); //fast filtering of unique values
console.log(uniqueFruits);

//Other data structures: Queues,Linked lists, Trees, Graphs
