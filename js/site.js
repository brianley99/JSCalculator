function add() {
    //Get numbers from DOM
    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;

    //turn into integers
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    // add the first and second numbers
    let sum = numberOne + numberTwo;

    //display the result
    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = sum;
}
function subtract() {
    //Get numbers from DOM
    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;

    //turn into integers
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    // add the first and second numbers
    let sub = numberOne - numberTwo;

    //display the result
    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = sub;
}
function multiply() {
    //Get numbers from DOM
    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;

    //turn into integers
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    // add the first and second numbers
    let mul = numberOne * numberTwo;

    //display the result
    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = mul;
}
function divide() {
    //Get numbers from DOM
    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;

    //turn into integers
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    if (numberOne == 0 || numberTwo == 0) {
        //Error Message
        let resultDiv = document.getElementById('results');
        resultDiv.innerHTML = 'Cannot divide by Zero';

    } else {
        // add the first and second numbers
        let div = numberOne / numberTwo;

        //display the result
        let resultDiv = document.getElementById('results');
        resultDiv.innerHTML = div;
    }

}
function sumAll() {
    //Get string from document
    let numberString = document.getElementById('numberSeries').value;

    let numberArray = numberString.split(''); // = ['1', '2', '3', '4', ....]

    let sum = 0;

    for (let i = 0; i < numberArray.length; i++) {
        let currentNumber = numberArray[i];

        currentNumber = parseInt(currentNumber);

        sum += currentNumber;
    }

    //display the result
    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = sum;
}
function multiplyAll() {
    //Get string from document
    let numberString = document.getElementById('numberSeries').value;

    let numberArray = numberString.split(''); // = ['1', '2', '3', '4', ....]

    let mult = 1;

    for (let i = 0; i < numberArray.length; i++) {
        let currentNumber = numberArray[i];

        currentNumber = parseInt(currentNumber);

        mult = mult * currentNumber;
    }

    //display the result
    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = mult;
}
function minimum() {
    //Get string from document
    let numberString = document.getElementById('numberSeries').value;

    let numberArray = numberString.split(''); // = ['1', '2', '3', '4', ....]

    let min = parseInt(numberArray[0]);

    for (let i = 0; i < numberArray.length; i++) {
        let currentNumber = numberArray[i];

        currentNumber = parseInt(currentNumber);

        if (currentNumber < min) {
            min = currentNumber;
        }
    }

    //display the result
    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = min;
}
function maximum() {
    //Get string from document
    let numberString = document.getElementById('numberSeries').value;

    let numberArray = numberString.split(''); // = ['1', '2', '3', '4', ....]

    let max = parseInt(numberArray[0]);

    for (let i = 0; i < numberArray.length; i++) {
        let currentNumber = numberArray[i];

        currentNumber = parseInt(currentNumber);

        if (currentNumber > max) {
            max = currentNumber;
        }
    }

    //display the result
    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = max;
}
function average() {
    //Get string from document
    let numberString = document.getElementById('numberSeries').value;

    let numberArray = numberString.split(''); // = ['1', '2', '3', '4', ....]

    let sum = 0;

    for (let i = 0; i < numberArray.length; i++) {
        let currentNumber = numberArray[i];

        currentNumber = parseInt(currentNumber);

        sum += currentNumber;
    }

    let average = sum / numberArray.length
    average = average.toFixed(3);

    //display the result
    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = average;
}