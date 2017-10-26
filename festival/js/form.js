var movies = [];
var programs = [];
// var fest = new Festival();
function createMovie() {
    var titleElement = document.getElementById("mTitle");
    var lengthElement = document.getElementById("mLength");
    var genreElement = document.getElementById("mGenre");
    var movieList = document.getElementById("movie-list");
    var errorElement = document.getElementById("movie-error");
    var genreOption = genreElement[genreElement.selectedIndex];
    var moviesSelect = document.getElementById("movies");

    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOption.value;

    if (!title || !length || length <= 0 || (genre == "none")) {
        if (length <= 0) {
            errorElement.textContent = "Error! Please enter a valid number!"
            return;
        }
        errorElement.textContent = "Error!"
        return;
    }
    errorElement.textContent = "";
    var movie = new Movie(title, length, genre);
    movies.push(movie);

    var listOfMovies = "<ol>";
    var moviesOptions = "<option value='none'>--</option>";

    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];
        listOfMovies += "<li>" + film.getInfo() + "</li>";
        moviesOptions += "<option value='" + i + "'>" + film.title + "</option>";
    }
    listOfMovies += "</ol>";
    moviesSelect.innerHTML = moviesOptions;

    movieList.innerHTML = listOfMovies;
};

function createProgram() {
    var dateElement = document.getElementById("pDate").value;
    var programList = document.getElementById("program-list");
    var errorElement = document.getElementById("prog-error");
    var programsSelect = document.getElementById("programs");

    if (!dateElement) {
        errorElement.textContent = "Error!"
        return;
    }
    errorElement.textContent = "";

    var program = new Program(dateElement);
    programs.push(program);

    var listOfPrograms = "<ol>";
    var programsOptions = "<option value='none'>--</option>";

    for (var i = 0; i < programs.length; i++) {
        var prog = programs[i];
        listOfPrograms += "<li>" + prog.getData() + "</li>";
        programsOptions += "<option value='" + i + "'>" + prog.getData() + "</option>";
    }
    listOfPrograms += "</ol>";

    programList.innerHTML = listOfPrograms;
    programsSelect.innerHTML = programsOptions;


}