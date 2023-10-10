 const input = document.querySelector("#demo");
 const output =document.querySelector("#output");
function calFunction(result) {
  input.value = input.value + result;
}
function rootFunction(result) {
  var x = input.value;
  var a = parseFloat(x) * parseFloat(value) / 100;

  // var a = (x++);
  var res = a;
  output.value = res;
}
function sqrFunction(result) {
  var x = input.value;
  var a = Math.sqrt(x);
  var res = a;
  input.value = res;
}
let currentValue = '';

function updateDisplay(result) {
  currentValue += result;
  document.getElementById('calculator-display').innerText = currentValue;
}

function handleBackButton() {
  currentValue = currentValue.slice(0, -1);
  document.getElementById('').innerText = currentValue;
}

document.getElementById('btn-back').addEventListener('click', handleBackButton);

