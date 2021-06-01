import { v4 as uuidv4 } from "uuid";

const bookInput = document.querySelector("[data-book-input]");
const authorInput = document.querySelector("[data-author-input]");
const selectInput = document.querySelector("[data-select-input]");

let books = [];

const loadBooks = () => {
	const booksJSON = localStorage.getItem("books");

	try {
		return booksJSON ? JSON.parse(booksJSON) : [];
	} catch (e) {
		return [];
	}
};

const saveBooks = () => localStorage.setItem("books", JSON.stringify(books));

books = loadBooks();
const getBooks = () => books;

const submitBook = () => {
	const bookId = uuidv4();
	if (bookInput.value === "" || authorInput.value === "") return;

	books.push({
		bookName: bookInput.value,
		authorName: authorInput.value,
		bookId: bookId,
		read: selectInput.value,
	});
	saveBooks();
	bookInput.value = "";
	authorInput.value = "";
	return bookId;
};

const removeBook = bookId => {
	const book = books.findIndex(book => book.bookId === bookId);

	if (book > -1) {
		books.splice(book, 1);
		saveBooks();
	}
};

export { getBooks, submitBook, removeBook, saveBooks };
