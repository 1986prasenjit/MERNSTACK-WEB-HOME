## Introduction to Objects

Objects in JavaScript are used to store data values in key-value pairs. They can be declared using several methods:

- **Object Literals**: The most common way, using curly braces `{}`. For example, `obj = { username: "John", age: 20 }`.
- **Object Constructor**: Using the `new Object()` syntax. For example, `let obj2 = new Object()`.
- **Class Factory Function**: Using classes to create objects (introduced in ES6).
- **Constructor Function**: A function used to create objects, especially before ES6 classes.

## Array Constructors

Similar to objects, arrays can also be declared using a constructor. For example:

```javascript
let arr = new Array(10); // Creates an array with 10 empty items
```

Individual elements can then be assigned values:

```javascript
newArr[0] = 1;
newArr[1] = 2;
// ... and so on up to 10
```

## Object Properties and Access

When working with objects, it's important to understand their structure:

- **Properties**: The key-value pairs within an object. For example, in `{ username: "John", age: 20 }`, `username` and `age` are properties.
- **Keys**: Within the curly braces, keys can only be strings or symbols.
- **Values**: Values can be of any data type, including strings, numbers, booleans, undefined, null, functions, objects, or arrays.
- **Accessing Properties**: Object properties can be accessed using dot notation (e.g., `obj.username`).

## Class-based Object Creation (ES6)

JavaScript classes, introduced in ES6, provide a more structured way to create objects. A class typically includes a `constructor` function, uses the `this` keyword to refer to the current instance, and `new` keyword to instantiate an object.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("Shyamal", 20);
```

The `new` keyword, when used with a class, returns an empty object that gets populated by the constructor.

## Constructor Functions (Pre-ES6)

Before ES6, constructor functions were the primary way to create objects in a structured manner. These are regular functions that define the object's properties and methods.

```javascript
function createPerson(username, age) {
  this.username = username;
  this.age = age;
}

let person1 = new createPerson("Abhishek", 20);
```

## Object Methods

JavaScript provides several built-in methods for working with objects. Some important ones include:

- `Object.keys()`: Returns an array of an object's own enumerable property names (keys).
- `Object.values()`: Returns an array of an object's own enumerable property values.
- `Object.entries()`: Returns an array of `[key, value]` pairs for an object's own enumerable properties.

## Object Immutability and Modification Control

JavaScript offers methods to control how objects can be modified:

- `Object.freeze()`: Prevents modification of existing property values, addition of new properties, and deletion of existing properties. An object becomes completely immutable.

  ```javascript
  Object.freeze(exampleObject);
  exampleObject.username = "Arif"; // This change will not take effect
  ```

- `Object.seal()`: Prevents the addition or deletion of properties, but allows modification of existing property values.

  ```javascript
  Object.seal(exampleObject);
  exampleObject.username = "Arif"; // This change will take effect
  exampleObject.city = "New York"; // This addition will not take effect
  ```

The key difference is that `Object.freeze()` makes an object completely unchangeable, while `Object.seal()` allows existing properties to be changed but prevents structural modifications (adding/removing properties).

## Copying and Merging Objects with `Object.assign()`

`Object.assign()` is used to copy or merge properties from one or more source objects to a target object.

```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 5, c: 3 };
let result = Object.assign(obj1, obj2);
// result will be { a: 1, b: 5, c: 3 }
```

If multiple source objects have the same property key, the value from the last source object in the arguments will overwrite previous values. If the properties are distinct, they will all be copied.

## Object Prototypes and Deep Linking

Objects in JavaScript can inherit properties and methods from other objects through prototypes. `Object.create()` can be used to create a new object with a specified prototype object.

```javascript
let obj = { username: "John", age: 20, city: "New York" };
let obj2 = Object.create(obj);
```

In this example, `obj2` will have `obj` as its prototype. This means `obj2` can access all properties of `obj` using dot notation (e.g., `obj2.username`, `obj2.city`), even though these properties are not directly on `obj2` itself. This creates a deep linking between objects, allowing for inheritance and shared properties.