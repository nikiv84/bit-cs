import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const HumidGraph = (props) => {


    return (
        <div>
            <Sparklines data={props.humid}>
                <SparklinesLine color="blue" />
            </Sparklines>
        </div>
    )
}

export default HumidGraph;