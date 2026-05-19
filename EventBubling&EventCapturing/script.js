//What is Event Bubling and Event Capturing?
//Event Bubling and Event Capturing are two different ways of handling events in JavaScript.

//What is Event Bubling?
//Event Bubling is a concept in JavaScript where events are propagated from the target element to its ancestors in the DOM tree. This is done by default in JavaScript.

//What is Event Capturing?
//Event Capturing is a concept in JavaScript where events are propagated from the target element to its descendants in the DOM tree. This is done by default in JavaScript.

const containerElem = document.getElementById("container");
const childElem = document.getElementById("child");
const grandchildElem = document.getElementById("grandchild");
const btnElem = document.getElementById("btn");

// containerElem.addEventListener("click", function () {
//     console.log("Container Clicked");
// },true);

// childElem.addEventListener("click", function () {
//     console.log("Child Clicked");
// },true);

// grandchildElem.addEventListener("click", function () {
//     console.log("Grandchild Clicked");
// },true);

// btnElem.addEventListener("click", function () {
//     console.log("Button Clicked");
// },true);

// containerElem.addEventListener("click", function () {
//     console.log("Container Clicked");
// });

// childElem.addEventListener("click", function () {
//     console.log("Child Clicked");
// });

// grandchildElem.addEventListener("click", function () {
//     console.log("Grandchild Clicked");
// });

// btnElem.addEventListener("click", function () {
//     console.log("Button Clicked");
// });