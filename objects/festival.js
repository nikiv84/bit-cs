'var strict';

(function () {

    function createMovie(name, genre, length) {
        if (typeof length !== "number") {
            // throw new Error("Length is not a number");
            return;
        }
        return new Movie(name, new Genre(genre), length);
    }

    var prog = new Program(new Date());
    var prog2 = new Program(new Date());
    prog.addMovie(createMovie("Lord Of The Rings", "epska fantastika", 100));
    prog.addMovie(createMovie("Inception", "triler", 120));
    prog2.addMovie(createMovie("The Godfather", "drama", 120));
    prog2.addMovie(createMovie("Shutter Island", "triler", 140));
    var vanilla = createMovie("Vanilla Sky", "triler", 20);
    prog2.addMovie(vanilla);
    var bInstinct = createMovie("Basic Instinct", "akcija", 50);
    prog2.addMovie(bInstinct);

    var fest = new Festival("FEST");
    fest.addProgram(prog);
    fest.addProgram(prog2);
    console.log(fest.getData());

    // prog.removeMovie(1);

    // console.log(fest.getData());

    // prog2.removeMovie(2);
    // console.log(fest.getData());

    // prog.removeMovie(1);
    // console.log(fest.getData());

    // fest.removeProgram(1);
    // console.log(fest.getData());
})();

function Genre(name) {
    this.name = name;
    this.getData = function () {
        return (this.name.charAt(0) + this.name.charAt(this.name.length - 1)).toUpperCase();
    };
}

function Movie(name, genre, mLength) {
    this.name = name;
    this.mLength = mLength;
    this.genre = genre;
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
        if (typeof movie == "undefined") {
            return;
        }
        if (this.totalLength + movie.mLength >= 480 || movie.mLength <= 0) {
            return;
        }
        var genreCounter = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movieGenre = this.listOfMovies[i].genre.getData();
            if (movieGenre == movie.genre.getData()) {
                genreCounter++;
            }
        }

        if (genreCounter >= 2) {
            return "Cannot add new movies.";
        }
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
        output += "Date: " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() +
        ", Program length: " + this.totalLength + "min\n";
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
    // this.totalNumOfMovies = function () {
    //     var numMovies = 0;
    //     for (var i = 0; i < this.listOfPrograms.length; i++) {
    //         var program = this.listOfPrograms[i];
    //         numMovies += program.totalNumOfMovies;
    //     }
    //     return numMovies;
    // };
    this.festMovies = 0;
    this.addProgram = function (program) {
        var maxMovies = 3;
        if (this.festMovies + program.totalNumOfMovies >= maxMovies) {
            var diff = (this.festMovies + program.totalNumOfMovies) - maxMovies;
            for (var i = 0; i < diff; i++) {
                program.listOfMovies.pop();
                program.totalNumOfMovies--;
            }
        }

        this.listOfPrograms.push(program);
        this.festMovies += program.totalNumOfMovies;
    };
    this.removeProgram = function (i) {
        if (i > 0 && typeof i == "number") {
            this.listOfPrograms.splice(i - 1, 1);
        }
    };
    this.getData = function () {
        var output = '';
        if (this.listOfPrograms.length < 1) {
            return output = "Weekend festival\n\t\tProgram to be announced";
        }
        output += "Festival: " + this.name + ", Number of movies: " + this.festMovies + "\n";

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