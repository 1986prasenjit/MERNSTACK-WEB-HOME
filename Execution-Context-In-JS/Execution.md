# 🧠 JavaScript Execution Context — A Deep Dive

> *Understanding how JavaScript truly reads, interprets, and runs your code.*

---

## 📌 Table of Contents

- [What is an Execution Context?](#what-is-an-execution-context)
- [Types of Execution Context](#types-of-execution-context)
- [Scope vs. Execution Context](#scope-vs-execution-context)
- [The Two-Phase Execution Lifecycle](#the-two-phase-execution-lifecycle)
- [The Call Stack & LIFO Principle](#the-call-stack--lifo-principle)
- [Hoisting](#hoisting)
- [The Temporal Dead Zone (TDZ)](#the-temporal-dead-zone-tdz)
- [Quick Reference: `var` vs `let` / `const`](#quick-reference-var-vs-let--const)

---

## What is an Execution Context?

At its core, an **Execution Context (EC)** is the environment created by the JavaScript engine to evaluate and execute code. Think of it as a specialized container — a *"staging area"* — that manages the specific variables, functions, and scopes available to a piece of running code.

Every time JavaScript code runs, it does so **inside** an Execution Context. It encapsulates three critical components:

| # | Component | Description |
|---|-----------|-------------|
| 1 | **Variable Environment** | Where `var` declarations and function declarations live |
| 2 | **Lexical Environment** | Where block-scoped variables (`let`, `const`) and outer scope references live |
| 3 | **`this` Binding** | The reference to the current object context |

> When a function is invoked, a new context is born. When it finishes, that context is popped off and cleaned up — naturally feeding into JavaScript's **automatic garbage collection**, freeing unreachable local memory without manual intervention.

---

## Types of Execution Context

JavaScript relies on **three distinct types** of execution contexts:

### 🌍 1. Global Execution Context (GEC)
- The **default, foundational** context created when your script loads.
- Handles all code **not** wrapped inside a function.
- **Exactly one GEC** exists per JS file.
- Creates the **global object** (`window` in browsers, `global` in Node.js) and binds `this` to it.

### ⚙️ 2. Functional Execution Context (FEC)
- Created **only when a function is explicitly invoked** (not when it is defined).
- Every single function call gets its **own distinct FEC**.
- Has access to its own local variables, parameters, and can look **upward** through parent scopes via the scope chain.

### ⚠️ 3. Eval Execution Context
- Code executed inside `eval()` gets its own context.
- **Heavily discouraged** due to performance overhead and serious security risks.

---

## Scope vs. Execution Context

While execution contexts manage *runtime state*, they inherently define the boundaries of **Scope** — i.e., where variables can be accessed.

| Variable Type | Scope Boundary | Lifespan |
|---------------|----------------|----------|
| **Global** | Accessible anywhere in the script | Persists for the entire application lifetime (within GEC) |
| **Local** | Confined strictly to its function or block `{}` | Created during Phase 1, destroyed immediately when the context exits |

---

## The Two-Phase Execution Lifecycle

The JavaScript engine processes code in **two distinct phases**. Let's trace through a concrete example:

```js
var a = 10;

function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(a);
```

---

### 🔍 Phase 1: Memory Creation Phase (Scanning)

The engine scans the **entire file** from top to bottom, allocating memory for all declarations. **No code is executed yet.**

| Encountered | Action Taken |
|-------------|--------------|
| `var a` | Allocates memory → initializes to `undefined` |
| `function square` | Allocates memory → stores the **entire function body** |
| `var square2` | Allocates memory → initializes to `undefined` |

---

### ▶️ Phase 2: Code Execution Phase (Line-by-Line)

The engine steps through the code a second time, executing statements sequentially in a **single-threaded** manner.

1. `var a = 10;` → The placeholder `undefined` is **replaced** with `10`.
2. The `square` function definition is **skipped** (already stored in memory).
3. `var square2 = square(a);` → A function invocation is detected. The GEC **pauses** and a brand-new **Functional Execution Context** is spawned for `square`.

**Inside the `square` FEC:**

```
Memory Phase:
  └── num  → undefined
  └── ans  → undefined

Execution Phase:
  └── num  = 10          (argument passed in)
  └── ans  = 10 * 10 = 100
  └── return 100         → value handed back to GEC (square2 = 100)
  └── FEC is destroyed ✅
```

---

## The Call Stack & LIFO Principle

To manage multiple nested function calls without chaos, JavaScript uses the **Call Stack** — a mechanism that tracks which execution context is currently active.

It follows the **LIFO (Last In, First Out)** principle: the last context pushed onto the stack is always the first one popped off.

### 📋 Stack Lifecycle Walkthrough

```
Script Loads         →  [ GEC ]                         ← GEC pushed
A() is called        →  [ GEC | FEC(A) ]                ← A's FEC pushed
A() calls B()        →  [ GEC | FEC(A) | FEC(B) ]       ← B's FEC pushed
B() returns          →  [ GEC | FEC(A) ]                ← B's FEC popped
A() returns          →  [ GEC ]                         ← A's FEC popped
Script ends          →  []                              ← GEC popped, stack empty
```

> ⚠️ Because JavaScript is **single-threaded**, it can only process the execution context sitting at the **absolute top** of the Call Stack at any given time.

---

## Hoisting

**Hoisting** is an emergent behavior that results directly from the **Memory Creation Phase**. Because the engine allocates memory for all declarations *before* running any code, it creates the illusion that declarations are magically "pulled to the top" of your file.

However, hoisting behaves differently depending on how you declare things:

### `var` Declarations

Variables declared with `var` are hoisted and automatically assigned `undefined`.

```js
console.log(greet); // ✅ Output: undefined  (no error!)
var greet = "Hello World";
console.log(greet); // ✅ Output: "Hello World"
```

---

### Function Declarations

Traditional function declarations are hoisted with their **entire body**. You can safely call them before they appear in code.

```js
sayHello(); // ✅ Output: "Hi there!"

function sayHello() {
    console.log("Hi there!");
}
```

---

### ⚠️ Warning: Function Expressions

Function expressions follow **variable** hoisting rules, not function declaration rules.

```js
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
    console.log("Hey!");
};
```

> At the time of invocation, `sayHi` holds `undefined` (from var hoisting), and calling `undefined()` is illegal — hence the `TypeError`.

---

## The Temporal Dead Zone (TDZ)

Variables declared with `let` and `const` are **hoisted**, but unlike `var`, they are **not initialized** during the memory creation phase. They remain in a completely uninitialized state until the engine reaches their declaration line.

This uninitialized window is called the **Temporal Dead Zone (TDZ)**.

```js
// ⬇️ TDZ for 'age' BEGINS here (scope is entered)

console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization

let age = 25;     // 🚀 TDZ ENDS — 'age' is now initialized

console.log(age); // ✅ Output: 25
```

> The TDZ exists to prevent bugs caused by accessing variables before they are meaningfully defined. It's a deliberate design choice to enforce cleaner, more predictable code.

---

## Quick Reference: `var` vs `let` / `const`

| Feature | `var` | `let` / `const` |
|---------|-------|-----------------|
| **Hoisted?** | ✅ Yes | ✅ Yes |
| **Initial Phase Value** | `undefined` | Uninitialized (TDZ) |
| **Accessed before declaration** | Returns `undefined` | ❌ Throws `ReferenceError` |
| **Storage Location** | Global Object / Variable Environment | Script Object / Lexical Environment |
| **Re-declarable in same scope?** | ✅ Yes | ❌ No |
| **Block-scoped?** | ❌ No (function-scoped) | ✅ Yes |

---

> 💡 **Key Takeaway:** JavaScript doesn't just run your code top-to-bottom in one pass. It first *scans and prepares* (Phase 1), then *executes* (Phase 2). Understanding this two-phase model is the foundation for mastering hoisting, closures, scope chains, and the event loop.