const buttonContainer = document.getElementById('button-container');
const primaryDisplay = document.getElementById("displayedNumbers");
const secondaryDisplay = document.getElementById("previousCalc");

let firstNum = 0;
let secondNum = 0;
let operator = "";

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

    switch (e.target.id) {

        case 'pow': operate(''); break;
        case 'sqr': operate(''); break;
        case 'clear': clearMemory(); clearDisplays(); console.clear(); break;
        case 'divide': operate('/'); break;

        case 'seven': appendPrimaryDisplay('7'); break;
        case 'eight': appendPrimaryDisplay('8'); break;
        case 'nine': appendPrimaryDisplay('9'); break;
        case 'multiply': operate('*'); break;

        case 'four': appendPrimaryDisplay('4'); break;
        case 'five': appendPrimaryDisplay('5'); break;
        case 'six': appendPrimaryDisplay('6'); break;
        case 'minus': operate('-'); break;

        case 'one': appendPrimaryDisplay('1'); break;
        case 'two': appendPrimaryDisplay('2'); break;
        case 'three': appendPrimaryDisplay('3'); break;
        case 'plus': operate('+'); break;

        case 'plusMinus': operate(''); break;
        case 'zero': appendPrimaryDisplay('0'); break;
        case 'dot': appendPrimaryDisplay('.'); break;
        case 'equal': operate('='); break;

        default: break;
    }
}

function appendPrimaryDisplay(stringOfNumber) {
    if (primaryDisplay.textContent.length <= 15) {
        primaryDisplay.textContent += stringOfNumber;
    }
}

function clearMemory() {
    firstNum = 0;
    secondNum = 0;
    operator = "";
}
function clearDisplays() {
    primaryDisplay.textContent = "";
    secondaryDisplay.textContent = "";
}

function operate(stringOfOperator) {
    switch (operator) {
        case '+':
            firstNum = parseFloat(primaryDisplay.textContent) + firstNum;
            break;
        case '/':
            firstNum = parseFloat(primaryDisplay.textContent) / firstNum;
            break;
        case '-':
            firstNum = parseFloat(primaryDisplay.textContent) - firstNum;
            break;
        case '*':
            console.log(` elso szam${firstNum}`);

            firstNum = parseFloat(primaryDisplay.textContent) * firstNum;
            break;
        case '':
            firstNum = parseFloat(primaryDisplay.textContent);
            break;
        case '=':
            firstNum = parseFloat(primaryDisplay.textContent);
            break;

        default:
            break;
    }

    operator = stringOfOperator;
    clearDisplays();
    console.log(firstNum);

}

