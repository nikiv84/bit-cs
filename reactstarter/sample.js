import React from "react";
import ReactDOM from "react-dom";
import Child from "./nodes";
import Pets from "./pets";

const MyComponent = function (props) {
    
    return (
        <div>
            <h1>Hello {props.name}! Today is {new Date().toDateString()}</h1>
            <Child message="First paragraph." />
            <Child message="Second paragraph." />
            <Pets size="30" />

        </div>
    );
};


ReactDOM.render(<MyComponent name="Ivan" />, document.getElementById("app"));