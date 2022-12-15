interface Person{
    firstName: string,
    lastName: string,
    age: number,
    city?: string  // the ? sign means that this key can be kept without value. 

}

let user: Person = {
    firstName: "Alaa",
    lastName: "Aldandachi",
    age: 37

}
function showName(person: Person){
    console.log(person.lastName);
}

showName(user)

interface Book {
    title: string,
    author: string,
    numPages: number
}

const books: Book[]= [];
const book: Book = {title: "Game of thrones", author: "Martin", numPages: 1000};
const book2: Book = {title: "Red house", author: "All", numPages: 240};

books.push(book);
books.push(book2);
console.log(books)
