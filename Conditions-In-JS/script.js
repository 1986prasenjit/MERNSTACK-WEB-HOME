//What are Conditions?
//Conditions are used to decide to do something based on something being true or false
//Condition diyea amre ekta deceision nite pari either the condition is true or false
//The most common conditions are if, else if, else

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//if(condition)=== true taile if eee body thea j code ta ache seta execute hobe{
//code to be executed if the condition is true
//}

//else //if(condition)=== false taile else eee body thea j code ta ache seta execute hobe{
//code to be executed if the condition is false
//}

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}
*/
//if can be written alone their is no need of else, but else cannot be written alone
//if(){}---> Valid
//else{}---> Invalid

//IF AND ELSE HAS TWO OTHER FORMS
//1. Ternary Operator
//2. Switch Statement

//! Write a program that takes a number as input and checks if it is positive or negative. If the number is positive, print "The number is positive". If the number is negative, print "The number is negative".

function checkPositiveORNegative(num) {
  if (num === 0) {
    return "Zero";
  } else if (num > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

//console.log(checkPositiveORNegative(-10)); //---> Positive

//!Write a program that takes two numbers as input and checks if the first number is greater than the second number. If the first number is greater, print "The first number is greater". If the second number is greater, print "The second number is greater". If they are equal, print "The numbers are equal".

function checkGreater(numOne, numTwo) {
  if (numOne > numTwo) {
    return "Number One is greater";
  } else {
    return "Number Two is greater";
  }
}

//console.log(checkGreater(1, 2)); //--> Number Two is greater

//!Write a program that takes a number as input and checks if it is even or odd. If the number is even, print "The number is even". If the number is odd, print "The number is odd".

function checkEvenOROdd(num) {
  if (num % 2 == 0) {
    return "The Number is Even";
  } else {
    return "The Number is Odd";
  }
}

//console.log(Arif(50)); //---> The Number is Odd

//!Write a program that takes a number as input and checks if it is divisible by 3. If the number is divisible by 3, print "The number is divisible by 3". Otherwise, print "The number is not divisible by 3".

function checkNumber(num) {
    if (num % 3 == 0) {
      return "The number is divisible by 3";
    } else {
      return "The number is not divisible by 3";
    }
  }

  //console.log(checkNumber(10));

  //1. Ternary Operator
  let age = 8;
  let message = age >= 18 ? "You are an adult" : "You are a child";
  //console.log(message);


  //2. Switch Statement

  let month = 14;
  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
      case 13:
      console.log("Arif");
      break;
    default:
      console.log("Invalid month");
  }
