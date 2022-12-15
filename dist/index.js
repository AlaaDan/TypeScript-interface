let user = {
    firstName: "Alaa",
    lastName: "Aldandachi",
    age: 37
};
function showName(person) {
    console.log(person.lastName);
}
showName(user);
const books = [];
const book = { title: "Game of thrones", author: "Martin", numPages: 1000 };
const book2 = { title: "Red house", author: "All", numPages: 240 };
books.push(book);
books.push(book2);
console.log(books);
