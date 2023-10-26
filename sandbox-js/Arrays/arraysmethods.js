//Buil-in methods for arrays

//forEach -  loop over each of members of array

const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) { 
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex); //calling function used as parametre in forEach method

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) { //function declared inside of forEach method
    console.log(`${index}. ${veggie}`);
})

//filter - it filters arrays based on a specific test
const nums = [0,10,20,30,40,50];
console.log(nums.filter( function(num) {
    return num > 20; //[30,40,50]
}))

//map - map each array item over to another array's item

console.log(nums.map( function(num) {
    return num / 10; //[0,1,2,3,4,5]
}))
