// 1. Class Definition
class Employee {
    constructor(name, email, age, department, position, salary) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.department = department;
      this.position = position;
      this.salary = salary;
    }
  
    // 2. Methods in the Class
    greet() {
      console.log("Hello, I am ", this.name, ",", this.position);
    }
  
    displaySalary() {
      console.log("My salary is $", this.salary);
    }
  }
  
  // 3. Creating Objects
  let newEmployee = new Employee(
    "Bhuvan Raj DJ",
    "bhuvanrajdj@gmail.com",
    21,
    "CSE",
    "Senior executive officer",
    3000000
  );
  
  let manager = new Employee(
    "Bhuvan",
    "bhuvan@gmail.com",
    21.5,
    "CSE",
    "Manager",
    6000000
  );
  
  // 4. Logging Objects to the Console
  console.log(newEmployee);
  console.log(manager);
  
  // 5. Calling Methods
  newEmployee.greet();
  newEmployee.displaySalary();
  
  manager.greet();
  manager.displaySalary();
  