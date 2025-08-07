let number1 = "";
let number2 = "";
let hasNum1 = false;
let total = 0;
let operator = "";
document.querySelector("#screen").textContent="Sardi3";


let operatorButtons = document.querySelectorAll(".operator-button");
let numberButtons = document.querySelectorAll(".number-button");
let displayButtons = document.querySelectorAll(".display-button");
let result = document.querySelector("#result");

function calculate(){
    let x = Number(number1) + total;
    let y = Number(number2);
    if(operator==="+"){
        total = x + y;
    } else if(operator==="-"){
        total = x - y;
    } else if(operator==="÷"){
        if(number2===""){
            y = 1;
        };
        total = x / y;
    } else if(operator==="x"){
        if(number2===""){
            y = 1;
        };
        total = x * y;
    };
    document.querySelector("#screen").textContent=total;
    number1 = "";
    number2 = "";
};

numberButtons.forEach(button => {
    button.addEventListener("click", function(){
        if(!hasNum1){
            number1 += button.textContent;
            document.querySelector("#screen").textContent=number1;
        } else{
            number2 += button.textContent;
            document.querySelector("#screen").textContent=number2;
        };
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", function(){
        operator = button.textContent;
        document.querySelector("#screen").textContent=operator;
        if(!hasNum1){
            hasNum1 = true;
        };
        if(number2!=""){
            calculate();
        };
    });
});

result.addEventListener("click", function(){
    calculate();
});

clear.addEventListener("click", function(){
    number1 = "";
    number2 = "";
    hasNum1 = false;
    total = 0;
    operator = "";
    document.querySelector("#screen").textContent="Sardi3";
});