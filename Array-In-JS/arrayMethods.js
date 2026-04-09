//What is an Array?
//An array is a collection of elements of the different data types. It is a list of values.We can store multiple values in a single variable and we can access them by their index number. Index number starts from 0. Array is a collection of data store in a contiguous memory location.

// let arr = [45, "str", true, null, undefined, [1, 2, 3], { name: "Arif" }, function () {}];

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
numberArray.splice(3);
console.log(numberArray);
//What does Splice do?
//Splice is used to add or remove elements from an array.

//7. slice
//8. indexOf
//9. lastIndexOf
//10. join
//11. reverse
//12. sort
//13. concat
//14. forEach
//15. map
//16. filter
//17. reduce
//18. find
//19. findIndex
//20. some
//21. every
//22. includes
