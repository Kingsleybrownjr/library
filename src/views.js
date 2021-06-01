import { getBooks, removeBook } from "./books";

const renderBookList = () => {
	const tbody = document.querySelector(".tbody");
	let numberOfBook = 1;

	const books = getBooks();

	tbody.innerHTML = "";

	books.forEach(book => {
		const tr = document.createElement("tr");
		const th = document.createElement("th");
		const authorsTitle = document.createElement("td");
		const booksTitle = document.createElement("td");
		const readBtnEl = document.createElement("td");
		const readBtn = document.createElement("button");
		const deleteBtnEl = document.createElement("td");
		const deleteBtn = document.createElement("button");

		th.setAttribute("score", "row");

		readBtn.classList.add("btn", "btn-dark");
		deleteBtn.classList.add("btn", "btn-danger");

		th.textContent = numberOfBook;
		booksTitle.textContent = book.bookName;
		authorsTitle.textContent = book.authorName;
		readBtn.textContent = book.read;
		deleteBtn.textContent = "Delete";

		readBtnEl.appendChild(readBtn);
		deleteBtnEl.appendChild(deleteBtn);

		tr.appendChild(th);
		tr.appendChild(booksTitle);
		tr.appendChild(authorsTitle);
		tr.appendChild(readBtnEl);
		tr.appendChild(deleteBtnEl);
		tbody.appendChild(tr);
		numberOfBook += 1;

		toggleRead(readBtn);

		deleteBtn.addEventListener("click", e => {
			removeBook(book.bookId);
			renderBookList();
		});
	});
};

const toggleRead = button => {
	button.addEventListener("click", e => {
		if (e.target.textContent === "Read") {
			e.target.textContent = "Not Read";
		} else if (e.target.textContent === "Not Read") {
			e.target.textContent = "Read";
		}
	});
};

export { renderBookList };
