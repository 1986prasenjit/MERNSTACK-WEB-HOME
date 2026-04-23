Map Method

The map method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.

Example:
Given an array arr = [1, 2, 3, 4, 5], applying map with item => item * item will return a new array [1, 4, 9, 16, 25]. The original arr remains unchanged.

let arr = [1, 2, 3, 4, 5];
let returnVal = arr.map(item => item * item);
console.log(returnVal); // Output: [1, 4, 9, 16, 25]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array unchanged)

Filter Method

The filter method creates a new array with all elements that pass the test implemented by the provided function. Like map, it does not modify the original array.

Example:
Given an array numArr = [1, 2, 3, 4], applying filter to get only odd numbers (item => item % 2 !== 0) will return a new array [1, 3]. The original numArr remains unchanged.

let numArr = [1, 2, 3, 4];
let filteredArr = numArr.filter(item => item % 2 !== 0);
console.log(filteredArr); // Output: [1, 3]
console.log(numArr); // Output: [1, 2, 3, 4] (original array unchanged)

Reduce Method

The reduce method executes a reducer function on each element of the array, resulting in a single output value. It's often used to sum up values or flatten an array.

Example:
To calculate the total value of items in a shopping cart: totalCardValue = [100, 200, 30000, 400, 30, 80]. The reduce method can sum these values.

let totalCardValue = [100, 200, 30000, 400, 30, 80];
let reducedValue = totalCardValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reducedValue); // Output: 30810

Understanding reduce parameters:





accumulator: The value resulting from the previous callback invocation, or the initial value if provided.



currentValue: The value of the current element being processed in the array.



initialValue: An optional value to use as the first argument to the first call of the callbackFn. If initialValue is not provided, the first element of the array is used as the accumulator, and the currentValue starts from the second element.

If initialValue is 0, the first iteration will be 0 + 100 = 100. The accumulator then becomes 100 for the next iteration.
If initialValue is not provided, the accumulator starts with 100, and the currentValue starts with 200, so the first operation is 100 + 200 = 300.

ForEach Method

The forEach method executes a provided function once for each array element. It does not return a new array and is primarily used for side effects, such as logging values or modifying external variables.

Example:
To log each item in an array:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(item => console.log(item));

forEach can also be used with conditional logic inside the callback:

arr.forEach(item => {
  if (item % 2 === 0) {
    console.log(`${item} is an even number`);
  }
});

Higher-Order Functions

A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. In JavaScript, functions are first-class citizens, meaning they can be treated like any other variable.

Why use Higher-Order Functions?





Code Reusability: Promotes writing generic functions that can be applied to various tasks.



Cleaner Code: Leads to more declarative and readable code.



Less Code: Often reduces the amount of boilerplate code needed.



Powerful Logic: Enables complex logic by composing functions.



Functional Programming Style: Supports a functional programming paradigm.

Examples of Higher-Order Functions in JavaScript:





map



filter



reduce



forEach

Analogy:
Think of a normal worker who does their own tasks. A manager, on the other hand, delegates tasks to other workers. Higher-order functions are like the manager function—they operate on other functions.

Key Takeaway: In JavaScript, functions are first-class citizens, allowing them to be passed as arguments to other functions or returned from them. This power enables the creation of higher-order functions.