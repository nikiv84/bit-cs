import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import Data from "../data";

const Main = function (props) {
    const data = Data.items;
    const posts = [];
    for (let i = 0; i < data.length; i++) {
        posts.push(Data.items);
    }
    return (
        data.map((post) => <Post title={post.title} body={post.body} key={post.id} />)
    );
};

const Post = function (props) {
    return (

        <div className="col s12 m6 l4">
            <div className="card large hoverable">
                <div className="card-image">
                    <img src="../img/sample-1.jpg" />
                    <span className="card-title">{props.title}</span>
                </div>
                <div className="card-content">
                    <p>{props.body}</p>
                </div>
            </div>
        </div>

    );
};
const Posts = function (props) {
    return (
        <div className="container">
            <div className="row">
                <Main />
            </div>
        </div>
    );
};

export default Posts;