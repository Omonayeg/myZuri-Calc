
function myCalc() {

    var a = parseFloat (prompt("Input first number"));
    var b = parseFloat  (prompt("Input second number"));
    var operator =  prompt("choose an operator; +, -, x, /, %");

    if (isNaN(a) || isNaN(b)) {
        alert ("Please input a valid number");
    } 

    else {
    if (operator === "+") {
        alert (a + b);
    } else if (operator === "-") {
        alert (a - b);
    } else if (operator === "x") {
        alert (a * b);
    } else if (operator === "/") {
        alert (a / b);
    } else {
        alert (a % b);
    }}};
      
    myCalc();