// create a class
// construct a queue

// push null values

// enqueue
// if contents is null. 
class NewsFeed {
    constructor(silo) {
        this.articles = new Array(silo);
        this.read = 0;
        this.write = 0;
    }
    print() {
        return this.articles;
    }
    enqueue(piece) {
        var write = this.articles[this.write];

        if(!write) {
            // cat memes
            var hire = new Journalist();
            hire.write(piece);
            this.articles[this.write] = hire.article;
            this.write++;

            if(this.articles.length < this.write) {
                this.write = 0;
            } else {
                return this.article;
            }
        }
        return null;
    }
}
class Journalist {
    constructor() {
        this.article = null;
    }
    write(summary) {
        this.article = summary;
    }
}

const news = new NewsFeed(1);
news.enqueue("123");
