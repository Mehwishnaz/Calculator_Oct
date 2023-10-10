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

function back() {
  var value = input.value;
  input.value = value.substr(0, value.length - 1);
}
