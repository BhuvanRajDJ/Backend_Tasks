//a. Define and Initialize the Array
temperature = [-3, 14, 22, 5, -10];
//b. Iterate and Log Using forEach():
//call back function as the function expression
const temper = temperature.forEach(function (temp) {
  return console.log(temp);
});
console.log("call back function as the function expression");
//call back function as the arrow function.
temperature.forEach((temp) => console.log(temp));
console.log("//call back function as the arrow function.");

//temperature to Fahrenheit, call back function as the function expression
temperature.forEach(function (temp) {
  return console.log((temp * 9) / 5 + 32);
});
console.log(
  "//temperature to Fahrenheit, call back function as the function expression"
);
//temperature to Fahrenheit, call back function as the arrow function.
temperature.forEach((temp) => console.log((temp * 9) / 5 + 32));
console.log(
  "//temperature to Fahrenheit, call back function as the arrow function."
);

//c. Iterate and Create a New Modified Array Using map():
console.log(" Using map()");
const temperaturesInFahrenheit = temperature.map(function (temp) {
  return (temp * 9) / 5 + 32;
});
console.log(temperaturesInFahrenheit);
console.log("");

const temperaturesInFahrenheita = temperature.map(function (temp) {
  return (temp * 9) / 5 + 32;
});
console.log(temperaturesInFahrenheita);

//d. Iterate and Create a New Filtered Array Using filter()

console.log("");
const belowFreezing = temperature.filter(function (temp) {
  return temp < 0;
});
console.log(belowFreezing);

console.log("");
const belowFreezing1 = temperature.filter((temp) => temp < 0);
console.log(belowFreezing1);