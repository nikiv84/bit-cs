'var strict';

(function () {

    function createMovie(name, genre, length) {
        var newGenre = new Genre(genre);
        return new Movie(name, newGenre, length);
    }
    var LOTR = createMovie("LOTR", "epska fantastika", 540);
    var inception = createMovie("Inception", "triler", 120);
    var godfather = createMovie("The Godfather", "drama", 120);
    var shutterIsland = createMovie("Shutter Island", "triler", 140);
    var prog = new Program(new Date());
    var prog2 = new Program(new Date());
    prog.addMovie(LOTR);
    prog.addMovie(inception);
    prog2.addMovie(godfather);
    prog2.addMovie(shutterIsland);

    var fest = new Festival("FEST");
    fest.addProgram(prog);
    fest.addProgram(prog2);

    console.log(fest.getData());



})();

function Genre(name) {
    this.name = name;
    this.getData = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    };
}

function Movie(name, genre, length) {
    this.name = name;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
        return this.name + ", " + this.length + ", " + this.genre.getData();
    }

}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumOfMovies = 0;
    this.totalLength = 0;

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.totalNumOfMovies++;
        this.totalLength += movie.length;
    }

    this.getData = function () {
        var output = '';
        output += "Date: " + this.date.getDate() + ", Program length: " + this.totalLength + "\n";

        for (var index = 0; index < this.listOfMovies.length; index++) {
            var movie = this.listOfMovies[index];
            output += "\t\t" + movie.getData() + "\n";
        }

        return output;
    }
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalNumOfMovies = 0;
    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
        this.totalNumOfMovies += program.totalNumOfMovies;
    }
    this.getData = function () {
        var output = '';
        output += "Name: " + this.name + ", Number of movies: " + this.totalNumOfMovies + "\n";

        for (var index = 0; index < this.listOfPrograms.length; index++) {
            var program = this.listOfPrograms[index];
            output += "\t" + program.getData() + "\n";
        }

        return output;

    }

}