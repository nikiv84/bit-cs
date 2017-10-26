function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getInfo = function () {
    return this.title + ", duration: " + this.length + ", genre: " + this.genre;
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.totalNumOfMovies = 0;
    this.totalLength = 0;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.totalNumOfMovies++;
    this.totalLength += movie.mLength;

};

// Program.prototype.getInfo = function () {
//     var output = '';
//     output += "Date: " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() +
//         ", Program length: " + this.totalLength + "min\n";
//     for (var i = 0; i < this.listOfMovies.length; i++) {
//         var movie = this.listOfMovies[i];
//         output += "\t\t" + (i + 1) + ". " + movie.getData() + "\n";
//     }
//     return output;
// };

Program.prototype.getData = function () {
    return "Date: " + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear();

}