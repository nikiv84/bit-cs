import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDKVVnOLCMnQ1ctojD3QJMZlpS8oWHjP08&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `600px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={6}
        defaultCenter={props.latLong}
        ref={(map) => map && map.panTo(props.latLong)}
    >
        {props.isMarkerShown && <Marker position={props.latLong} onClick={props.onMarkerClick} />}
    </GoogleMap>
    )

export default MyMapComponent;