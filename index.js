// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        let result = new Function('return ' + display.value)();
        display.value = result;
    } catch (err) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}