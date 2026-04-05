//! What are LOOPS in JavaScript?
//? Loops holo ekta process j diyea amre ekta repetative kaj korte pari. Amre ekta code likbo ar sai code ta k joto bar icha run korete parbo.

//? LOOPS in JavaScript are used to perform a particular repeatative task multiple times.

//? There are three types of loops in JavaScript:
//? 1. For Loop
//*Syntax of FOR LOOP
//* for(initialization; condition; increment/decrement){
//*         code to be executed
//* }

for (let i = 1; i <= 10; i++) {
  //console.log(i);
}

//! Initialization: This is the first line of the loop that is executed before the condition is checked. --> ONCE ONLY-->1ST
//! Condition: This is the condition that is checked before each iteration of the loop. If the condition is true, the loop will continue to execute. If the condition is false, the loop will stop. --> CHECK UNTIL THE CONDITION BECAME FALSE -->2ND
//! Body: This is the code that is executed for each iteration of the loop.--> PRINTED PART OR THE CODE PART IN THE LOOP-->3RD
//! Increment/Decrement: This is the last line of the loop that is executed after each iteration of the loop. --> INICRIMENT OR DECREMENT THE VALUE UNTIL IT BECAME GREATER OR EQUAL TO THE CONDITION-->4TH OR LAST

//? 2. While Loop

let i = 1;
while (i <= 10) {
  //console.log(i);
  i++;
}

//? 3. Do While Loop

let j = 100;
do {
  console.log(`${j} times inside DO-While Loop`);
  j++;
} while (j <= 10);
