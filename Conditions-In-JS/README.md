# 📘 JavaScript Fundamentals (With Clear Examples + Code)

![JavaScript](https://img.shields.io/badge/JavaScript-Core-yellow)
![Level](https://img.shields.io/badge/Level-Beginner%20Friendly-green)

---

## 🚀 What You’ll Learn

This guide explains:

- Primitive vs Non-Primitive Data Types  
- Call by Value vs Call by Reference  
- Stack vs Heap Memory  
- Conditional Statements  

👉 And most importantly:  
Every concept comes with **simple explanation + real code together**

---

## 🧠 1. Data Types Overview

JavaScript has two main types of data:

| Type | Behavior | Example |
|------|--------|--------|
| Primitive | Copy value | `"John"`, `10` |
| Non-Primitive | Share reference | `{}`, `[]` |

👉 Core idea:  
**Sometimes JS copies values, sometimes it shares memory**

---

# 📦 2. Primitive Data Types (Call by Value)

### 💡 Concept

Primitive values are copied when assigned.

👉 That means each variable has its **own separate value**

---

### 🧪 Example + Code

```javascript
let name = "John";
let name2 = name; // copy created

console.log("Before change:");
console.log("name:", name);     // John
console.log("name2:", name2);   // John

name2 = "Arif"; // change only name2

console.log("\nAfter change:");
console.log("name:", name);     // John (unchanged)
console.log("name2:", name2);   // Arif

🧠 Explanation (Simple Way)

Think like this:

You give someone a photocopy of a document

You change your copy → their copy stays same

No connection between them

✔ That is Call by Value

📌 Primitive Types List
let str = "Hello";     // string
let num = 10;          // number
let bool = true;       // boolean
let x = null;          
let y;                 // undefined
let sym = Symbol();    
let big = 123n;        // bigint
🔗 3. Non-Primitive Data Types (Call by Reference)
💡 Concept

Objects, arrays, functions are not copied
Instead, variables share the same memory reference

🧪 Example + Code
let user = {
  name: "John",
  age: 20
};

let user2 = user; // reference copy

console.log("Before change:");
console.log("user:", user);
console.log("user2:", user2);

user2.name = "Arif";
user2.age = 25;

console.log("\nAfter change:");
console.log("user:", user);   // changed!
console.log("user2:", user2); // changed!
🧠 Explanation (Simple Way)

Think like this:

Two people editing the same Google Doc

One changes → other sees it instantly

✔ That is Call by Reference

🧪 Another Example (Array)
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

👉 Both changed because they share same memory

💾 4. Memory Model (Stack vs Heap)
🧱 Stack Memory

Stores primitive values

Stores references (addresses)

Fast and fixed

🏗️ Heap Memory

Stores actual objects/arrays

Dynamic and flexible

🔄 Example + Code
let obj = { name: "John" }; // stored in Heap
let obj2 = obj;             // reference stored in Stack

obj2.name = "Arif";

console.log(obj.name); // Arif
🧠 Behind the Scenes
Stack:
obj  → address1
obj2 → address1

Heap:
address1 → { name: "Arif" }

👉 Both variables point to same object

⚖️ 5. Conditional Statements

Used to make decisions in code.

🧩 Basic Structure
if (condition) {
  // runs if true
} else if (anotherCondition) {
  // runs if above is false
} else {
  // runs if all false
}
🧪 Example 1: Age Check
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}
🧠 Explanation

age = 18

First condition is true → stop checking

Output → "You are an adult."

🧪 Example 2: Even or Odd
let number = 7;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
🧪 Example 3: Login Check
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please login first");
}
🔥 6. Common Mistake (IMPORTANT)
let obj1 = { name: "John" };
let obj2 = obj1;

obj2.name = "Arif";

console.log(obj1.name); // ❗ Arif (unexpected for beginners)

👉 Problem: You didn’t copy, you shared reference

✅ Solution (Shallow Copy)
let obj1 = { name: "John" };
let obj2 = { ...obj1 };

obj2.name = "Arif";

console.log(obj1.name); // John ✅
console.log(obj2.name); // Arif
🧠 Final Takeaways

✔ Primitive → Copy → Safe
✔ Non-Primitive → Shared → Be careful
✔ Stack → Stores values + references
✔ Heap → Stores actual objects
✔ Conditions → Control program flow