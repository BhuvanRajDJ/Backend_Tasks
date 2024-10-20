//a. Define the Array of Cart Items
const cart = [
    { name: "Soap", price: 100, quantity: 10 },
    { name: "Shampoo", price: 1012, quantity: 1 },
    { name: "Comb", price: 10002, quantity: 10 },
    { name: "Trimmer", price: 10910, quantity: 12 },
    { name: "Bottel", price: 1001, quantity: 100 },
    { name: "FaceWash", price: 10897, quantity: 10 },
  ];
  
  //b. Define the calculateTotalPrice Function Using forEach
  
  function calculateTotalPrice(cartItems) {
    let Total_Price = 0;
    cartItems.forEach(function (item) {
      Total_Price += item.price * item.quantity;
    });
    return Total_Price;
  }
  
  //Call the calculateTotalPrice Function:
  console.log(calculateTotalPrice(cart));