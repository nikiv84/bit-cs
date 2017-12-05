import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import { Link } from "react-router-dom";

const Header = function (props) {
    return (
        <header>
            <nav className="purple darken-4">
                <div className="nav-wrapper container">
                    <a className="btn btn-floating deep-purple darken-1 pulse">BIT</a>
                    <a id="logo-container" href="#" className="brand-logo">&nbsp;&nbsp;Blog</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/authors'>Authors</Link>
                        </li>
          
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;