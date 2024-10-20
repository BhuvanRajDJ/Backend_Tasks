//Define Callback Functions
function doubleNumber(number) {
    return console.log("double of ", number, "=", 2 * number);
  }
  
  function squareNumber(number) {
    return console.log("Square of ", number, "=", number * number);
  }
  
  function incrementnumber(number) {
    return console.log("Increment of ", number, "=", number + 1);
  }
  
  // Define performOperation Function
  function performOperation(num, operation) {
    operation(num);
  }
  
  // Call performOperation with Callback Functions
  
  performOperation(5, doubleNumber);
  performOperation(5, squareNumber);
  performOperation(5, incrementnumber);