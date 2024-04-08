function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(renderBooks)
}

function renderBooks(books) {
  console.log(books);
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks()
});

