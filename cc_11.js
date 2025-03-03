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