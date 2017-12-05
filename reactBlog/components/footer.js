import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";

const Footer = function (props) {
    return (
        <footer className="page-footer purple darken-4">
            <div className="footer-copyright">
                <div className="container">
                    Copyright &copy; 2017 by <a href="https://github.com/nikiv84" target="_self">
                        Ivan Nikolic</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;