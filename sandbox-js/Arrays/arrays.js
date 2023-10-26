var train = ["sugar", "salt'", "potato" ];
console.log(train[2]);

function printList(list) {
    for (var i = 0; i < list.length; i++) {
        console.log("This is item", i+1, "of the list:", list[i]+", but it has index", i);
    }
}

var colors = ["red", "green", "yellow", "violet", "purple", "pink"];
printList(colors);

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the", match, "at", i);
        } else {
            console.log("No match found at", i);
        }
    }
}

letterFinder("test", "t");

//arrays are objects with buil-in properities and methods

var fruits = []

//push - add item at the end
fruits.push("apple");
fruits.push("plum");
fruits.push("cherry");
console.log(fruits);

//pop - last item off
fruits.pop();
console.log(fruits);

//Simple array builder

function makeArray(item1, item2, item3, item4, item5) {
    var arr = [];
    arr.push(item1);
    arr.push(item2);
    arr.push(item3);
    arr.push(item4);
    arr.push(item5)
    return arr;
}

var newArray = makeArray("pen","ruler","eraser", "compass", "pencil");
console.log(newArray);
