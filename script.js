const buttonContainer = document.getElementById('button-container');
const primaryDisplay = document.getElementById("displayedNumbers");
const secondaryDisplay = document.getElementById("previousCalc");

let currentNum = 0;
let prevNum = 0;
let calcedResult = 0;

const buttonMap = [
    { id: "pow", label: "x²" },
    { id: "sqr", label: "√" },
    { id: "clear", label: "C" },
    { id: "divide", label: "÷" },

    { id: "seven", label: "7" },
    { id: "eight", label: "8" },
    { id: "nine", label: "9" },
    { id: "multiply", label: "×" },

    { id: "four", label: "4" },
    { id: "five", label: "5" },
    { id: "six", label: "6" },
    { id: "minus", label: "−" },

    { id: "one", label: "1" },
    { id: "two", label: "2" },
    { id: "three", label: "3" },
    { id: "plus", label: "+" },

    { id: "plusMinus", label: "+/−" },
    { id: "zero", label: "0" },
    { id: "dot", label: "." },
    { id: "equal", label: "=" }
];

for (let i = 0; i < buttonMap.length; i++) {
    const buttonElement = document.createElement('button');
    buttonElement.className = 'calc-button';
    buttonElement.id = `${buttonMap[i].id}`;
    buttonElement.textContent = buttonMap[i].label;

    buttonElement.addEventListener('click', (e) => buttonPressed(e));

    buttonContainer.appendChild(buttonElement);
}
function buttonPressed(e) {
    console.log(e.target.id);

    switch (e.target.id) {

        case 'pow': break;
        case 'sqr': break;
        case 'clear': clearMemory(); break;
        case 'divide': division(); break;

        case 'seven': appendPrimaryDisplay('7'); break;
        case 'eight': appendPrimaryDisplay('8'); break;
        case 'nine': appendPrimaryDisplay('9'); break;
        case 'multiply': multiplication(); break;

        case 'four': appendPrimaryDisplay('4'); break;
        case 'five': appendPrimaryDisplay('5'); break;
        case 'six': appendPrimaryDisplay('6'); break;
        case 'minus': substraction(); break;

        case 'one': appendPrimaryDisplay('1'); break;
        case 'two': appendPrimaryDisplay('2'); break;
        case 'three': appendPrimaryDisplay('3'); break;
        case 'plus': addition(); break;

        case 'plusMinus': break;
        case 'zero': appendPrimaryDisplay('0'); break;
        case 'dot': appendPrimaryDisplay('.'); break;
        case 'equal': break;

        default: break;
    }
}

function appendPrimaryDisplay(stringOfNumber) {
    if (primaryDisplay.textContent.length <= 15) {
        primaryDisplay.textContent += stringOfNumber;
    }
}

function addition() {
}
function substraction() {

}

function multiplication() {
}
function division() {
}
function equal() {

}

function operate() {

}

function clearDisplays() {
    primaryDisplay.textContent = "";
    secondaryDisplay.textContent = "";
}
function clearMemory() {
    primaryDisplay.textContent = "";
    secondaryDisplay.textContent = "";
    currentNum = 0;
    prevNum = 0;
    calcedResult = 0;
}

