//What is Objects in JavaScript?
//Objects are used to store data values in key-value pairs.

//In object the key can only be a string or symbol and the value can be any data type.

//In How many types we can declare an Object?
//1. Object Literal
// let obj = {
//     userName:"John",
//     age:20
// }
//console.log(obj.userName);

//2. Object Constructor
//  let objTwo = new Object();
//  objTwo.userName = "John";
//  objTwo.age = 20;
 //console.log(objTwo.userName);

//3. Class
class Person {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}

//const personeOne = new Person("Shyamal", 20);
//console.log(personeOne.userName);
//console.log(new Person("Shyamal", 20));

//4. Factory Function
function createPerson(userName, age) {
    return {
        userName,
        age
    }
}
const personeOne = createPerson("Abhishek", 20);
//console.log(personeOne.userName, personeOne.age);
//console.log(createPerson("Shyamal", 20));

//Objects Methods
//1. Object.keys
let objExample = {
    userName:"John",
    age:20
}
//console.log(Object.keys(objExample)); // This will return an array of the keys of the object

//2. Object.values
//console.log(Object.values(objExample)); // This will return an array of the values of the object

//3. Object.entries
//console.log(Object.entries(objExample)); // This will return an array of the key-value pairs of the object

//4. Object.freeze
 //Object.freeze(objExample);
 //objExample.userName = "Arif";
 //console.log(objExample);

//5. Object.seal
Object.seal(objExample);
objExample.userName = "Arif";
objExample.city = "New York";
//console.log(objExample);


//6. Object.assign
//Object.assign asole kaj ta ki kore --> Object.assign eee kaj ta holo 
// let objOne = {
//     name:"John",
//     city:"New York"
// }

// let objTwo = {
//     userName:"Arif",
//     age:20
// }

// console.log(Object.assign(objTwo, objOne));


//7. Object.create
let obj = {
   userName:"John",
   age:20,
   city:"New York"
}
let objTwo = Object.create(obj);
//console.log(objTwo.city);


//8. Object.is
//9. Object.isObject
//10. Object.has
//11. Object.delete
//12. Object.hasOwnProperty



//What is the difference between Object.freeze and Object.seal?
//Object.freeze is used to prevent the object from being modified, while Object.seal is used to prevent the object from being modified except for its own properties