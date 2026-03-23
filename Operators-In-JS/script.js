//* What are Operators in JavaScript?
//? Operators are used to perform mathematical or logical operations on values and variables.
//? Operators are symbols that are used to perform operations on values and variables.
//? Operators are used to assign values to variables, perform mathematical operations, perform logical operations, and perform other operations.


//? Arithmetic Operators
//Addition + and Addtion is also used to concatenate strings in JavaScript
 2 + 2 //4

//Subtraction -
5 - 2 //3

//Multiplication *
5 * 2 //10


//Division /
5 / 2 //2.5

//Modulus %
10 % 3 //1

//Exponentiation **
2 ** 3 //8


//? Assignment Operators
let userName = "John"; //Here EqualTo operator is used to assign a value to a variable

//? Comparison Operators

//Equal to == 
//? What does Double Equal to operator do?
//* Double equal to operator is used to compare two values and return true if they are equal and false if they are not equal. Double equal is also know as Loose Equality Operator because it compares the value not the data type of the value.
let numThree = 5;
let numFour = 5;
console.log(numThree == numFour); //true

//Strict equal to ===
//? What does Triple Equal to operator do?
//* Triple Equal to often known as Strict Equality Operator in JavaScript because it compares the value as well as the data type of the value.
let numSeven = 5;
let numEight = "5";
console.log(numSeven === numEight); //false


//Not equal to !=
let numFive = 5;
let numSix = 6;
console.log(numFive != numSix); //true

//Strict not equal to !==
let numNine = 5;
let numTen = "5";
console.log(numNine !== numTen); //true

//Greater than >
let numEleven = 5;
let numTwelve = 6;
console.log(numEleven > numTwelve); //false

//Less than <
let numThirteen = 5;
let numFourteen = 6;
console.log(numThirteen < numFourteen); //true


//? Increment and Decrement Operators
let numFifteen = 5;
numEleven++; //6
numEleven--; //5




//? Logical Operators

//And &&
let numSixteen = 5;
let numSeventeen = 6;
console.log(numSixteen > 0 && numSeventeen > 0); //true

//!Example of && operator
let numTwentyTwo = 5;
let numTwentyThree = 0;
console.log(numTwentyTwo > 0 && numTwentyThree > 0); //false


//Or ||
let numEighteen = 5;
let numNineteen = 6;
console.log(numEighteen > 0 || numNineteen > 0); //true

//!Example of || operator
let numTwentyFour = 5;
let numTwentyFive = 0;
console.log(numTwentyFour > 0 || numTwentyFive > 0); //true


//Not !
let numTwenty = 5;
let numTwentyOne = 6;
console.log(!(numTwenty > 0 || numTwentyOne > 0)); //false


//!Example of ! operator
let numTwentySix = 5;
let numTwentySeven = 0;
console.log(!(numTwentySix > 0 || numTwentySeven > 0)); //true

//!What is COERCION in JavaScript?
//? COERCION is the automatic conversion of one data type to another data type.


//! What is the difference between == and === ?
//? == is used to compare the value of two variables, but it does not check the data type of the variables and in double equal to COERCION is allowed.
//? === is used to compare the value and data type of two variables and in triple equal to COERCION is not allowed.


//! What is Implecit COERCION and Explicit COERCION?
//? Implicit COERCION is the automatic conversion of one data type to another data type.Implicit COERCION is done by JavaScript Engine.
//? Explicit COERCION is the manual conversion of one data type to another data type. Explicit COERCION is done by the user.