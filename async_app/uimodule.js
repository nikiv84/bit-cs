let searchInput = $("#searchinput");
let searchBtn = $("#search");
let searchOption = $("#select option:selected").val();

class UI {
    constructor() {
        this.name = 'UIMOD!';
    }
    getSearch() {
        return searchInput.val();
    }
    clearUI() {
        $('#output .container .row').text('');
    }
    getDOMElements() {
        return {
            search: search,
            searchOption: searchOption,
            searchInput: searchInput
        }
    }
    generateHTML(things) {
        const list = $('<div class="col-12 text-center text-md-left pl-3 pr-3"><ul id="things"></ul></div>');
        $('#output .container .row').append('<div class="col-12 text-center text-md-left pl-3 pr-3"><h3>' + things[0].kind + ' search:</h3></div>');
        $('#output .container .row').append(list);
        $('#things').append('<div class="container-fluid"><div class="row"></div></div>')
        things.forEach(element => {
            $('#things .container-fluid .row').append(
                `<div class="col-4"><li>` +
                element.name + `<img src="` + element.avatarUrl + `" alt="avatar">
                </li></div>`
            );
        })
    }
}

export default UI;