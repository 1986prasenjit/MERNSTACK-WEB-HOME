//Write a function to create an array with numbers from 1 to N.

function createArray(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
}

console.log(createArray(10));