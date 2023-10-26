//Try this in http://www.example.com using devtools of browser

//h1 to variable
let h1 = document.querySelector("h1");

//array of values
let arr = ["Example Domain","First Click","Second Click","Third Click"];

//function handle the click
function handleClick () {
    switch (h1.innerText) {
        case arr[0]: 
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    } 
}

//event listener clicking
h1.addEventListener('click', handleClick);
