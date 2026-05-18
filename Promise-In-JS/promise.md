# JavaScript Event Loop Explained Diagrammatically

# What is Event Loop in JavaScript?

JavaScript is a **single-threaded synchronous language**.
That means JavaScript can execute only **one task at a time** using something called the:

* Call Stack

But JavaScript can still handle:

* Timers
* API calls
* Promises
* User events
* Async operations

This is possible because of:

* Web APIs
* Callback Queue / Macro Task Queue
* Micro Task Queue
* Event Loop

---

# Understanding Your Diagram

Your diagram contains 4 important parts:

1. Call Stack
2. Web APIs
3. Micro Task Queue
4. Macro Task Queue
5. Event Loop

---

# 1. Call Stack

The **Call Stack** is the place where JavaScript executes code line by line.

Think of it like:

> A plate stack.
>
> The last plate added is removed first.

This follows:

* LIFO Principle
* Last In First Out

Example:

```js
console.log("Start");
console.log("End");
```

Execution:

```text
1. console.log("Start") enters Call Stack
2. Executes and removes
3. console.log("End") enters Call Stack
4. Executes and removes
```

Output:

```js
Start
End
```

---

# 2. Web APIs

Web APIs are provided by:

* Browser
* Node.js Runtime

These APIs handle asynchronous tasks outside the Call Stack.

Examples:

* setTimeout()
* setInterval()
* fetch()
* DOM events
* click events

Example:

```js
setTimeout(() => {
   console.log("Hello");
}, 1000);
```

What happens?

```text
1. setTimeout enters Call Stack
2. Browser takes it to Web APIs
3. Timer starts for 1000ms
4. Call Stack becomes free again
```

So JavaScript does not wait.

This is why JavaScript remains non-blocking.

---

# 3. Micro Task Queue (Priority Queue)

This queue has the highest priority.

In your diagram:

```text
.then()
.catch()
promise()
```

These are handled inside the:

* Micro Task Queue

Examples:

```js
Promise.resolve().then(() => {
   console.log("Promise Done");
});
```

Important Rule:

> Micro Tasks always execute before Macro Tasks.

That means:

```text
Promise callbacks run before setTimeout callbacks
```

---

# 4. Macro Task Queue / Callback Queue

This queue stores:

* setTimeout
* setInterval
* click events
* DOM events

Example:

```js
setTimeout(() => {
   console.log("Timeout");
}, 0);
```

Even if the delay is 0:

```text
It still waits inside the Macro Task Queue.
```

Because:

* Call Stack must become empty first
* Micro Tasks must finish first

Only then Macro Tasks execute.

---

# 5. Event Loop

The Event Loop is the brain of JavaScript async behavior.

Its job is:

```text
Continuously check:

1. Is Call Stack empty?
2. If yes → Execute tasks from queues
```

Priority order:

```text
1. Micro Task Queue
2. Macro Task Queue
```

So the Event Loop always checks:

```text
Call Stack Empty?
   ↓
Micro Tasks Available?
   ↓
Execute all Micro Tasks
   ↓
Then execute one Macro Task
```

---

# Full Example Using Event Loop

```js
console.log("Start");

setTimeout(() => {
   console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
   console.log("Promise");
});

console.log("End");
```

---

# Step-by-Step Execution

## Step 1

```js
console.log("Start")
```

Goes to:

* Call Stack

Output:

```js
Start
```

---

## Step 2

```js
setTimeout(...)
```

Moves to:

* Web APIs

Timer starts.

---

## Step 3

```js
Promise.resolve().then(...)
```

Promise callback goes to:

* Micro Task Queue

---

## Step 4

```js
console.log("End")
```

Output:

```js
End
```

---

## Step 5

Now Call Stack becomes empty.

Event Loop checks queues.

Priority:

```text
Micro Task Queue first
```

So:

```js
Promise
```

prints first.

---

## Step 6

Then Event Loop checks:

* Macro Task Queue

Now:

```js
Timeout
```

executes.

---

# Final Output

```js
Start
End
Promise
Timeout
```

---

# Important Interview Points

## Why Promise executes before setTimeout?

Because:

```text
Promise callbacks go to Micro Task Queue
```

And:

```text
Micro Task Queue has higher priority than Macro Task Queue
```

---

# Quick Revision Table

| Concept          | Meaning                   |
| ---------------- | ------------------------- |
| Call Stack       | Executes synchronous code |
| Web APIs         | Handles async operations  |
| Micro Task Queue | Stores Promise callbacks  |
| Macro Task Queue | Stores timers/events      |
| Event Loop       | Moves tasks to Call Stack |

---

# Super Easy Memory Trick

Think like this:

```text
Call Stack = Kitchen Chef
Web APIs = Waiting Area
Micro Task Queue = VIP Customers
Macro Task Queue = Normal Customers
Event Loop = Manager
```

Rule:

```text
VIP customers are always served first.
```

So:

```text
Promises execute before setTimeout.
```

---

# One-Line Summary

```text
Event Loop continuously checks the Call Stack and executes Micro Tasks first, then Macro Tasks.
```
