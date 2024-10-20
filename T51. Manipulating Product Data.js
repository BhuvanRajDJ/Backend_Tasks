//a. Define the Array of Products:
const products = [
  { id: 1, name: "Jeans Pant", price: 1500, category: "Pants" },
  { id: 2, name: "Cotton shirt", price: 1000, category: "-shirts" },
  { id: 3, name: "Leather Jacket", price: 1700, category: "Jackets" },
  { id: 4, name: "Shoes", price: 1200, category: "Footwares" },
  { id: 5, name: "Watch", price: 2000, category: "Accessory" },
  { id: 6, name: "Blutooth", price: 1600, category: "Electronic devices" },
  { id: 7, name: "Banana", price: 10, category: "Fruits" },
  { id: 8, name: "Mango", price: 150, category: "Fruits" },
  { id: 9, name: "Jackfruit", price: 90, category: "Fruits" },
];
//b. Define the displayProducts Function
function displayProducts(productItems) {
  productItems.forEach(function (item) {
    console.log(item.name + " - $" + item.price);
  });
  //c. Calculate and Display Products with Tax
  console.log("");
  console.log("Total Price");
  const productsWithTax = productItems.map(function (item) {
    tax = item.price * 0.1;
    totalprice = tax + item.price;
    return {
      id: item.id,
      name: item.name,
      category: item.category,
      totalprice: totalprice,
    };
  });
  console.log(productsWithTax);
  console.log("");
  console.log("Food produts");
  // d. Filter and Display Food Products
  const foodProducts = productItems.filter(function (item) {
    return item.category == "Fruits";
  });

  console.log("");
  console.log(foodProducts);
  console.log("");

  console.log("lower Prices");
  // e. Find Affordable Products
  const affordableProdocts = productItems.filter(function (item) {
    return item.price < 1000;
  });

  console.log("");
  console.log(affordableProdocts);
  console.log("");

  const affordableProductsStrings = affordableProdocts.map(function (item) {
    return `${item.name} - $${item.price}`;
  });
  console.log(affordableProductsStrings);
  let totalpriceF = 0;
  productsWithTax.forEach(function (price) {
    totalpriceF += price.totalprice;
    return totalpriceF;
  });
  console.log("Total_Price: " + totalpriceF);
}
displayProducts(products);
