//What is Promise in JavaScript?
//Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation. Promise is a way to handle asynchronous operations in JavaScript.

//What are the three states of a Promise in JavaScript?
//The three states of a Promise in JavaScript are pending, fulfilled, and rejected.

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//     //reject("Promise rejected");
//   });
// });

// //Example of Promise.any()
// promiseOne
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));


// const p2 = Promise.reject("Error 1");
// const p3 = new Promise((resolve) => setTimeout(resolve, 50, "Second Success P2"));
// const p1 = new Promise((reject) => setTimeout(reject, 100, "Error for P1"));

// Promise.any([p1, p2, p3])
//   .then((value) => console.log(value)) // Output: "First Success"
//   .catch((err) => console.log(err.errors)); 


