import React from "react";
import SearchComponent from "./searchComponent";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {searchTerm: null} 
    }

    render() {
        return(
            <SearchComponent />
        )
    }
}

export default Search;