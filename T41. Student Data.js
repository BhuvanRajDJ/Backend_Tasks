var student = {};

student.name = "Bhuvan Raj DJ";
student.email = "bhuvanrajdj@gmail.com";
student.age = 21;

console.log(student.name);
//Update the student age
student.age = 10;
console.log(student.age);
//Add Method and Nested Object to student

student.greet = function () {
  console.log("Hello " + this.name);
};
student.greet();

//Accessing nested object
student.address = {
  country: "India",
  city: "Mysore",
  pin_code: "570028",
};
console.log(student.address.country);

student.address.pin_code = "57199";

console.log(student.address);

//Create and Populate the friend Object
//new object named friend
let friend = {
  name: "Mohamad Parveez",
  email: "mohamadparveez@gmail.com",
  age: 21,

  address: {
    country: "India",
    city: "Mysore",
    pin_code: "570028",
  },
  //New method named greet
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};
//call the greet method for friend
friend.greet();

//Log the friend object
console.log("Friend Object: ", friend);

//Create and Populate the topper Object
let topper = {
  name: "Bhuvan Raj DJ",
  email: "bhuvanrajdj@gmail.com",
  age: 21,
  address: {
    country: "India",
    city: "Mysore",
    pin_code: "570028",
  },
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};

topper.greet();
console.log("Topper details ", topper);

//Define and Use the Student Class:
class Student {
  constructor(name, email, age, country, city, pin_code) {
    this.name = name;
    this.eamil = email;
    this.age = age;
    this.address = {
      country: country,
      city: city,
      pin_code: pin_code,
    };
  }
  greet = function () {
    console.log("Hello, " + this.name + "!");
  };
  getFullAddress = function () {
    console.log(
      this.address.country,
      ",",
      this.address.city,
      "-",
      this.address.pin_code
    );
  };
}

//Create Student Objects
let me = new Student(
  "Bhuvan",
  "bhuvan@gamil,com",
  21,
  "India",
  "Mysore",
  570028
);
let friend2 = new Student(
  "Zainuddin",
  "zainuddinkhan.@gmail.com",
  21,
  "India",
  "Mysore",
  570028
);
let student2 = new Student(
  "Mallaiah S Odeyar",
  "mallaiah@gmail.com",
  21,
  "India",
  "Kottur",
  570028
);

// Log Student Objects
console.log("me ", me);
console.log("friend2 ", friend2);
console.log("student2", student2);

//Call the greet Method and getFullAddress Method on Student Objects
me.greet();
friend2.greet();
student2.greet();

//Call the greet Method and getFullAddress Method on Student Objects
me.getFullAddress();
friend2.getFullAddress();
student2.getFullAddress();