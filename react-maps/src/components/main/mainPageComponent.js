import React from "react";
import CitySlider from "./slider";
import MapComponent from "./mapComponent";

class MainPageComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {coordinates: {}}
        this.handleCoordinates = this.handleCoordinates.bind(this);
    }

    handleCoordinates(coordinates) {
        this.setState({
            coordinates: coordinates
        })
    }

    render() {

        // if(!this.state.coordinates) {
        //     return <h1>Loading...</h1>
        // }

        return (
            <div className="container">
                <div className="row map">
                    <div className="col s12">
                        <MapComponent isMarkerShown coordinates={this.state.coordinates} />
                        <CitySlider getCoordinates={this.handleCoordinates} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPageComponent;