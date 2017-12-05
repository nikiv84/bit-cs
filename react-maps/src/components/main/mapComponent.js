import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MyMapComponent from "./myMapComponent";


class MapComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMarkerShown: false,
            latLong: {
                lat: 41.902783,
                lng: 12.496366
            }
        }
    }

    componentDidMount() {
        this.delayedShowMarker();
    }

    componentWillReceiveProps(nextProps) {
        const latLong = nextProps.coordinates;
        this.setState({
            latLong
        })
        console.log("evo gaaa", latLong);
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)

    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <div className="z-depth-3">
                <MyMapComponent
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                    latLong={this.state.latLong}
                />
            </div>
        )
    }
}

export default MapComponent;