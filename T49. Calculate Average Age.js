// a. Define the Array of People:

const people = [
  { name: "Bhuvan Raj DJ", age: 21 },
  { name: "Ifra Fathima", age: 22 },
  { name: "Javed Akthar", age: 24 },
  { name: "Keerthi", age: 21 },
  { name: "Poornima", age: 21 },
  { name: "Rutuja", age: 21 },
  { name: "Shreyas", age: 22 },
];

// b. Define the calculateAverageAge Function Using forEach:

function calculateAverageAge(peoples) {
  let sum = 0;
  peoples.forEach(function (person) {
    sum += person.age;
  });
  average = sum / people.length;
  return average;
}

//c. Call the calculateAverageAge Function:
console.log(calculateAverageAge(people));
