let operatorButtons = document.querySelectorAll(".operator-button");
let numberButtons = document.querySelectorAll(".number-button");
let displayButtons = document.querySelectorAll(".display-button");
let result = document.querySelector("#result");
let mainScreen = document.querySelector("#main-screen");
let secondaryScreen = document.querySelector("#history-screen");

let number1 = "";
let number2 = "";
let hasNum1 = false;
let total = 0;
let operator = "";
var currentOperator = "";
var previousOperator = "";
mainScreen.textContent="Sardi3";

function operate(){
    let x = Number(number1) + total;
    let y = Number(number2);
    secondaryScreen.textContent=`${x} ${operator} ${number2}`;
    if(operator==="÷" && number2==="0"){
        number2="";
        mainScreen="Cannot divide by 0";
    } else {
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
        if(total%1!=0){
            mainScreen.textContent=total.toFixed(2);
        } else{
            mainScreen.textContent=total;
        };
        number1 = "";
        number2 = "";
    };
};

function toggleOperatorOff(){
    if(previousOperator!=""){
        document.querySelector(`#${previousOperator}`).classList.remove("active-operator");
    };
};


numberButtons.forEach(button => {
    button.addEventListener("click", function(){
        if(!hasNum1){
            number1 += button.textContent;
            mainScreen.textContent=number1;
        } else{
            number2 += button.textContent;
            mainScreen.textContent=number2;
        };
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", function(e){
        if(!hasNum1){
            hasNum1 = true;
        };
        if(number2!=""){
            operate();
        };
        operator = button.textContent;
        currentOperator = button.id;
        if(previousOperator!=currentOperator){
            toggleOperatorOff();
        };
        document.querySelector(`#${currentOperator}`).classList.add("active-operator");
        previousOperator = currentOperator;
    });
});

result.addEventListener("click", function(){
    operate();
});

clear.addEventListener("click", function(){
    number1 = "";
    number2 = "";
    hasNum1 = false;
    total = 0;
    operator = "";
    toggleOperatorOff();
    mainScreen.textContent="Sardi3";
    secondaryScreen.textContent="";
});