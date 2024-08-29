const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    const readStatus = this.read ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach(book => {
        console.log(book.info());
    })
}