import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

const Data = function (props, onFinish) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            onFinish(response);
        })
        .catch((error) => {
            throw new Error('Error retrieving data!');
        });

};

export default Data;