import React from "react";
import TableRow from "./tableRow";

const TableDataComponent = (props) => {

    console.log("a ovo ", props.cities);

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
                {props.cities.map((city, index)=>{return <TableRow city={city} key={index} />})}
            </tbody>
        </table>
    )
}

export default TableDataComponent;