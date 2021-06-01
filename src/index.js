import { renderBookList } from "./views";
import { submitBook } from "./books";

const form = document.querySelector(".main-form");

renderBookList();

form.addEventListener("submit", e => {
	e.preventDefault();
	submitBook();
	renderBookList();
});


