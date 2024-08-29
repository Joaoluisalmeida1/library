document.addEventListener("DOMContentLoaded", function() {


    const myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
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
        const libraryDiv = document.querySelector('.book-boxes');
        libraryDiv.innerHTML = '' //clear previous content

        myLibrary.forEach((book, index) => {
            console.log(book.info());
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <p>${book.pages} pages</p>
                <p>${book.read ? 'Read' : 'Not Read yet'}</p>
                <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
            `;
            libraryDiv.appendChild(bookCard);
        });
    };

    function toggleReadStatus(index) {
        myLibrary[index].read = !myLibrary[index].read;
        displayLibrary(); // update the display
    }

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').checked;

        const newBook = new Book(title, author, pages, read);
        addBookToLibrary(newBook);
        displayLibrary();
        form.reset();
    });
});