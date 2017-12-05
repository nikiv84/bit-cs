import React from "react";
import PropTypes from "prop-types";

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            posts: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result => result.json())
            .then(result => {
                this.setState({authors: result});
            });
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then(result => {
                this.setState({posts: result});
            });
    }

    render() {
        return this
            .state
            .authors
            .map((author) => <Author name={author.name} key={author.id}/>)

    }
}

const Author = function (props) {
    return (
        <li className="collection-item">{props.name}</li>
    );
};

const AuthorsComponent = function () {
    return (
        <div className="container">
            <div className="row">
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h4>Authors</h4>
                    </li>
                    <Authors/>
                </ul>
            </div>
        </div>
    )
};

export default AuthorsComponent;