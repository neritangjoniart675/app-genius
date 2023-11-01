/*
   Filename: SophisticatedCode.js
   Content: Example of a complex and sophisticated JavaScript code
*/

// Define a class for a Person
class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I work as a ${this.profession}.`);
  }
}

// Create an instance of the Person class
const person1 = new Person("John Doe", 30, "Software Engineer");
person1.introduce();

// Define a helper function to calculate the factorial of a number
function factorial(num) {
  if (num < 0) {
    throw new Error("Factorial cannot be calculated for negative numbers.");
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

try {
  const num = 5;
  const fact = factorial(num);
  console.log(`The factorial of ${num} is: ${fact}`);
} catch (error) {
  console.error(error.message);
}

// Define a generator function to generate Fibonacci sequence
function* fibonacciGenerator() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Create an instance of the Fibonacci sequence generator
const fibonacci = fibonacciGenerator();

// Print the first 10 numbers of the Fibonacci sequence
console.log("First 10 numbers of the Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
  console.log(fibonacci.next().value);
}

// Implement a custom sorting function to sort an array in descending order
function customSort(array) {
  return array.sort((a, b) => b - a);
}

const numbers = [4, 10, 2, 8, 6];
console.log("Original array:", numbers);
console.log("Sorted array (descending order):", customSort(numbers));

// Perform a complex mathematical operation
const result = Math.sin(45) * Math.pow(2, 4) + Math.sqrt(16);
console.log("Result of the complex mathematical operation:", result);

// ... continue with more complex code

// Define a class for a Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

// Create an instance of the Car class
const car1 = new Car("Tesla", "Model S", 2021);
console.log("Car information:", car1.getInfo());

// ... continue with more code

// Finally, run an asynchronous function using Promises
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

const runAsyncTask = async () => {
  console.log("Starting async task...");
  await wait(2000);
  console.log("Async task completed!");
};

runAsyncTask();
