let displayValue = "";
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}
function updateDisplay() {
    document.getElementById("display").innerText =displayValue;
}
function clearDisplay() {
    displayValue = "";
    updateDisplay();
}
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
function calculate() {
    try 
    {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
} catch (error) {
    displayValue = "Error";
    updateDisplay()
}
}