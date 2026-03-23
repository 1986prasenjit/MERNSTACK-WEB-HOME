console.log("Connected");

//!Varaibles in JavaScript

//!Varaibles --> Variables are containers for storing data values.

//!Rules for naming variables-->
//1. A variable name can only contain letters, numbers, underscores. let name_8 = "John";--> Valid
//2. A variable name cannot start with a number. let 8 = "John";--> Invalid
//3. A variable name should be descriptive. let userName = "John";--> Valid
//4. A variable name should be case-sensitive.let Name = "John"; let name = "john";--> the upperCase variable is different from the lowerCase variable.

//!In how many ways can you declare a variable in JavaScript?

//1. let name = "John";
//2. let name;
//3. var name = "John";
//4. const name = "John";

//!How many keywords are there in JavaScript?
//let, const, var, function, if, else, for, while, switch, try, catch, finally, break, continue, return, throw.

//--> VAR is Functional Scope
//var userName = "John Doe";
// function sayName() {
//     var userName = "Arif";
//     console.log(userName);
// }
// sayName();

let userNameOne = "John"; //--> LET is Block Scope

if (true) {
  let userNameOne = "Arif";
  //console.log(userNameOne);
}
//console.log(userNameOne);

const userNameTwo = "John"; //--> CONST is Block Scope
if (true) {
  const userNameTwo = "Arif";
  //typeof console.log(userNameTwo);
}
//console.log(userNameTwo);


//let name = "John"; -->This is valid
//let name;--> This is valid
//name = "Arif"; --> This is valid
//let name = "Arif"; --> This is not valid, it will throw an error because the variable name has already been declared.


//const name = "John"; -->This is valid
//const name;--> This is not valid it will throw an error because we have to assign a value to the variable while declaring it with const keyword
//name = "Arif"; --> This is not valid, it will throw an error because reassigning a value to a const variable is not allowed
//const name = "Arif"; --> This is not valid, it will throw an error because the variable name has already been declared.



//Data Types in JavaScript--> 1) Primitive Data Types 2) Non-Primitive Dtat types[Reference Data Types]
//Primitive Data Types

//1. String
let userName = "John";
console.log(typeof userName);

//2. Number
let number = 123;
console.log(typeof number);

//3. Boolean
let isLogged = true;
console.log(typeof isLogged);

//4. Null
let user = null;
console.log(typeof user);

//5. Undefined
let user1 = undefined;
console.log(typeof user1);

//6. Symbol
let symbol = Symbol();
console.log(typeof symbol);

//7. BigInt
let num = 12345678901234567890123456789012345678901234567890123456789012345678901234567890n;
console.log(typeof num);


//Non-Primitive Data Types
//1. Object
let objOne = {
    name: "John",
    age: 30,
}
console.log(typeof objOne);

//2. Array
let arr = ["John", "Doe", "Arif", 1, 2, 3, true, false, null, undefined];
console.log(typeof arr);

//3. Function
function add(a, b) {
    return a + b;
}
console.log(typeof add(5,6)); //--> This will print 11


