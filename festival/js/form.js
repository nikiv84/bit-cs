var movies = [];
var programs = [];
var fest = new Festival("Belgrade FEST");
function createMovie() {
    var btnAddMov = document.getElementById("btnAddMov");
    var titleElement = document.getElementById("mTitle");
    var lengthElement = document.getElementById("mLength");
    var genreElement = document.getElementById("mGenre");
    var genreOption = genreElement[genreElement.selectedIndex];
    var movieList = document.getElementById("movie-list");
    var errorElement = document.getElementById("movie-error");
    var moviesSelect = document.getElementById("movies");
    var btnMovie = document.getElementById('btnMovie');

    var title = titleElement.value.trim();
    var length = Number(lengthElement.value);
    var genre = genreOption.value;

    if (!title || !length || length <= 1 || (genre == "none") || typeof length != "number") {
        if (length <= 0 || typeof length != "number") {
            errorElement.textContent = "Error! Please enter a valid number!"
            return;
        }
        errorElement.textContent = "Error!"
        return;
    }

    for (var mov in movies) {
        if (title.toLowerCase() == movies[mov].title.toLowerCase()) {
            errorElement.textContent = "Error!"
            return;
        }
    }

    errorElement.textContent = "";
    var movie = new Movie(title, length, genre);
    movies.push(movie);
    btnAddMov.removeAttribute('disabled');

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
    var btnAddMov = document.getElementById("btnAddMov");
    var dateElement = document.getElementById("pDate").value;
    var programList = document.getElementById("program-list");
    var errorElement = document.getElementById("prog-error");
    var programsSelect = document.getElementById("programs");
    var programsFestSelect = document.getElementById("programFest");

    if (!dateElement) {
        errorElement.textContent = "Error!"
        return;
    }

    for (var prog in programs) {
        if ((new Date(dateElement)).getUTCDate() == programs[prog].date.getUTCDate()) {
            errorElement.textContent = "Error! Program already created."
            return;
        }
    }
    errorElement.textContent = "";

    var program = new Program(new Date(dateElement));
    programs.push(program);
    btnAddMov.removeAttribute('disabled');

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
    programsFestSelect.innerHTML = programsOptions;
};

function addMovie() {
    var programList = document.getElementById("progmov-list");
    var selectMovieElement = document.getElementById("movies");
    var selectMovieOption = selectMovieElement[selectMovieElement.selectedIndex].value;
    var selectProgramElement = document.getElementById("programs");
    var selectProgramOption = selectProgramElement[selectProgramElement.selectedIndex].value;
    var errorElement = document.getElementById("progmov-error");

    if (selectProgramOption == "none" || selectMovieOption == "none") {
        errorElement.textContent = "Error!"
        return;
    }
    errorElement.textContent = "";

    for (var i = 0; i < programs[selectProgramOption].listOfMovies.length; i++) {
        if (movies[selectMovieOption] == programs[selectProgramOption].listOfMovies[i]) {
            errorElement.textContent = "Error! Movie already added to the selected program."
            return;
        }
    }
    errorElement.textContent = "";

    programs[selectProgramOption].listOfMovies.push(movies[selectMovieOption]);

    var listOfMoviesInProgram = programs[selectProgramOption].listOfMovies;
    var programOutput = "<p>" + programs[selectProgramOption].getData() + "</p>";
    programOutput += "<ol>"

    for (var i = 0; i < listOfMoviesInProgram.length; i++) {
        var movieInProgram = listOfMoviesInProgram[i];
        programOutput += "<li>" + movieInProgram.getInfo() + "</li>";
    }
    programOutput += "</ol>"

    programList.innerHTML = programOutput;

};
function addProgram() {
    var selectProgramElement = document.getElementById("programFest");
    var selectProgramOption = selectProgramElement[selectProgramElement.selectedIndex].value;
    var errorElement = document.getElementById("progfest-error");
    errorElement.textContent = "";
    if (selectProgramOption == "none") {
        errorElement.textContent = "Error!"
        return;
    }
    errorElement.textContent = "";

    for (var i = 0; i < fest.listOfPrograms.length; i++) {
        if (fest.listOfPrograms[i] == programs[selectProgramOption]) {
            errorElement.textContent = "Error! Program already added to the festival."
            return;
        }
    }
    errorElement.textContent = "";

    fest.listOfPrograms.push(programs[selectProgramOption]);
    errorElement.textContent = "Program added to festival!"

};
function festivalProgram() {
    var progFestElement = document.getElementById("progfest-list");

    var output = fest.getInfo();
    progFestElement.innerHTML = output;

}