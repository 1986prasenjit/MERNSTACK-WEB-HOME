//! What are the features that we get in ES-6?
//? 1. Arrow Functions
const arrowFunction = () => console.log("Arrow Function");

//? 2. Template Literals
const wordOne = "Hello";
const wordTwo = "World";
const sentence = `${wordOne} ${wordTwo}`;
//const sentence = wordOne + " " + wordTwo;---> OLDER WAY
//console.log(sentence);

//? 3. Destructuring
const array = [1, 2, 3];
const [a, b, c] = array;
//console.log(a, b, c);

const object = {
  name: "Arif",
  age: 20,
};
const { name, age } = object;
//console.log(age);

//? 4. Classes

class Mobile {
  constructor(modelName, modelIMEI, modelBrand, modelPrice, modelColour) {
    this.modelName = modelName;
    this.modelPrice = modelPrice;
    this.modelBrand = modelBrand;
    this.modelColour = modelColour;
    this.modelIMEI = modelIMEI;
  }
}

const mobileSamsung = new Mobile(
  "Samsung",
  "123456789",
  "Samsung",
  20000,
  "Black"
);

const mobileVivo = new Mobile("Vivo", "123456789", "Vivo", 20000, "Black");

const mobileApple = new Mobile("Apple", "123456789", "Apple", 20000, "Black");

// console.log(mobileSamsung);
// console.log(mobileVivo);
// console.log(mobileApple);

//? 5. Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
    //reject("Promise rejected");
  }, 1000);
});

// promise
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//? 6. Modules
//! How to import and export modules in ES-6?
//? 1. import --> import {add} from "addFunction.js";
//? 2. export --> export const add = (a, b) => a + b;

//? 7. Generators
//Generators are functions that can be paused and resumed. They are used to create iterators.
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generator = myGenerator();

// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: 4, done: false }

//? 8. Spread Operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
//console.log(array3);

const object1 = { name: "John", age: 30 };
const object2 = { city: "New York", country: "USA" };
const object3 = { ...object1, ...object2 };
//console.log(object3);

//? 9. Rest Operator
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//? 10. HOF--> Higher-Order-Function

//Higher-Order-Function is a function that takes one or more functions as arguments or returns a function as its result.

const mapFunction = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

const square = (num)=> num * num

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = mapFunction(numbers, square);
console.log(squaredNumbers);

