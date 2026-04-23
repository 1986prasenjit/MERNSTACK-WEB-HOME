//What is a higher order function in JavaScript and how does it work?
//A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result. In other words, a higher-order function is a function that operates on other functions, either by taking them as arguments or by returning them as its result. 

//What are the three main types of higher-order functions in JavaScript?
//The three main types of higher-order functions in JavaScript are map, filter, and reduce.

//Bangla thea explain kori Higher-Order-Function(HOF)
// Higher Order Function (HOF) in JavaScript holo emon ekta function je function onno function ke parameter hisebe ney, ba onno function return kore.

// Simple kore bolle:

// 👉 JavaScript e function ke variable er moto use kora jai.
// Tai ekta function arekta function niye kaaj korte pare. Eitai Higher Order Function.

// Easy Definition

// A higher-order function is a function that:

// ✅ Takes another function as an argument
// or
// ✅ Returns another function


// Keno Use Kori?

// ✅ Code reusable hoy
// ✅ Cleaner hoy
// ✅ Less code lage
// ✅ Powerful logic likhte pari
// ✅ Functional programming style hoy

// Simple Bengali Example
// Dhoro:
// Normal worker = nijer kaaj kore
// Manager = onno worker der diye kaaj koray

// 👉 Normal Worker = Worker
// 👉 Higher Order Function = Manager Function



//MAP, FILTER, REDUCE

//What does map do?
//The map method creates a new array populated with the results of calling a provided function on every element in the calling array. Map does not modify the original array.

let arr = [1, 2, 3, 4, 5];
let returnedValue = arr.map((item) => item * item);
// console.log(returnedValue);
// console.log(arr);

//What does filter do?
// The filter method creates a new array filled with elements that pass the test implemented by the provided function. The filter method does not modify the original array.

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = numArray.filter((item) => item % 2 !== 0);

//console.log(filteredArray);
//console.log(numArray);

//What does reduce do?
//The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let totalCartValue = [100, 200, 30000, 500, 40000];

let reducedValue = totalCartValue.reduce(
  (accumulator, currentValue) => accumulator + currentValue);
// console.log(reducedValue);
// console.log(totalCartValue);



//What does forEach do?
//The forEach method executes the provided function once for each array element.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach((item) => {
    if (item % 2 !== 0) {
        console.log(item);
    }
});