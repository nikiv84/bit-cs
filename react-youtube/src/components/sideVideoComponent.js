import React from "react";
import { Link } from "react-router-dom";


class SideVideoComponent extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(!this.props.prevVid) {
            return;
        }
        const id = this.props.prevVid.id;
        this.props.handleHistory(id);
    }

    render() {
        const { id, title, description, thumbnails } = this.props.video;

        return (
            <div>
                <Link to={`/video/${id}`} onClick={this.handleClick}>
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