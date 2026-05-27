//! What is Execution Context?
//? Execution Context is a container for the variables and functions that are in a particular scope.Execution Context is created when a function is called. Execution Context is destroyed when a function is finished executing.


//!What are the Types of Execution Context?
//? 1. Global Execution Context--> Execution Context for Global Scope Variables, Functions and Objects are created in Global Execution Context.


//? 2. Function Execution Context--> Execution Context for Local Scope Variables, Functions and Objects are created in Function Execution Context.


//? Global Varaiables Example
let userName = "MODI";

//? Function Varaiables Example
function sayName() {
    let userName = "Dilip";
    console.log(userName);
}


console.log("Start");

let userNameOne = "Ram";

sayName();
function sayName() {
    let userName = "Arif";
    console.log(userName);
}


console.log("End");