function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
};

Movie.prototype.getInfo = function () {
    return this.title + ", duration: " + this.length + ", genre: " + this.genre;
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumOfMovies = 0;
};

Program.prototype.getData = function () {
    return "Date: " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ".";
};

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];

};

Festival.prototype.totalFestMovies = function () {
    var sum = 0;
    for (var i = 0; i < this.listOfPrograms.length; i++) {
        var prog = this.listOfPrograms[i];
        sum += prog.listOfMovies.length;
    }
    return sum;
};

Festival.prototype.getInfo = function () {
    var output = '';
    if (this.listOfPrograms.length < 1) {
        return output = "Festival program to be announced";
    }
    output += "<p>Festival: " + this.name + ", Number of movies: " + this.totalFestMovies() + "</p>";
    output += "<ol>"

    for (var i = 0; i < this.listOfPrograms.length; i++) {
        var program = this.listOfPrograms[i];
        if (program.listOfMovies.length < 1) {
            output += program.getData();
            output += "There are no movies on this day.";
            continue;
        }
        output += "<li>" + program.getData() + "</li>";

        output += "<ol>";

        for (var j = 0; j < program.listOfMovies.length; j++) {
            var movie = program.listOfMovies[j];
            output += "<li>" + movie.getInfo() + "</li>";
        }
        output += "</ol>";
    }
    output += "</ol>";
    return output;
};
