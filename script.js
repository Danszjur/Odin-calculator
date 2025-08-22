const buttonContainer = document.getElementById('button-container')

const buttonList = [
    'pow', 'sqr', 'percent', 'subdivide',
    'seven', 'eight', 'nine', 'divide',
    'four', 'five', 'six', 'minus',
    'one', 'two', 'three', 'plus',
    'plusMinus', 'zero', 'dot', 'equal',


]

for (let i = 0; i < buttonList.length; i++) {
    const buttonElement = document.createElement("button");
    buttonElement.className = "calc-button";
    buttonElement.id = `${buttonList[i]}`;
    buttonElement.textContent = buttonTextFiller(buttonList[i]);
    buttonElement.addEventListener("click", () => buttonPressed);
    buttonContainer.appendChild(buttonElement);

    function buttonTextFiller(stringOfButton) {
        switch (stringOfButton) {
            case 'one': return '1';
            case 'two': return '2';
            case 'three': return '3';
            case 'four': return '4';
            case 'five': return '5';
            case 'six': return '6';
            case 'seven': return '7';
            case 'eight': return '8';
            case 'nine': return '9';
            case 'zero': return '0';
            case 'dot': return '.';
            case 'plus': return '+';
            case 'minus': return '-';
            case 'divide': return '*';
            case 'subdivide': return '/';
            case 'pow': return 'x^2';
            case 'sqr': return 'sqr';
            case 'percent': return '%';
            case 'plusMinus': return '+/-';
            case 'equal': return '=';
            default:
                break;
        }

    }
}
function buttonPressed() { }


