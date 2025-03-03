//TASK 1

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // sets book title
        this.author = author; // sets book author
        this.isbn = isbn; // sets book isbn number
        this.copies = copies; // sets number of available copies
    }

    getDetails() { // returns book details
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity){ // updates number of copies available
        this.copies += quantity;
    }
} 

// Test Cases

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//TASK 2

class Borrower {
    constructor(name, borrowerId) {
        this.name = name; // sets borrower name
        this.borrowerId = borrowerId; // sets borrower ID
        this.borrowedBooks = []; // stores borrowed book titles
    }

    borrowBook(bookTitle) { // adds a book to borrowed list
        this.borrowedBooks.push(bookTitle);
    }

    returnBook(bookTitle) { // removes a book from borrowed list
        this.borrowedBooks = this.borrowedBooks.filter(book => book !== bookTitle);
    }
}

// Test Cases
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

//TASK 3, 4, 5

class Library {
    constructor () {
        this.books = []; // stores book instances
        this.borrowers = []; // stores borrower instances
    }

    addBook(book) { // adds new book to library
        this.books.push(book);
    }

    listBooks() { // logs all book details
        this.books.forEach(book => console.log(book.getDetails()));
    }

    lendBook(borrowerId, isbn) { // allows borrower to borrow book
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.getBorrower(borrowerId);

        if (book && book.copies > 0 && borrower) { // checks if book exists
            book.updateCopies(-1); // reduces book copies
            borrower.borrowBook(book.title); // updates borrower list
        }
    }

    returnBook(borrowerId, isbn) { // allows borrower to return book
        const book = this.books.find(b => b.isbn === isbn); // finds book
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId); // finds borrower

        if (book && borrower && borrower.borrowedBooks.includes(book.title)) { // checks to see if return if valid
            book.updateCopies(1); // increases book copies
            borrower.returnBook(book.title); // updates borrower list
        }
    }

    getBorrower(borrowerId) { // finds borrower or makes new one
        let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        if (!borrower) {
            borrower = new Borrower(`Borrower ${borrowerId}`, borrowerId); // creates new borrower
            this.borrowers.push(borrower);
        }
        return borrower;
    }
}

// Test Cases Task 3

const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Test Cases Task 4

library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

// Test Cases Task 5 

library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []