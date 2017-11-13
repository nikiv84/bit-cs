import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import Header from "./header";
import Posts from "./main";
import Footer from "./footer";

const App = function (props) {
    return (
        <div>
            <Header />
            <Posts />
            <Footer />
        </div>
    );
}
export default App;
