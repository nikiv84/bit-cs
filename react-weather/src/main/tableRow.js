import React from "react";
import MapComponent from "./mapComponent";
import TempGraph from "../graph/tempGraphComponent";
import HumidGraph from "../graph/humidityGraphComponent";

const TableRow = (props) => {
    let cityCoord = {
        lat: props.city.lat,
        lng: props.city.lon
    }

    let temp = props.city.temp;
    let humid = props.city.humid;

    console.log(cityCoord);

    return (
        <tr>
            <td style={{ position: "relative" }}><div style={{ height: "300px", width: "300px" }}>
                <MapComponent initialCenter={cityCoord} /></div></td>
            <td><TempGraph temp={temp} /></td>
            <td><HumidGraph humid={humid} /></td>
        </tr>
    )
}

export default TableRow;