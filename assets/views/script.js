function vForm() {
	myList = new bookList();
	let title = document.getElementById("title");
	let genre = document.getElementById("genre");
	let author = document.getElementById("author");
	let section = document.getElementById("completeList");
	let button = document.getElementById("submit");

	button.addEventListener("click", () => {
		if (validate(title.value, genre.value, author.value)) {
			a = new book(title.value, genre.value, author.value);
			myList.add(a);

			let newArticle = document.createElement("article");
			newArticle.className = "book";
			let titleArticle = document.createElement("h3");
			titleArticle.textContent = title.value;
			let genreArticle = document.createElement("p");
			genreArticle.className = "genre";
			genreArticle.textContent = genre.value;
			let authorArticle = document.createElement("p");
			authorArticle.className = "author";
			authorArticle.textContent = author.value;
			let infoArticle = document.createElement("p");
			infoArticle.className = "info";
			infoArticle.textContent = a.isRead() ? "read" : "not read";
			newArticle.appendChild(titleArticle);
			newArticle.appendChild(genreArticle);
			newArticle.appendChild(authorArticle);
			newArticle.appendChild(infoArticle);
			newArticle.posicion = myList.todos.length - 1;
			section.appendChild(newArticle);
		}
	});

	section.addEventListener("click", (e) => {
		read(e);
	});
}
function validate(title, genre, author) {
	if (
		title != null &&
		title != "" &&
		genre != null &&
		genre != "" &&
		author != null &&
		author != ""
	) {
		return true;
	} else {
		return false;
	}
}
function read(e) {
	let titleElement = e.target.parentNode.querySelector("h3");
	let title = titleElement.textContent;
	let clickedBook = myList.todos.find((item) => item.title == title);
	if (e.target.className === "info") {
		clickedBook.changeRead();
		let infoElement = e.target.parentNode.querySelector(".info");
		infoElement.textContent = clickedBook.isRead() ? "read" : "not read";
	}
}
