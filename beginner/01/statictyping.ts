let first = "Alice"; //inferred as a string
let age = 72; // inferred as a number
let activeMember = true; // inferred as a boolean

// Allowed
first = "Chris";
// Not Allowed
// first = 123;


// Type Annotation
let first2: string = "Chris";
let age2: number = 27;
let activeMember2: boolean = true;

// Type Information in Functions
// A function accepts a string and boolean then returns a number.
function simpleFunction(name: string, isActive: boolean): number {
    return 0;
}

let ex = simpleFunction(first2, activeMember2);


function createMessage(name: string) { // no explicit return type
    return "Hello, " + name;
}

let result = createMessage(first2);