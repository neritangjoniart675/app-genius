/*
Filename: ComplexApplication.js
Description: This code represents a complex and sophisticated application that manages a company's employee data including their personal information, salary details, and performance evaluations.

Author: [Your Name]
Date: [Current Date]

*/

// Employee Class
class Employee {
  constructor(name, age, address, department) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.department = department;
  }

  toString() {
    return `${this.name}, ${this.age}, ${this.address}, ${this.department}`;
  }
}

// Salary Class
class Salary {
  constructor(employee, amount, currency) {
    this.employee = employee;
    this.amount = amount;
    this.currency = currency;
  }

  toString() {
    return `${this.employee}: ${this.amount} ${this.currency}`;
  }
}

// Performance Evaluation Class
class PerformanceEvaluation {
  constructor(employee, rating, comment) {
    this.employee = employee;
    this.rating = rating;
    this.comment = comment;
  }

  toString() {
    return `${this.employee}: Rating ${this.rating} - ${this.comment}`;
  }
}

// Company Class
class Company {
  constructor(name) {
    this.name = name;
    this.employees = [];
    this.salaries = [];
    this.performanceEvaluations = [];
  }

  hireEmployee(employee) {
    this.employees.push(employee);
  }

  fireEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  setSalary(employee, amount, currency) {
    const salary = new Salary(employee, amount, currency);
    this.salaries.push(salary);
  }

  evaluatePerformance(employee, rating, comment) {
    const evaluation = new PerformanceEvaluation(employee, rating, comment);
    this.performanceEvaluations.push(evaluation);
  }

  getEmployeeByName(name) {
    return this.employees.find(employee => employee.name === name);
  }

  getEmployeesByDepartment(department) {
    return this.employees.filter(employee => employee.department === department);
  }

  getTotalSalaries() {
    return this.salaries.reduce((total, salary) => total + salary.amount, 0);
  }

  getHighestRatedEmployee() {
    let highestRating = 0;
    let highestRatedEmployee = null;

    for (const evaluation of this.performanceEvaluations) {
      if (evaluation.rating > highestRating) {
        highestRating = evaluation.rating;
        highestRatedEmployee = evaluation.employee;
      }
    }

    return highestRatedEmployee;
  }
}

// Usage example
const company = new Company("ACME Corp");

const john = new Employee("John Doe", 30, "123 Main Street", "Engineering");
const jane = new Employee("Jane Smith", 35, "456 Elm Street", "Marketing");
const mike = new Employee("Mike Johnson", 25, "789 Oak Street", "Sales");

company.hireEmployee(john);
company.hireEmployee(jane);
company.hireEmployee(mike);

company.setSalary(john, 5000, "USD");
company.setSalary(jane, 4500, "USD");
company.setSalary(mike, 4000, "USD");

company.evaluatePerformance(john, 8, "Excellent work");
company.evaluatePerformance(jane, 7, "Great job");
company.evaluatePerformance(mike, 6, "Good performance");

console.log("--- Employee Data ---");
console.log(company.getEmployeeByName("John Doe").toString());
console.log(company.getEmployeeByName("Jane Smith").toString());
console.log(company.getEmployeeByName("Mike Johnson").toString());

console.log("--- Department Employees ---");
console.log(company.getEmployeesByDepartment("Engineering"));
console.log(company.getEmployeesByDepartment("Marketing"));

console.log("--- Total Salaries ---");
console.log(company.getTotalSalaries());

console.log("--- Highest Rated Employee ---");
console.log(company.getHighestRatedEmployee().toString());