var values = [].slice.call(document.querySelectorAll(".calc div div"));

for (var i = 0; i < values.length; i++) {
  values[i].addEventListener("click",  getValue);
}

// function init() {
//   init.called = true;
// }

var storedValues = [];

function getValue(e) {
  var value = e.target.dataset.type;
  
  if (value.length > 1) {
    getOperator(value);
  } else {
    updateBar(value);
  }
}

function updateBar(value) {
  var numberField = document.querySelector(".number");

  if  (numberField.textContent === '0')  {
    numberField.textContent = value;
   } else {
    numberField.textContent += value; 
  }
}


function getOperator(value) {
  var currentValue = document.querySelector(".number").textContent;
  
  storedValues.push(currentValue);
  console.log(storedValues);
//   console.log(currentValue);
  // init();
  switch (value) {
   case "divide":
   console.log("divide");
   storedValues.push(value);
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