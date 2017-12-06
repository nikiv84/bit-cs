import React from "react";
import { Link } from "react-router-dom";

class SideVideoComponent extends React.Component {
    render() {
        const { id, link, title, description, thumbnails } = this.props.video;
        const newTo = { pathname: `/video/${id}`, state: { foo: 'bar'} };
        return (

            <div>
                <Link to={newTo}>
                    <img src={thumbnails} alt={title} className="thumb" />
                    <div className="left-align">
                        <h5>{title}</h5>
                        <p>Recommended for you</p>
                    </div>
                </Link>
            </div>

        )
    }
}

export default SideVideoComponent;