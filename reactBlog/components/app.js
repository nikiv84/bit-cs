import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import About from "./about";
import Authors from "./authors";
import Footer from "./footer";

const App = function (props) {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/posts" component={Main}/>
                <Redirect exact from="/" to="/posts"/>
                <Route path="/about" component={About}/>
                <Route path='/authors' component={Authors}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
