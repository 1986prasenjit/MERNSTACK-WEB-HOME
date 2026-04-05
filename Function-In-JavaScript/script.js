//! What are Functions in JavaScript?
//? Functions are blocks of code that perform a specific task.Functions are used to break down complex tasks into smaller, more manageable parts.Functions are used to reuse code.Functions are used to improve code readability and maintainability. 

//? How to create a function in JavaScript?
//? function functionName(parameters) {
//?     code to be executed
//? }
//? functionName(arguments);

//? How to call a function in JavaScript?
//? functionName(arguments);


//? How to return a value from a function in JavaScript?
//? function functionName(parameters) {
//?     return value;
//? }
//? functionName(parameters);


// function sayName(userName) {
//     console.log(`Hello Good Morning ${userName}`);
// }
// sayName("Bittu");

//! Function Expression
// let sayName = function (userName) {
//     console.log(`Hello Good Morning ${userName} from function Expression`);
// }
// sayName("Bittu");


//! Arrow Function
let sayName = (userName) => {
    console.log(`Hello Good Morning ${userName} from Arrow Function`);
}
sayName("Bittu");



