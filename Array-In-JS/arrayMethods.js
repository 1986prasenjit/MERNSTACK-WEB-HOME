//What is an Array?
//An array is a collection of elements of the different data types. It is a list of values.We can store multiple values in a single variable and we can access them by their index number. Index number starts from 0. Array is a collection of data store in a contiguous memory location.

// let arr = [45, "str", true, null, undefined, [1, 2, 3], { name: "Arif" }, function () {}];

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 3, 4, 10, 6, 8, 7, 9, 10];

//Array Methods
//1. length
//console.log(numberArray.length); //Length is not a Method of Array its a Property

//2. push
//numberArray.push(6);
//console.log(numberArray);// It pushes the value to the end of the array and if we console.log it will return the new length of the array

//3. pop
//numberArray.pop();
//console.log(numberArray);// If we pop the value from the end of the array and if we console.log(numberArray.pop()) it will return the value which is popped

//4. shift
//numberArray.shift();
//console.log(numberArray);// If we shift the value from the start of the array and if we console.log(numberArray.shift()) it will return the value which is shifted

//5. unshift
//numberArray.unshift(0);
//console.log(numberArray);// If we unshift the value from the start of the array and if we console.log(numberArray.unshift(0)) it will return the new length of the array

//6. splice
//numberArray.splice(4, 1, 55);
//console.log(numberArray);
//What does Splice do?
//Splice is used to add or remove elements from an array.
/*
    1️⃣ start → where to begin (index)
    2️⃣ deleteCount → how many items to remove
    3️⃣ item(s) → what to add at that position

This method modifies the original array and can remove, add, or replace elements.

*/

//7. slice
//let slicedArray = numberArray.slice(2, 6);
//console.log(slicedArray);
/*
    1️⃣ start → where to begin (index)
    2️⃣ end → where to end (index)
    Slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end is not included) where start and end refer to the index numbers.
*/

//8. indexOf
//let index = numberArray.indexOf(10);
//console.log(index);


//9. lastIndexOf
//let lastIndex = numberArray.lastIndexOf(10);
//console.log(lastIndex);

//what is the difference between indexOf and lastIndexOf?
//indexOf returns the index of the first occurrence of the specified value in the array, or -1 if it is not found.
//lastIndexOf returns the index of the last occurrence of the specified value in the array, or -1 if it is not found.


//10. join
// let joinedArray = numberArray.join(" ");
// console.log(typeof joinedArray);


//11. reverse
// numberArray.reverse();
// console.log(numberArray);


//12. sort
// const sortedArray = numberArray.sort((a,b)=> a - b);
// console.log(sortedArray);
/*
    Actually when SORT is used it considered the array as a string and SORT it as a string in a lexicographical order and if we want to sort it as a number then we have to use the compare function
*/



//13. concat
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// console.log(array3);


//14. forEach
//15. map
//16. filter
//17. reduce



//18. find
let newArray = [10, 2, 5, 4, 55,]
 let result = newArray.find((item) => item > 15);
 console.log(result);
/*
    What does find do?
    Find returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

*/


//19. findIndex
//20. some
//21. every
//22. includes
