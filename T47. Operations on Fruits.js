// a. Define and Initialize the Array
const fruits = ["apple", "banana", "cherry", "date"];

//b. Iterate and Log Using forEach():
console.log("");
fruits.forEach(function (fruit) {
  return console.log(fruit.toUpperCase());
});
console.log("");
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));
console.log("");

// c. Calculate Total Characters Using forEach()
let totalChars = 0;
fruits.forEach(function (fruit) {
  return (totalChars += fruit.length);
});
console.log(totalChars);
console.log("");
console.log("");

//d. Iterate and Create a New Modified Array Using map()
const reversedFruits = fruits.map(function (fruit) {
  return fruit.split("").reverse().join("");
});
console.log(reversedFruits);

const reversedFruits1 = fruits.map((fruit) =>
  fruit.split("").reverse().join("")
);
console.log(reversedFruits);

console.log("");
console.log("");

//e. Iterate and Create a New Filtered Array Using filter():
const longFruits = fruits.filter(function (fruit) {
  return 5 < fruit.length;
});
console.log(longFruits);
console.log("");
console.log("");
const longFruits1 = fruits.filter((fruit) => 5 < fruit.length);
console.log(longFruits1);

// f. Create a New Filtered and Modified Array using filter() and map():

//■ Use the filter method to find fruits that contain the letter 'a'. Write the callback
//function as a function expression.
const letter = fruits.filter(function (fruit) {
  return fruit.includes("a");
});

console.log(letter);

//■ Use the map method to return these fruits in uppercase. Write the callback
// function as a function expression.
const aFruitsUpper = letter.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(aFruitsUpper);