var values = [].slice.call(document.querySelectorAll(".calc div div"));

for (var i = 0; i < values.length; i++) {
  values[i].addEventListener("click",  getValue);
}

function init() {
  init.called = true;
}

var storedNumber = [];

function getValue(e) {
    console.log(e.target.dataset.type)
//   var value = e.target.innerText;
//   updateBar(value)
}

function updateBar(value) {
  var numberField = document.querySelector(".number");
  if  (value.dataset.type === '0')  {
    numberField.innerText = value;
 } else if (init.called) {
    numberField.innerText = '0';
 } else {
    numberField.innerText += value; 
  } 
}

var operators = [].slice.call(document.querySelectorAll(".operators div"));

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click",  getOperator);
}

function getOperator(e) {
  var currentValue = document.querySelector(".number").innerText;
  
  storedNumber.push(currentValue);
  console.log(storedNumber);
//   console.log(currentValue);
  var operator = e.target.dataset.operation;
  init();
  switch (operator) {
   case "divide":
   console.log("divide");
   break;
   case "multiply":
   console.log("multiply");
   break;
   case "subtract":
   console.log("subtract");
   break;
   case "add":
   console.log("add");
   break;
   case "calculate":
   
   break;
   
  }
    
}