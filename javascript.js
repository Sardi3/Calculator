let operatorButtons = document.querySelectorAll(".operator-button");
let numberButtons = document.querySelectorAll(".number-button");
let displayButtons = document.querySelectorAll(".display-button");
let result = document.querySelector("#result");
let clear = document.querySelector("#clear");
let backspace = document.querySelector("#backspace");
let mainScreen = document.querySelector("#main-screen");
let secondaryScreen = document.querySelector("#history-screen");
const MAX_NUMBER = 16;

let number1 = "";
let number2 = "";
let hasNum1 = false;
let total = 0;
let operator = "";
var currentOperator = "";
var previousOperator = "";
mainScreen.textContent="Sardi3";

function operate(){
    if(operator==="÷" && number2==="0"){
        clean();
        mainScreen.textContent="Error: Division by 0";
    } else {
        let x = Number(number1) + total;
        let y = Number(number2);
        secondaryScreen.textContent=`${x} ${operator} ${number2}`;
        if(operator==="+"){
            total = x + y;
        } else if(operator==="-"){
            total = x - y;
        } else if(operator==="÷"){
            if(number2===""){
                y = 1;
            };
            total = x / y;
        } else if(operator==="×"){
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

function receiveNumber(button){
    if(!hasNum1){
        if(number1.length<MAX_NUMBER){
            if(button.textContent!="."){
                number1 += button.textContent;
                mainScreen.textContent=number1;
            } else if(button.textContent==="." && !number1.includes(".")){
                number1 += button.textContent;
                mainScreen.textContent=number1;
            };
        };
    } else{
        if(number2.length<MAX_NUMBER){
            if(button.textContent!="."){
                number2 += button.textContent;
                mainScreen.textContent=number2;
            } else if(button.textContent==="." && !number2.includes(".")){
                number2 += button.textContent;
                mainScreen.textContent=number2;
            };
        };
    };
};



numberButtons.forEach(button => {
    button.addEventListener("click", function(){
        receiveNumber(button);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", function(){
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

backspace.addEventListener("click", function(){
    if(!hasNum1){
        number1 = number1.slice(0, -1);
        mainScreen.textContent=number1;
    } else{
        number2 = number2.slice(0, -1);
        mainScreen.textContent=number2;
    };
});

function clean(){
    number1 = "";
    number2 = "";
    hasNum1 = false;
    total = 0;
    operator = "";
    toggleOperatorOff();
    mainScreen.textContent="Sardi3";
    secondaryScreen.textContent="";
};

document.addEventListener("keydown", function(event){
    let numbers = "0123456789.";
    let operators = "+-×÷"
    let key = event.key;
    if(event.key==="*"){
        key="×"
    } else if(key==="/"){
        key="÷";
    };
    if (numbers.includes(key)){
        if(!hasNum1){
            if(number1.length<MAX_NUMBER){
                number1 += key;
                mainScreen.textContent=number1;
            };
        } else{
            if(number2.length<MAX_NUMBER){
                number2 += key;
                mainScreen.textContent=number2;
            };
        };
    } else if(operators.includes(key)){
        if(!hasNum1){
            hasNum1 = true;
        };
        if(number2!=""){
            operate();
        };
        operator = key;
        switch(key){
            case "+":
                currentOperator = "sum";
                break;
            case "-":
                currentOperator = "subtraction";
                break;
            case "×":
                currentOperator = "multiplication";
                break;
            case "÷":
                currentOperator = "division";
                break;
        };
        if(previousOperator!=currentOperator){
            toggleOperatorOff();
        };
        document.querySelector(`#${currentOperator}`).classList.add("active-operator");
        previousOperator = currentOperator;
    } else if(key==="Enter"){
        operate();
    } else if(key==="Backspace"){
        if(!hasNum1){
            number1 = number1.slice(0, -1);
            mainScreen.textContent=number1;
        } else{
            number2 = number2.slice(0, -1);
            mainScreen.textContent=number2;
        };
    };
});