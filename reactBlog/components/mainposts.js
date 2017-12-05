import React from 'react';
import Timer from './timer'
import { Link } from 'react-router-dom';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then(result => {
                this.setState({posts: result});
            });
    }

    render() {
        return this
            .state
            .posts
            .map((post) => <Post title={post.title} body={post.body} id={post.id} key={post.id}/>)

    }
}

const Post = function (props) {
    return (
        <div className="col s12 m6 l4">
            <div className="card large hoverable">
                <div className="card-image">
                    <img src="../img/sample-1.jpg"/>
                    <span className="card-title">{props.title}</span>
                </div>
                <div className="card-content">
                    <p>{props.body}</p>
                    <p className="waves-effect waves-light btn"><Link to={`/posts/${props.id}`}>Read more</Link></p>
                </div>
            </div>
        </div>
    );
};

const Main = function () {
    return (
        <div className="container">
            <div className="row">
                <Timer/>
                <Posts/>
            </div>
        </div>
    )
};

// Post.defaultProps = {     title: "Post header" }; Post.propTypes = { title:
// PropTypes.string.isRequired };

export default Main;