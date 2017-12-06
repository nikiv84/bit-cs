import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const HumidGraph = (props) => {


    return (
        <div>
            <Sparklines data={props.humid}>
                <SparklinesLine color="blue" />
                <SparklinesReferenceLine type="median" />
            </Sparklines>
        </div>
    )
}

export default HumidGraph;