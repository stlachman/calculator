var numbers = [].slice.call(document.querySelectorAll(".numbers div"));

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click",  getValue);
}

// function init() {
//   init.called = true;
// }


function getValue(e) {
  var value = e.target.innerText;
  updateBar(value)
}

function updateBar(value) {
  var numberField = document.querySelector(".number");
  if  (numberField.innerText === '0')  {
    numberField.innerText = value;
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
  console.log(currentValue);
  var operation = e.target.className;
  // init();
  switch (operation) {
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