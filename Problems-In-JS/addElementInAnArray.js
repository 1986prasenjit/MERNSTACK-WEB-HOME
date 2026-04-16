//Write a function to add an element to the end of an array.

function addElementInAnArray(array, element) {
    array.push(element);
    return array;
}

let arr = [1, 2, 3, 4, 5];
console.log(addElementInAnArray(arr, 6));