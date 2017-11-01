var dataController = (function () {

    var data = {
        movies: [],
        programs: []
    };

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    };

    function addMovie(title, length, genre) {
        var movie = new Movie(title, parseFloat(length), genre);
        data.movies.push(movie);

        return movie;
    }

    function totalMovieLength() {
        var totalLength = 0;
        data.movies.forEach(function (movie) {
            totalLength += movie.length;
        });
        return totalLength;
    }

    //exclusively for testing
    function logData() {
        console.log(data);
    }

    return {
        addMovie: addMovie,
        //ONLY FOR TESTING
        log: logData,
        totalMovieLength: totalMovieLength
    }
})();

var UIController = (function () {

    var DOMStrings = {
        inputTitle: "mTitle",
        inputLength: "mLength",
        inputGenre: "mGenre",
        containerMovieList: '#movie-list ul',
        containerError: 'movie-error',
        buttonAddMovie: 'btnMovie',
        formElement: 'form',
        containerTotalLength: '#movie-list p'
    }

    function collectInput() {
        var titleElement = document.getElementById(DOMStrings.inputTitle);
        var lengthElement = document.getElementById(DOMStrings.inputLength);
        var genreSelectElement = document.getElementById(DOMStrings.inputGenre);
        var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];

        var result = {
            title: titleElement.value,
            length: lengthElement.value,
            genre: genreOptionElement.value
        }

        return result;
    }

    function displayListItem(movie) {
        var listEl = document.querySelector(DOMStrings.containerMovieList);

        var htmlItem = "<li>" + movie.title + '</li>';
        listEl.insertAdjacentHTML("beforeend", htmlItem);
    }

    function displayTotalLength() {
        var movieLengthEl = document.querySelector(DOMStrings.containerTotalLength);
        movieLengthEl.textContent = dataController.totalMovieLength();
    }

    function clearFormInputs() {
        document.querySelector(DOMStrings.formElement).reset();
    }

    function showError(input) {
        var errorMsg = '';
        if (!input.title) {
            errorMsg = 'Enter title';
        } else if (!input.length) {
            errorMsg = 'Enter length';
        } else if (!input.genre) {
            errorMsg = 'Enter genre';
        } else {
            errorMsg = 'Unknown error';
        }

        document.getElementById(DOMStrings.containerError).textContent = errorMsg;
    }

    //in order not to change the object itself, but rather to get its copy
    function getDOMStrings() {
        return DOMStrings;
    }

    return {
        getInput: collectInput,
        displayListItem: displayListItem,
        getDOMStrings: getDOMStrings,
        clearFormInputs: clearFormInputs,
        showError: showError,
        displayTotalLength: displayTotalLength
    };
})();

var mainController = (function (dataCtrl, UICtrl) {


    function setupEventListeners() {
        var DOM = UICtrl.getDOMStrings();

        document.getElementById(DOM.buttonAddMovie).addEventListener("click", function (event) {
            ctrlAddMovieItem();
        });

        document.addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                ctrlAddMovieItem();
            }
        });
    }

    function ctrlAddMovieItem() {
        //1. get form data (UI)
        var input = UICtrl.getInput();

        //validate form
        if (!input.title || !input.length || !input.genre) {
            UICtrl.showError(input);
            return;
        }

        //2. add movie to list
        var movie = dataCtrl.addMovie(input.title, input.length, input.genre);
        console.log(movie);

        //3. Clear form inputs
        UICtrl.clearFormInputs();

        //4.show list on UI
        UICtrl.displayListItem(movie);
        UICtrl.displayTotalLength();

        //5. calculate movie count

        //6. update UI
    }

    return {
        init: function () {
            console.log("App has started");
            setupEventListeners();
        }
    }
})(dataController, UIController);

mainController.init();