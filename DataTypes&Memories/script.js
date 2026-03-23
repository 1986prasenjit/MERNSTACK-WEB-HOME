//How many Data Types in JavaScript--> 1. Primitive Data Types 2. Non-Primitive Data Types

//Primitive Data Types are called by Value
//1. String
//2. Number
//3. Boolean
//4. Null
//5. Undefined
//6. Symbol
//7. BigInt

//Non-Primitive Data Types are called by Reference
//1. Array
//2. Object
//3. Function

let userName = "John";

let nameTwo = userName;

nameTwo = "Arif";
//console.log(userName);
//console.log(nameTwo);

let obj = {
    userName:"John",
    age:20
}

let objTwo = obj;

objTwo.userName = "Arif";
objTwo.age = 22;


console.log(obj);
console.log(objTwo);