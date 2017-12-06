import React from 'react';
import { Sparklines, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

const TempGraph = (props) => {


    return (
        <div>
            <Sparklines data={props.temp}>
                <SparklinesBars style={{ stroke: "blue", strokeWidth: "2", fill: "#40c0f5" }} />
                <SparklinesReferenceLine type="median" />
            </Sparklines>
        </div>
    )
}

export default TempGraph;