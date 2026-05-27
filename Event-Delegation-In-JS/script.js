const containerElem = document.getElementById("container");


containerElem.addEventListener("click", function (event) {
    if(event.target.id === "btnOne"){
        document.body.style.backgroundColor = "red";
    }else if(event.target.id === "btnTwo"){
        document.body.style.backgroundColor = "blue";
    }else if(event.target.id === "btnThree"){
        document.body.style.backgroundColor = "green";
    }else if(event.target.id === "btnFour"){
        document.body.style.backgroundColor = "yellow";
    }else if(event.target.id === "btnFive"){
        document.body.style.backgroundColor = "#6FCF97";
    }else if(event.target.id === "btnSix"){
        document.body.style.backgroundColor = "orangered";
    }else if(event.target.id === "btnSeven"){
        document.body.style.backgroundColor = "orange";
    }else if(event.target.id === "btnEight"){
        document.body.style.backgroundColor = "purple";
    }else if(event.target.id === "btnNine"){
        document.body.style.backgroundColor = "pink";
    }else if(event.target.id === "btnTen"){
        document.body.style.backgroundColor = "brown";
    }
});