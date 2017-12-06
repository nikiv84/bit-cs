import React from "react";

class VideoComponent extends React.Component {
    render() {
        const { id, link, title, description } = this.props.video;

        return (
            <div>
                <iframe src={`https://www.youtube.com/embed/${id}`} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                <div className="left-align">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>

        )
    }
}

export default VideoComponent;