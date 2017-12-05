import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makeTimer: "pending..."
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                makeTimer: new Date()
                    .toTimeString()
                    .substr(0, 8) + "h"
            })
        }, 1000)
    }

    render() {
        return <h3>Current time: {this.state.makeTimer}</h3>
    }
}

export default Timer;