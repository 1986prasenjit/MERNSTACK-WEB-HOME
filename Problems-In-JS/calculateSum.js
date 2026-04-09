//Calculate and print the sum of all numbers from 1 to num. 

function calculateSum(num){ //num jodi 5 hoi taile ami 1 theke 5 obdhi ja asbe seta k add korbo
    let result = 0;
    for(let i = 1; i <= num; i++){
        result = result + i;
    }
    return result;
}
console.log(calculateSum(5));
