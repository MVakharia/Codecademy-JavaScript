class Media {
    constructor (title = "") {
        this._title = title;

        this._isCheckedOut = false;

        this._ratings = [];
    }

    get title () {
        return this._title;
    }

    get isCheckedOut () {
        return this._isCheckedOut;
    }

    get ratings () {
        return this._ratings;
    }

    set isCheckedOut (value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus () {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating () {
         let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);

         return ratingSum / this.ratings.length;
    }

    addRating (rating) {
        this.ratings.push(rating);
    }

}

class Book extends Media {
    constructor (author = "", title = "", pages = 0) {
        super(title);

        this._author = author;

        this._pages = pages;
    }

    get author () {
        return this._author;
    }
    get pages () {
        return this._pages;
    }
}

class Movie extends Media {
    constructor (director = "", title = "", runtime = 0) {
        super(title);

        this._director = director;

        this._runtime = runtime;
    }

    get director () {
        return this._director;
    }

    get runtime () {
        return this._runtime;
    }
}

class CD extends Media {
    constructor (artist = "", title = "", songs = [""]) {
        super(title);

        this._artist = artist;

        this._songs = songs;
    }

    get artist () {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

let hybridTheory = new CD();

console.log(hybridTheory.getAverageRating());

console.log(hybridTheory.title)

console.log(hybridTheory.isCheckedOut);

let historyOfEverything =
    new Book('Bill Bryson', 'A Short History Of Nearly Everything', 544);

console.log(historyOfEverything.title);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);

historyOfEverything.addRating(5);

historyOfEverything.addRating(5);

console.log(historyOfEverything.ratings);

console.log(historyOfEverything.getAverageRating());

let speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);

speed.addRating(1);

speed.addRating(5);

console.log(speed.getAverageRating());

/*

* Extra tasks for the future:
*
* Nice work! If you’ve made it this far, you clearly have a strong understanding of class syntax and inheritance.

If you would like to continue working on this project, we have listed some avenues to build on your existing progress.

Add more properties to each class (movieCast, songTitles, etc.), and getters to access them
Create a CD class that extends Media.
In .addRating(), make sure the input is between 1 and 5.
Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
Create a class called 'Catalog' that holds all the Media items in our library.
*
* */