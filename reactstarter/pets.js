import React from "react";
import ReactDOM from "react-dom";

const Pets = function (props) {

    if (props.size >= 50) {
        return (
            <Dog />
        );
    } else if (props.size < 50) {
        return (
            <Aquarium numOfFish="15" />
        );
    }
};

const Aquarium = function (props) {
    let fishes = [];
    for (let i = 0; i < props.numOfFish; i++) {
        fishes.push({ id: i });
    }
    return (
        fishes.map((fish, fishID) => <Fish key={fish.id} id={fishID} />)
    );
};

const Fish = function (props) {
    return (
        <p>I'm a fish number <strong>{props.id+1}</strong></p>
    );
};

const Dog = function (props) {
    return (
        <p>I'm a dog!</p>
    );
};

export default Pets;