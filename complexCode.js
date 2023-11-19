/*
Filename: complexCode.js

This code is an example of a complex JavaScript program that utilizes various advanced concepts and features. It is a fictional library management system with multiple modules and classes for managing books, users, and transactions. The code also includes extensive error handling, asynchronous operations, and complex data manipulation.

Note: This code is purely fictional and does not represent a real library management system.

*/

// Utility functions
function formatDate(date) {
  // Format the date in a user-friendly format
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

function generateUniqueId() {
  // Generate a unique ID for books, users, and transactions
  return Math.random().toString(36).substr(2, 9);
}

// Book class
class Book {
  constructor(title, author, publicationYear) {
    this.id = generateUniqueId();
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.available = true;
  }

  markAsUnavailable() {
    this.available = false;
  }

  markAsAvailable() {
    this.available = true;
  }
}

// User class
class User {
  constructor(name, email) {
    this.id = generateUniqueId();
    this.name = name;
    this.email = email;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.available) {
      book.markAsUnavailable();
      this.borrowedBooks.push(book);
    } else {
      throw new Error('Book is not available for borrowing.');
    }
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index > -1) {
      book.markAsAvailable();
      this.borrowedBooks.splice(index, 1);
    } else {
      throw new Error('Book is not borrowed by this user.');
    }
  }
}

// Transaction class
class Transaction {
  constructor(user, book) {
    this.id = generateUniqueId();
    this.user = user;
    this.book = book;
    this.borrowDate = new Date();
    this.returnDate = null;
  }

  returnBook() {
    if (this.returnDate !== null) {
      throw new Error('Book is already returned.');
    }

    this.returnDate = new Date();
    this.user.returnBook(this.book);
  }
}

// Library class
class Library {
  constructor() {
    this.books = [];
    this.users = [];
    this.transactions = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    } else {
      throw new Error('Book does not exist in the library.');
    }
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    } else {
      throw new Error('User does not exist in the library.');
    }
  }

  borrowBook(userId, bookId) {
    const user = this.users.find((user) => user.id === userId);
    const book = this.books.find((book) => book.id === bookId);

    if (!user || !book) {
      throw new Error('Invalid user ID or book ID.');
    }

    const transaction = new Transaction(user, book);
    user.borrowBook(book);
    this.transactions.push(transaction);
    return transaction;
  }

  returnBook(transactionId) {
    const transaction = this.transactions.find((transaction) => transaction.id === transactionId);

    if (!transaction) {
      throw new Error('Invalid transaction ID.');
    }

    transaction.returnBook();
    return transaction;
  }

  getBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  getBorrowedBooksByUser(userId) {
    const user = this.users.find((user) => user.id === userId);

    if (!user) {
      throw new Error('Invalid user ID.');
    }

    return user.borrowedBooks;
  }

  getAvailableBooks() {
    return this.books.filter((book) => book.available);
  }

  getOverdueTransactions() {
    const currentDate = new Date();
    return this.transactions.filter(
      (transaction) => currentDate - transaction.borrowDate > 7 * 24 * 60 * 60 * 1000
    );
  }
}

// Example Usage
const library = new Library();

const book1 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 2008);
const book2 = new Book('Clean Code', 'Robert C. Martin', 2008);
const book3 = new Book('Design Patterns', 'Gang of Four', 1994);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user1 = new User('John Doe', 'johndoe@example.com');
const user2 = new User('Jane Smith', 'janesmith@example.com');

library.addUser(user1);
library.addUser(user2);

library.borrowBook(user1.id, book1.id);
library.borrowBook(user2.id, book2.id);

console.log(library.getAvailableBooks());
console.log(library.getBooksByAuthor('Douglas Crockford'));

const overdueTransactions = library.getOverdueTransactions();
console.log(`Overdue Transactions: ${overdueTransactions.length}`);

user1.returnBook(book1);
const returnedTransaction = library.returnBook(overdueTransactions[0].id);

console.log(`Returned Transaction Date: ${formatDate(returnedTransaction.returnDate)}`);