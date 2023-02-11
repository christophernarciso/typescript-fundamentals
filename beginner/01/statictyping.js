"use strict";
let first = "Alice"; //inferred as a string
let age = 72; // inferred as a number
let activeMember = true; // inferred as a boolean
// Allowed
first = "Chris";
// Not Allowed
// first = 123;
// Type Annotation
let first2 = "Chris";
let age2 = 27;
let activeMember2 = true;
// Type Information in Functions
// A function accepts a string and boolean then returns a number.
function simpleFunction(name, isActive) {
    return 0;
}
let ex = simpleFunction(first2, activeMember2);
function createMessage(name) {
    return "Hello, " + name;
}
let result = createMessage(first2);
