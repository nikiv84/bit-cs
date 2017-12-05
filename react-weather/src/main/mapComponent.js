import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    width: '90%',
    height: '90%'
}

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: "Belgrade"
        }
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={10}
                style={style}
                initialCenter={this.props.initialCenter}
                onClick={this.onMapClicked}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDKVVnOLCMnQ1ctojD3QJMZlpS8oWHjP08"
})(MapContainer)