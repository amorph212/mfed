//JEST example of test

//Here is the function I want to test
function concatStrings(string1, string2) {
    return string1 + string2;
}

console.log(concatStrings("abc", "def"));
console.log(concatStrings(1, 2)); // But i do not want this, I want 12

//Here is test in JEST
expect(concatStrings("abc", "def").toBe("abcdef")); //pass - green
expect(concatStrings(1, 2).toBe(12)); //fail - red


/* 
Conciseness, clarity, repeatability
Stručnost (výstižnost, konkrétnost), přehlednost (jasnost), opakovatelnost
Refactoring - updating the code without affecting the results it produces
Red-green-refactor cycle
*/

/* Test Driven Development (TDD)
1) Write failing test
2) Re-write code to pass
3) Optimize code without changing its results
*/

/* 
e2e testing 
- from the perspective of the end user
- slow and time consuming
- tester does not have to be the developer
- frameworks: WebdriverJS, Protractor, Cypress

Integration testing
- tests how separate parts of the app interacts
- faster, cheaper
- tools: React testing library, Enzyne

Unit testing
- testing of small unit of code in isolation (separately)
- self-contained, fast to run, easy to write
*/

/*Testing pyramid
1) Unit tests
2) Integration tests
3) e2e tests
*/
