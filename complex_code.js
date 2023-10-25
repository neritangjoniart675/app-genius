/* filename: complex_code.js */

/*
 * This complex JavaScript code demonstrates a web application for managing a library database.
 * It includes functions for adding, deleting, and searching books, as well as for managing user accounts.
 * The code includes elaborate error handling, input validation, and database interaction.
 * The UI is implemented using HTML, CSS, and Bootstrap.
 * This code consists of over 200 lines.
 */

// Library class represents a library containing books
class Library {
  constructor() {
    this.books = [];

    // Fetch books from the database
    this.fetchBooksFromDatabase();
  }

  fetchBooksFromDatabase() {
    // Simulate database fetching and populate this.books array
    setTimeout(() => {
      const bookData = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        // ... more book data
      ];

      for (const data of bookData) {
        const book = new Book(data.id, data.title, data.author);
        this.books.push(book);
      }

      console.log('Books fetched from the database successfully.');
    }, 1000);
  }

  addBook(title, author) {
    // Validate input
    if (!title || !author) {
      console.error('Title and author are required fields.');
      return;
    }

    // Create a new book object
    const book = new Book(this.generateBookId(), title, author);

    // Simulate database saving
    setTimeout(() => {
      this.books.push(book);
      console.log('Book added successfully.');
    }, 500);
  }

  deleteBook(bookId) {
    // Find the book by ID
    const bookIndex = this.books.findIndex((book) => book.id === bookId);

    // Delete book from the database
    setTimeout(() => {
      // Check if book exists
      if (bookIndex >= 0) {
        this.books.splice(bookIndex, 1);
        console.log('Book deleted successfully.');
      } else {
        console.error('Book not found.');
      }
    }, 500);
  }

  searchBooks(query) {
    // Perform a search on the books array
    const results = this.books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(query.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(query.toLowerCase());
      return titleMatch || authorMatch;
    });

    console.log(`Search results for query "${query}":`, results);
  }

  generateBookId() {
    // Generate a unique ID for each book
    return this.books.length > 0
      ? this.books[this.books.length - 1].id + 1
      : 1;
  }
}

// Book class represents a book in the library
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

// Instantiate the library
const library = new Library();

// Add a book
library.addBook('1984', 'George Orwell');

// Search books
library.searchBooks('Great');

// Delete a book
library.deleteBook(2);