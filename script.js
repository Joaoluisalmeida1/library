document.addEventListener("DOMContentLoaded", function() {
    const myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    function addBookToLibrary(book) {
        myLibrary.push(book);
    }

    function displayLibrary() {
        const libraryDiv = document.querySelector('.book-boxes');
        libraryDiv.innerHTML = ''; // Clear previous content

        myLibrary.forEach((book, index) => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? 'Read' : 'Not Read yet'}</p>
                <button class="toggle-btn" data-index="${index}">Toggle Read Status</button>
                <button class="remove-btn" data-index="${index}">Remove Book</button>
            `;
            libraryDiv.appendChild(bookCard);
        });
    }

    function toggleReadStatus(index) {
        const book = myLibrary[index];
        if (book) {
            book.read = !book.read;
            displayLibrary(); // Update the display
        }
    }

    function removeBook(index) {
        myLibrary.splice(index, 1); // Remove the book from the library array
        displayLibrary(); // Update the display
    }

    // Event delegation to handle clicks on the toggle and remove buttons
    document.querySelector('.book-boxes').addEventListener('click', function(event) {
        const index = event.target.getAttribute('data-index');
        if (event.target.classList.contains('toggle-btn')) {
            toggleReadStatus(index);
        } else if (event.target.classList.contains('remove-btn')) {
            removeBook(index);
        }
    });

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
