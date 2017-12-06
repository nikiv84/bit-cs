import React from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';

const TempGraph = (props) => {


    return (
        <div>
            <Sparklines data={props.temp}>
                <SparklinesBars style={{ stroke: "blue", strokeWidth: "2", fill: "#40c0f5" }} />
            </Sparklines>
        </div>
    )
}

export default TempGraph;