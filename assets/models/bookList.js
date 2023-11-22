class bookList{
    constructor() {
        this.numberOfBooksRead = 0;
        this.numberOfBooksNotRead = 0;
        this.nextBook = null;
        this.currentBook = null;
        this.lastBookRead = null;
        this.todos = [];
    }

    add(book){
        this.todos.push(book);
        this.numberOfBooksNotRead++;
        if(this.currentBook === null){
            this.currentBook = this.todos.length - 1;
        } else if(this.nextBook === null){
            this.nextBook = this.todos.length - 1;
        }
    }
    finishCurrentBook(book){
        if(!book.read){
            this.numberOfBooksRead++;
            this.numberOfBooksNotRead--;
            book.read = true;
            book.date = new Date();
            this.lastBookRead = this.todos.indexOf(book);
            this.currentBook = (this.todos.indexOf(book) < this.todos.length - 1) ? this.todos.indexOf(book) + 1 : null;
            this.nextBook = (this.todos.indexOf(book) < this.todos.length - 2) ? this.todos.indexOf(book) + 2 : null;
        }
    }
    seeLastBook() {
        if (this.lastBookRead !== null && this.lastBookRead < this.todos.length) {
            return this.todos[this.lastBookRead].title;
        } else {
            return "Haven't read book";
        }
    }
    seeCurrentBook() {
        if (this.currentBook !== null && this.currentBook < this.todos.length) {
            return this.todos[this.currentBook].title;
        } else {
            return "Haven't current book";
        }
    }
    seeNextBook() {
        if (this.nextBook !== null && this.nextBook < this.todos.length) {
            return this.todos[this.nextBook].title;
        } else {
            return "Haven't next book";
        }
    }
}