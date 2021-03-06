import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchString: "" }

        this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // handleClick(event) {
    //     event.preventDefault();
    //     console.log(this.state.searchString);
    //     this.props.searchRequest(this.state.searchString);
    // }

    handleChange(event) {
        let searchInput = event.target.value;

        this.setState({
            searchString: searchInput
        })
    }

    handleKeyPress(e) {
        // e.preventDefault();
        if (e.key === 'Enter') {
            if (this.state.searchString === "") {
                return;
            }
            this.props.searchRequest(this.state.searchString);
        }
    }


    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    
                        <div className="input-field">
                            <input id="search" type="search" onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.searchString} required />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                            {/* <button onClick={this.handleClick} className="waves-effect waves-light btn">Search</button> */}
                        </div>
                    
                </div>
            </nav>
        )
    }
}

export default Search;