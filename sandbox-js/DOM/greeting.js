//This is example of JS module which is imported to html file

export const informalGreeting = (person) => {
    console.log(`Hello,  ${person}`);
}

export const formalGreeting = (person) => {
    console.log(`Goog day,  ${person}`);
}

export const greeting = () => {
    console.log(`Howdy!`);
}

export default greeting;