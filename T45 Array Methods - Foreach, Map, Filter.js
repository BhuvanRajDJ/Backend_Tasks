numbers = [1, 2, 3, 4, 5];
let i = 0;

numbers.forEach(function (num) {
  console.log(num);
});

numbers.forEach(function (num) {
  console.log(num * 2);
});

squaredNmbers = numbers.map((num) => num * num);
console.log(squaredNmbers);

squaredNmbers = numbers.map(function (num) {
  return num * num;
});
console.log(squaredNmbers);

evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
