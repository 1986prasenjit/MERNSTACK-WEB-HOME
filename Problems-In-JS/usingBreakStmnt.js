//Use a break statement to exit a loop early (e.g., stop printing numbers at 5).

for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}