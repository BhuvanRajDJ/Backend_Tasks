//Define the Book Class:
// Define a class named Book that takes parameters for title, author, publisher,
// year, and genre.
// ■ Inside the class's constructor, set these parameters as properties of the book
// object.

class Book {
  constructor(title, author, publisher, year, genre) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.genre = genre;
  }
  //Add Methods to the Book Class:
  describe = function () {
    return console.log(this.title, "-", this.author, "(", this.year, ").");
  };

  displayGenre = function () {
    return console.log("Genere:", this.genre);
  };
}
//Create and Log book Objects
let classicBook = new Book(
  "Pride and Prejudice",
  "Jane Austen",
  "T. Egerton",
  1813,
  "Classic"
);
let sciFiBook = new Book(
  "Dune",
  " Frank Herbert",
  "Chilton Books",
  1965,
  "Science Fiction"
);

console.log(classicBook);
console.log(sciFiBook);
//Call Methods on book Objects
classicBook.describe();
sciFiBook.displayGenre();
