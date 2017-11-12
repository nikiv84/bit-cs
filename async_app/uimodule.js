let searchInput = $("#searchinput");
let searchBtn = $("#search");
let searchOption = $("#select option:selected");


class UI {
    constructor() {
        this.name = 'UIMOD!';
    }
    // getSearch(searchFunc) {
    //     if (search.val() == '') {
    //         search.val('nikiv84');
    //         searchFunc("nikiv84");
    //     } else {
    //         searchFunc(search.val());
    //     }
    // }
    getSearch() {
        console.log('getSearch:' + searchInput.val());
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
        const list = $('<div class="col-12"><ul id="things"></ul></div>');
        $('#output .container .row').append('<div class="col-12"><h1>' + things[0].kind + ' search:</h1></div>');
        $('#output .container .row').append(list);
        $('#things').append('<div class="container"><div class="row"></div></div>')
        things.forEach(element => {
            // let avatar = $('<img>');
            // let liThings = $('<div class="col-4"><li></li></div>');
            // avatar.attr('src', element.avatarUrl);
            // avatar.attr('width', '300px');
            // liThings.text(element.getData()).append(avatar);
            $('#things .container .row').append(
                `<div class="col-4"><li>`
                    + element.getData() + `<img src="`+ element.avatarUrl + `" alt="">
                </li></div>`
            );
        })
    }
}

export default UI;