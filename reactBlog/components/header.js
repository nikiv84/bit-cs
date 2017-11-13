import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

const Header = function (props) {
    return (
        <header>
            <nav className=" indigo darken-3 lighten-1">
                <div className="nav-wrapper container">
                    <a className="btn btn-floating deep-purple darken-1 pulse">BIT</a>
                    <a id="logo-container" href="#" className="brand-logo">&nbsp;&nbsp;Blog</a>
                </div>
            </nav>
        </header>

    );
};

export default Header;