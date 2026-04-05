//! Print all the evens numbers from 1 to n


function printEven(num){
    for(let i = 1; i <= num; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
printEven(10)