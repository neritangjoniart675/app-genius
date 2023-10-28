/*****************************************
* Filename: ComplexCode.js 
* Content: A complex code demonstrating advanced JavaScript concepts and functionality.
******************************************/

/** 
* Class representing a Person.
* @class
*/
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

/** 
* Class representing an Employee.
* @class
* @extends Person
*/
class Employee extends Person {
  constructor(name, age, gender, position, department) {
    super(name, age, gender);
    this.position = position;
    this.department = department;
  }

  work() {
    return `${this.name} is working as a ${this.position} in the ${this.department} department.`;
  }
}

// Create an instance of the Person class
const person1 = new Person("John Doe", 30, "Male");

// Create an instance of the Employee class
const employee1 = new Employee("Jane Smith", 25, "Female", "Software Developer", "IT");

console.log(person1.greet()); // Output: Hello, my name is John Doe and I am 30 years old.
console.log(employee1.greet()); // Output: Hello, my name is Jane Smith and I am 25 years old.
console.log(employee1.work()); // Output: Jane Smith is working as a Software Developer in the IT department.

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(17)); // Output: true (17 is a prime number)
console.log(isPrime(10)); // Output: false (10 is not a prime number)

// Function to sort an array of numbers in ascending order
function sortArray(array) {
  return array.sort((a, b) => a - b);
}

const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers)); // Output: [1, 2, 5, 8, 9]

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("Hello, world!")); // Output: "!dlrow ,olleH"

// Function to generate a random number between a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10

// Fetch API call to retrieve data from an external API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));

// Example of using arrow functions and array methods
const fruits = ['apple', 'banana', 'orange', 'grape'];

const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "ORANGE", "GRAPE"]

const filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits); // Output: ["banana", "orange"]

/*****************************************
* ... Continue the code with more complex and creative functionality ...
******************************************/
// (Add more code here)