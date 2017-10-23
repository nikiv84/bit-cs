'var strict';

(function () {

    function createMovie(name, genre, length) {
        return new Movie(name, new Genre(genre), length);
    }
    var prog = new Program(new Date());
    var prog2 = new Program(new Date());
    prog.addMovie(createMovie("Lord Of The Rings", "epska fantastika", 540));
    prog.addMovie(createMovie("Inception", "triler", 120));
    prog2.addMovie(createMovie("The Godfather", "drama", 120));
    prog2.addMovie(createMovie("Shutter Island", "triler", 140));

    var fest = new Festival("FEST");
    fest.addProgram(prog);
    fest.addProgram(prog2);
    console.log(fest.getData());

    prog.removeMovie(1);

    console.log(fest.getData());

    prog2.removeMovie(2);
    console.log(fest.getData());

    prog.removeMovie(1);
    console.log(fest.getData());

    fest.removeProgram(1);
    console.log(fest.getData());
})();

function Genre(name) {
    this.name = name;
    this.getData = function () {
        return (this.name.charAt(0) + this.name.charAt(this.name.length - 1)).toUpperCase();
    };
}

function Movie(name, genre, mLength) {
    this.name = name;
    this.genre = genre;
    this.mLength = mLength;
    this.getData = function () {
        return this.name + ", " + this.mLength + ", " + this.genre.getData();
    };
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumOfMovies = 0;
    this.totalLength = 0;

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.totalNumOfMovies++;
        this.totalLength += movie.mLength;
    };

    this.removeMovie = function (i) {
        if (i > 0 && typeof i == "number") {
            var removed = this.listOfMovies.splice(i - 1, 1);
            this.totalNumOfMovies--;
            this.totalLength -= removed[0].mLength;
        }
    }

    this.getData = function () {
        var output = '';
        output += "Date: " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", Program length: " + this.totalLength + "min\n";
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            // if (i == this.listOfMovies.length - 1) {
            //     output += "\t\t" + (i + 1) + ". " + movie.getData();
            //     break;
            // }
            output += "\t\t" + (i + 1) + ". " + movie.getData() + "\n";
        }
        return output;
    };
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.totalNumOfMovies = function () {
        var numMovies = 0;
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            var program = this.listOfPrograms[i];
            numMovies += program.totalNumOfMovies;
        }
        return numMovies;
    };
    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
    };
    this.removeProgram = function (i) {
        if (i > 0 && typeof i == "number") {
            this.listOfPrograms.splice(i - 1, 1);
        }
    };
    this.getData = function () {
        var output = '';
        output += "Festival: " + this.name + ", Number of movies: " + this.totalNumOfMovies() + "\n";

        for (var i = 0; i < this.listOfPrograms.length; i++) {
            var program = this.listOfPrograms[i];
            if (program.listOfMovies.length < 1) {
                output += "\t" + program.getData();
                output += "\t\tThere are no movies on this day.\n\n";
                continue;
            }
            if (i == this.listOfPrograms.length - 1) {
                output += "\t" + program.getData();
                break;
            }
            output += "\t" + program.getData() + "\n";
        }
        return output;
    };
}