import React from "react";
import MapComponent from "./mapComponent";
import TempGraph from "../graph/tempGraphComponent";

const TableDataComponent = (props) => {
    const cityId = props.city.id;
    const cityName = props.city.name;
    const cityCoord = props.city.coord;
    const lat = cityCoord.lat;
    const lng = cityCoord.lon;
    console.log(lat);

    const cities = {
        belgrade: {
            lat: lat,
            lng: lng
        },
        nis: {
            lat: 43.320902,
            lng: 21.895759
        },
        paris: {
            lat: 48.856614,
            lng: 2.352222
        },
        newYork: {
            lat: 40.712775,
            lng: -74.005973
        },

    }

    return (
        <table className="highlight">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td style={{ position: "relative" }}><div style={{ height: "300px", width: "300px" }}><MapComponent initialCenter={cities.belgrade} /></div></td>
                    <td><TempGraph /></td>
                    <td>$0.87</td>
                </tr>
                <tr>
                    <td style={{ position: "relative" }}><div style={{ height: "300px" }}><MapComponent initialCenter={cities.nis} /></div></td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                </tr>
                <tr>
                    <td style={{ position: "relative" }}><div style={{ height: "300px" }}><MapComponent initialCenter={cities.paris} /></div></td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                </tr>
                <tr>
                    <td style={{ position: "relative" }}><div style={{ height: "300px" }}><MapComponent initialCenter={cities.newYork} /></div></td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableDataComponent;