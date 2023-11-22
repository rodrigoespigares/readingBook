class book {
    constructor(title,genre,author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=false;
        this.date=null;
    }
    isRead(){
        return this.read;
    }
    changeRead(){
        this.read = !this.read
    }
}